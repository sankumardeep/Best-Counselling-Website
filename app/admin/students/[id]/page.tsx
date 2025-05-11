import { getSupabaseServerClient } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, Calendar, CreditCard } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { StudentActivityLog } from "@/components/admin/student-activity-log"

export default async function StudentDetailPage({ params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient()

  // Get user profile
  const { data: user, error: userError } = await supabase
    .from("users_profiles")
    .select("*")
    .eq("id", params.id)
    .single()

  if (userError || !user) {
    console.error("Error fetching user:", userError)
    notFound()
  }

  // Get user plans
  const { data: userPlans, error: plansError } = await supabase
    .from("user_plans")
    .select(`
      *,
      plans:plan_id (*)
    `)
    .eq("user_id", params.id)
    .order("created_at", { ascending: false })

  if (plansError) {
    console.error("Error fetching user plans:", plansError)
  }

  // Calculate student metrics
  const activePlans = userPlans?.filter((plan) => plan.status === "active") || []
  const totalSpent = userPlans?.reduce((sum, plan) => sum + (plan.plans?.price || 0), 0) || 0
  const joinDate = new Date(user.created_at).toLocaleDateString()
  const lastActive =
    userPlans && userPlans.length > 0 ? new Date(userPlans[0].created_at).toLocaleDateString() : "Never"

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="icon">
          <Link href="/admin/students">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Student Details</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Student Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center mb-6">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarFallback className="text-2xl">{user.full_name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">{user.full_name}</h2>
              <p className="text-gray-500">
                {activePlans.length > 0 ? (
                  <Badge className="bg-green-500 mt-2">Active Student</Badge>
                ) : (
                  <Badge className="bg-gray-500 mt-2">Inactive</Badge>
                )}
              </p>
            </div>

            <dl className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-gray-500 mr-2" />
                <dt className="text-sm font-medium text-gray-500 mr-2">Email:</dt>
                <dd>{user.email || "N/A"}</dd>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gray-500 mr-2" />
                <dt className="text-sm font-medium text-gray-500 mr-2">Phone:</dt>
                <dd>{user.phone || "N/A"}</dd>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                <dt className="text-sm font-medium text-gray-500 mr-2">Joined:</dt>
                <dd>{joinDate}</dd>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 text-gray-500 mr-2" />
                <dt className="text-sm font-medium text-gray-500 mr-2">Total Spent:</dt>
                <dd>₹{totalSpent.toLocaleString()}</dd>
              </div>
            </dl>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold mb-2">Quick Actions</h3>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  Send Email
                </Button>
                <Button className="w-full" variant="outline">
                  Add Note
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="p-0">
            <Tabs defaultValue="plans" className="w-full">
              <TabsList className="w-full rounded-none">
                <TabsTrigger value="plans" className="flex-1">
                  Enrolled Plans
                </TabsTrigger>
                <TabsTrigger value="activity" className="flex-1">
                  Activity Log
                </TabsTrigger>
                <TabsTrigger value="notes" className="flex-1">
                  Notes
                </TabsTrigger>
              </TabsList>

              <TabsContent value="plans" className="p-6">
                <h3 className="text-lg font-semibold mb-4">Enrolled Plans</h3>
                {userPlans && userPlans.length > 0 ? (
                  <div className="space-y-4">
                    {userPlans.map((plan) => (
                      <div key={plan.id} className="border p-4 rounded-md">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{plan.plans?.name || "Unknown Plan"}</h4>
                            <p className="text-sm text-gray-500">
                              {plan.plans?.category || "Unknown Category"} - ₹{plan.plans?.price || "N/A"}
                            </p>
                          </div>
                          <Badge className={plan.status === "active" ? "bg-green-500" : "bg-gray-500"}>
                            {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          <p>Purchased: {new Date(plan.purchase_date).toLocaleDateString()}</p>
                          {plan.expiry_date && <p>Expires: {new Date(plan.expiry_date).toLocaleDateString()}</p>}
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          {plan.status === "active" && (
                            <Button size="sm" variant="outline" className="text-red-500">
                              Mark as Expired
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No plans purchased</p>
                )}
              </TabsContent>

              <TabsContent value="activity" className="p-6">
                <h3 className="text-lg font-semibold mb-4">Activity Log</h3>
                <StudentActivityLog userId={params.id} />
              </TabsContent>

              <TabsContent value="notes" className="p-6">
                <h3 className="text-lg font-semibold mb-4">Admin Notes</h3>
                <p className="text-gray-500">No notes available for this student.</p>
                <Button className="mt-4">Add Note</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
