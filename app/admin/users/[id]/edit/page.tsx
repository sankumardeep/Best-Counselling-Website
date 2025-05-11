import { getSupabaseServerClient } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { UserEditForm } from "@/components/admin/user-edit-form"

export default async function UserEditPage({ params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient()

  // Get user profile
  const { data: user, error } = await supabase.from("users_profiles").select("*").eq("id", params.id).single()

  if (error || !user) {
    console.error("Error fetching user:", error)
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="icon">
          <Link href={`/admin/users/${params.id}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Edit User</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent>
          <UserEditForm user={user} />
        </CardContent>
      </Card>
    </div>
  )
}
