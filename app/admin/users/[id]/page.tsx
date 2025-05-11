import { getSupabaseServerClient } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Edit } from "lucide-react"
import Link from "next/link"

export default async function UserDetailPage({ params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient()

  // Get user profile
  const { data: user, error } = await supabase.from("users_profiles").select("*").eq("id", params.id).single()

  if (error || !user) {
    console.error("Error fetching user:", error)
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="icon">
            <Link href="/admin/users">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">User Details</h1>
        </div>
        <Button asChild>
          <Link href={`/admin/users/${params.id}/edit`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit User
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">ID</dt>
                <dd>{user.id}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd>{user.full_name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd>{user.phone || "N/A"}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Admin</dt>
                <dd>{user.is_admin ? "Yes" : "No"}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Created At</dt>
                <dd>{new Date(user.created_at).toLocaleString()}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Updated At</dt>
                <dd>{new Date(user.updated_at).toLocaleString()}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Plans</CardTitle>
          </CardHeader>
          <CardContent>
            {userPlans && userPlans.length > 0 ? (
              <div className="space-y-4">
                {userPlans.map((plan) => (
                  <div key={plan.id} className="border p-4 rounded-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{plan.plans?.name || "Unknown Plan"}</h3>
                        <p className="text-sm text-gray-500">
                          {plan.plans?.category || "Unknown Category"} - ₹{plan.plans?.price || "N/A"}
                        </p>
                      </div>
                      <div className="text-sm font-medium px-2 py-1 rounded-full bg-gray-100">{plan.status}</div>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>Purchased: {new Date(plan.purchase_date).toLocaleDateString()}</p>
                      {plan.expiry_date && <p>Expires: {new Date(plan.expiry_date).toLocaleDateString()}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No plans purchased</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
