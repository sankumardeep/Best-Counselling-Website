import { getSupabaseServerClient } from "@/lib/supabase"
import { DataTable } from "@/components/admin/data-table"

export default async function ContactsPage() {
  const supabase = getSupabaseServerClient()

  // Get contact submissions
  const { data: contacts, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching contacts:", error)
    return <div>Error loading contacts</div>
  }

  // Pre-process the data to include formatted values
  const processedContacts =
    contacts?.map((contact) => ({
      ...contact,
      formattedPhone: contact.phone || "N/A",
      formattedSubject: contact.subject || "N/A",
      formattedDate: new Date(contact.created_at).toLocaleString(),
    })) || []

  // Define columns without functions
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "formattedPhone",
      header: "Phone",
    },
    {
      accessorKey: "formattedSubject",
      header: "Subject",
    },
    {
      accessorKey: "formattedDate",
      header: "Submitted At",
    },
    {
      accessorKey: "id",
      header: "Actions",
      id: "actions",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact Submissions</h1>
        <p className="text-gray-500">View and manage contact form submissions</p>
      </div>

      <DataTable columns={columns} data={processedContacts} actionLinkPrefix="/admin/contacts/" />
    </div>
  )
}
