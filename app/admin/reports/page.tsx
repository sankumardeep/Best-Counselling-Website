import { getSupabaseServerClient } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EnrollmentChart } from "@/components/admin/enrollment-chart"
import { PlanPerformanceTable } from "@/components/admin/plan-performance-table"

export default async function ReportsPage() {
  const supabase = getSupabaseServerClient()

  // Get monthly enrollment data for chart
  const sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

  const { data: monthlyEnrollments } = await supabase
    .from("user_plans")
    .select("created_at")
    .gte("created_at", sixMonthsAgo.toISOString())
    .order("created_at", { ascending: true })

  // Get plan performance data
  const { data: planData } = await supabase.from("user_plans").select(`
      plan_id,
      plans:plan_id (name, category, price)
    `)

  // Process monthly data for chart
  const monthlyData = processMonthlyData(monthlyEnrollments || [])

  // Process plan performance data
  const planPerformance = processPlanPerformance(planData || [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <p className="text-gray-500">View enrollment statistics and performance metrics</p>
      </div>

      <Tabs defaultValue="enrollments">
        <TabsList>
          <TabsTrigger value="enrollments">Enrollments</TabsTrigger>
          <TabsTrigger value="plans">Plan Performance</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>

        <TabsContent value="enrollments" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Enrollments</CardTitle>
            </CardHeader>
            <CardContent>
              <EnrollmentChart data={monthlyData} />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{monthlyEnrollments?.length || 0}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{monthlyData.length > 0 ? monthlyData[0].count : 0}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{calculateGrowthRate(monthlyData)}%</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Plan Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <PlanPerformanceTable data={planPerformance} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">Revenue analysis will be available soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
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

// Helper function to process plan performance data
function processPlanPerformance(planData: any[]) {
  const planMap = new Map()

  planData.forEach((item) => {
    const planId = item.plan_id

    if (!planMap.has(planId)) {
      planMap.set(planId, {
        id: planId,
        name: item.plans?.name || "Unknown Plan",
        category: item.plans?.category || "Unknown",
        price: item.plans?.price || 0,
        enrollments: 0,
        revenue: 0,
      })
    }

    const plan = planMap.get(planId)
    plan.enrollments++
    plan.revenue += plan.price
  })

  return Array.from(planMap.values()).sort((a, b) => b.enrollments - a.enrollments)
}

// Helper function to calculate growth rate
function calculateGrowthRate(monthlyData: any[]) {
  if (monthlyData.length < 2) return 0

  const currentMonth = monthlyData[0].count
  const previousMonth = monthlyData[1].count

  if (previousMonth === 0) return 100

  const growthRate = ((currentMonth - previousMonth) / previousMonth) * 100
  return Math.round(growthRate)
}
