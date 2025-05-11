import { getSupabaseServerClient } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function ContactDetailPage({ params }: { params: { id: string } }) {
  const supabase = getSupabaseServerClient()

  // Get contact submission
  const { data: contact, error } = await supabase.from("contact_submissions").select("*").eq("id", params.id).single()

  if (error || !contact) {
    console.error("Error fetching contact:", error)
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="icon">
          <Link href="/admin/contacts">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Contact Submission Details</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Submission Information</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">ID</dt>
              <dd>{contact.id}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd>{contact.name}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd>{contact.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Phone</dt>
              <dd>{contact.phone || "N/A"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Subject</dt>
              <dd>{contact.subject || "N/A"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Submitted At</dt>
              <dd>{new Date(contact.created_at).toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Message</dt>
              <dd className="whitespace-pre-wrap p-4 bg-gray-50 rounded-md mt-2">{contact.message}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}
