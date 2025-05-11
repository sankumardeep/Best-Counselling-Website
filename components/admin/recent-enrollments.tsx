import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface RecentEnrollmentsProps {
  enrollments: any[]
}

export function RecentEnrollments({ enrollments }: RecentEnrollmentsProps) {
  if (!enrollments || enrollments.length === 0) {
    return <p className="text-gray-500">No recent enrollments</p>
  }

  return (
    <div className="space-y-4">
      {enrollments.map((enrollment) => (
        <div key={enrollment.id} className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{enrollment.users?.full_name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
            <div>
              <Link href={`/admin/students/${enrollment.user_id}`} className="font-medium hover:underline">
                {enrollment.users?.full_name || "Unknown User"}
              </Link>
              <p className="text-sm text-gray-500">Enrolled in {enrollment.plans?.name || "Unknown Plan"}</p>
              <p className="text-xs text-gray-500">{new Date(enrollment.created_at).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <Badge className={enrollment.status === "active" ? "bg-green-500" : "bg-gray-500"}>
              {enrollment.status.charAt(0).toUpperCase() + enrollment.status.slice(1)}
            </Badge>
            <p className="text-sm font-medium mt-1">₹{enrollment.plans?.price || "N/A"}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
