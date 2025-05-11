import { getSupabaseServerClient } from "@/lib/supabase"
import { DataTable } from "@/components/admin/data-table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default async function PlansPage() {
  const supabase = getSupabaseServerClient()

  // Get plans
  const { data: plans, error } = await supabase.from("plans").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching plans:", error)
    return <div>Error loading plans</div>
  }

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
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }: any) => <span>₹{row.original.price}</span>,
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
            <Link href={`/admin/plans/${row.original.id}`}>View</Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href={`/admin/plans/${row.original.id}/edit`}>Edit</Link>
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Plans</h1>
          <p className="text-gray-500">Manage counselling plans</p>
        </div>
        <Button asChild>
          <Link href="/admin/plans/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Plan
          </Link>
        </Button>
      </div>

      <DataTable columns={columns} data={plans || []} />
    </div>
  )
}
