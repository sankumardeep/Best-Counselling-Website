import { getSupabaseServerClient } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Edit } from "lucide-react"
import Link from "next/link"
import { DeletePlanButton } from "@/components/admin/delete-plan-button"

export default async function PlanDetailPage({ params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient()

  // Get plan
  const { data: plan, error } = await supabase.from("plans").select("*").eq("id", params.id).single()

  if (error || !plan) {
    console.error("Error fetching plan:", error)
    notFound()
  }

  // Get users who have purchased this plan
  const { data: userPlans, error: userPlansError } = await supabase
    .from("user_plans")
    .select(`
      *,
      users:user_id (
        id,
        full_name
      )
    `)
    .eq("plan_id", params.id)
    .order("created_at", { ascending: false })

  if (userPlansError) {
    console.error("Error fetching user plans:", userPlansError)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="icon">
            <Link href="/admin/plans">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Plan Details</h1>
        </div>
        <div className="flex items-center gap-2">
          <DeletePlanButton planId={plan.id} planName={plan.name} />
          <Button asChild>
            <Link href={`/admin/plans/${params.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Plan
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Plan Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">ID</dt>
                <dd>{plan.id}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd>{plan.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Description</dt>
                <dd>{plan.description || "N/A"}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd>{plan.category}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Price</dt>
                <dd>₹{plan.price}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Created At</dt>
                <dd>{new Date(plan.created_at).toLocaleString()}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Users with this Plan</CardTitle>
          </CardHeader>
          <CardContent>
            {userPlans && userPlans.length > 0 ? (
              <div className="space-y-4">
                {userPlans.map((userPlan) => (
                  <div key={userPlan.id} className="border p-4 rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">
                          <Link href={`/admin/users/${userPlan.user_id}`} className="text-blue-600 hover:underline">
                            {userPlan.users?.full_name || "Unknown User"}
                          </Link>
                        </h3>
                      </div>
                      <div className="text-sm font-medium px-2 py-1 rounded-full bg-gray-100">{userPlan.status}</div>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>Purchased: {new Date(userPlan.purchase_date).toLocaleDateString()}</p>
                      {userPlan.expiry_date && <p>Expires: {new Date(userPlan.expiry_date).toLocaleDateString()}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No users have purchased this plan</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
