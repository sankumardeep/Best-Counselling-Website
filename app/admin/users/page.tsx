import { getSupabaseServerClient } from "@/lib/supabase"
import { DataTable } from "@/components/admin/data-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default async function UsersPage() {
  const supabase = getSupabaseServerClient()

  // Get users with auth data
  const { data: users, error } = await supabase
    .from("users_profiles")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching users:", error)
    return <div>Error loading users</div>
  }

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "full_name",
      header: "Name",
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }: any) => <span>{row.original.phone || "N/A"}</span>,
    },
    {
      accessorKey: "is_admin",
      header: "Admin",
      cell: ({ row }: any) => <span>{row.original.is_admin ? "Yes" : "No"}</span>,
    },
    {
      accessorKey: "created_at",
      header: "Created At",
      cell: ({ row }: any) => <span>{new Date(row.original.created_at).toLocaleString()}</span>,
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }: any) => (
        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="outline">
            <Link href={`/admin/users/${row.original.id}`}>View</Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href={`/admin/users/${row.original.id}/edit`}>Edit</Link>
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-gray-500">Manage user accounts</p>
        </div>
        <Button asChild>
          <Link href="/admin/users/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add User
          </Link>
        </Button>
      </div>

      <DataTable columns={columns} data={users || []} />
    </div>
  )
}
