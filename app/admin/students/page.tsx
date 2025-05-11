import { getSupabaseServerClient } from "@/lib/supabase"
import { DataTable } from "@/components/admin/data-table"
import { Button } from "@/components/ui/button"
import { Download, Filter } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default async function StudentsPage() {
  const supabase = getSupabaseServerClient()

  // Get all enrollments with user and plan details
  const { data: enrollments, error } = await supabase
    .from("user_plans")
    .select(`
      *,
      users:user_id (
        id,
        full_name,
        phone,
        email
      ),
      plans:plan_id (
        id,
        name,
        category,
        price
      )
    `)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching enrollments:", error)
    return <div>Error loading student data</div>
  }

  // Process data to create a student-centric view
  const students = processStudentData(enrollments || [])

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Student Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }: any) => <span>{row.original.phone || "N/A"}</span>,
    },
    {
      accessorKey: "activePlans",
      header: "Active Plans",
      cell: ({ row }: any) => <span>{row.original.activePlans}</span>,
    },
    {
      accessorKey: "totalSpent",
      header: "Total Spent",
      cell: ({ row }: any) => <span>₹{row.original.totalSpent.toLocaleString()}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }: any) => (
        <Badge className={row.original.status === "Active" ? "bg-green-500" : "bg-gray-500"}>
          {row.original.status}
        </Badge>
      ),
    },
    {
      accessorKey: "joinedDate",
      header: "Joined Date",
      cell: ({ row }: any) => <span>{row.original.joinedDate}</span>,
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }: any) => (
        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="outline">
            <Link href={`/admin/students/${row.original.id}`}>View</Link>
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Students</h1>
          <p className="text-gray-500">Manage enrolled students and their plans</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <DataTable columns={columns} data={students} searchColumn="name" />
    </div>
  )
}

// Helper function to process enrollment data into student-centric view
function processStudentData(enrollments: any[]) {
  const studentMap = new Map()

  enrollments.forEach((enrollment) => {
    const userId = enrollment.user_id
    const user = enrollment.users

    if (!studentMap.has(userId)) {
      studentMap.set(userId, {
        id: userId,
        name: user.full_name,
        email: user.email,
        phone: user.phone,
        plans: [],
        activePlans: 0,
        totalSpent: 0,
        status: "Inactive",
        joinedDate: new Date(enrollment.created_at).toLocaleDateString(),
      })
    }

    const student = studentMap.get(userId)

    // Add plan to student's plans
    student.plans.push({
      id: enrollment.id,
      planId: enrollment.plan_id,
      planName: enrollment.plans.name,
      category: enrollment.plans.category,
      price: enrollment.plans.price,
      purchaseDate: new Date(enrollment.purchase_date).toLocaleDateString(),
      expiryDate: enrollment.expiry_date ? new Date(enrollment.expiry_date).toLocaleDateString() : null,
      status: enrollment.status,
    })

    // Update active plans count
    if (enrollment.status === "active") {
      student.activePlans++
      student.status = "Active"
    }

    // Update total spent
    student.totalSpent += enrollment.plans.price
  })

  return Array.from(studentMap.values())
}
