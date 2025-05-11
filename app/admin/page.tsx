import { getSupabaseServerClient } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Package, MessageSquare, GraduationCap, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { EnrollmentChart } from "@/components/admin/enrollment-chart"
import { RecentEnrollments } from "@/components/admin/recent-enrollments"

export default async function AdminDashboard() {
  const supabase = getSupabaseServerClient()

  // Get counts
  const [usersResponse, plansResponse, contactsResponse, enrollmentsResponse, activeStudentsResponse] =
    await Promise.all([
      supabase.from("users_profiles").select("id", { count: "exact", head: true }),
      supabase.from("plans").select("id", { count: "exact", head: true }),
      supabase.from("contact_submissions").select("id", { count: "exact", head: true }),
      supabase.from("user_plans").select("id", { count: "exact", head: true }),
      supabase.from("user_plans").select("id", { count: "exact", head: true }).eq("status", "active"),
    ])

  const userCount = usersResponse.count || 0
  const planCount = plansResponse.count || 0
  const contactCount = contactsResponse.count || 0
  const enrollmentCount = enrollmentsResponse.count || 0
  const activeStudentCount = activeStudentsResponse.count || 0

  // Get recent enrollments (user_plans with user details)
  const { data: recentEnrollments } = await supabase
    .from("user_plans")
    .select(`
      *,
      users:user_id (
        id,
        full_name,
        phone
      ),
      plans:plan_id (
        name,
        category,
        price
      )
    `)
    .order("created_at", { ascending: false })
    .limit(5)

  // Get recent user registrations
  const { data: recentUsers } = await supabase
    .from("users_profiles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5)

  // Get monthly enrollment data for chart
  const sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

  const { data: monthlyEnrollments } = await supabase
    .from("user_plans")
    .select("created_at")
    .gte("created_at", sixMonthsAgo.toISOString())
    .order("created_at", { ascending: true })

  // Process monthly data for chart
  const monthlyData = processMonthlyData(monthlyEnrollments || [])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">Welcome to the BestCounsellor admin dashboard</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userCount}</div>
            <p className="text-xs text-gray-500">Registered users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
            <GraduationCap className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{enrollmentCount}</div>
            <p className="text-xs text-gray-500">Plan purchases</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            <Users className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeStudentCount}</div>
            <p className="text-xs text-gray-500">Students with active plans</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Enrollment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <EnrollmentChart data={monthlyData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button asChild className="w-full justify-start">
                <Link href="/admin/students">
                  <Users className="mr-2 h-4 w-4" />
                  View All Students
                </Link>
              </Button>

              <Button asChild className="w-full justify-start">
                <Link href="/admin/plans">
                  <Package className="mr-2 h-4 w-4" />
                  Manage Plans
                </Link>
              </Button>

              <Button asChild className="w-full justify-start">
                <Link href="/admin/enrollments">
                  <Calendar className="mr-2 h-4 w-4" />
                  Enrollment Reports
                </Link>
              </Button>

              <Button asChild className="w-full justify-start">
                <Link href="/admin/contacts">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Submissions
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Recent Enrollments</CardTitle>
            <Button asChild variant="outline" size="sm">
              <Link href="/admin/students">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <RecentEnrollments enrollments={recentEnrollments || []} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Recent Users</CardTitle>
            <Button asChild variant="outline" size="sm">
              <Link href="/admin/users">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers?.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{user.full_name}</p>
                    <p className="text-sm text-gray-500">Joined {new Date(user.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="text-sm text-gray-500">{user.is_admin ? "Admin" : "User"}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Helper function to process monthly enrollment data
function processMonthlyData(enrollments: any[]) {
  const months: Record<string, number> = {}

  // Initialize last 6 months
  for (let i = 0; i < 6; i++) {
    const date = new Date()
    date.setMonth(date.getMonth() - i)
    const monthYear = `${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`
    months[monthYear] = 0
  }

  // Count enrollments by month
  enrollments.forEach((enrollment) => {
    const date = new Date(enrollment.created_at)
    const monthYear = `${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`

    if (months[monthYear] !== undefined) {
      months[monthYear]++
    }
  })

  // Convert to array format for chart
  return Object.entries(months)
    .map(([month, count]) => ({ month, count }))
    .reverse()
}
