import { getSupabaseServerClient } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { PlanEditForm } from "@/components/admin/plan-edit-form"

export default async function PlanEditPage({ params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient()

  // Get plan
  const { data: plan, error } = await supabase.from("plans").select("*").eq("id", params.id).single()

  if (error || !plan) {
    console.error("Error fetching plan:", error)
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="icon">
          <Link href={`/admin/plans/${params.id}`}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Edit Plan</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Plan Information</CardTitle>
        </CardHeader>
        <CardContent>
          <PlanEditForm plan={plan} />
        </CardContent>
      </Card>
    </div>
  )
}
