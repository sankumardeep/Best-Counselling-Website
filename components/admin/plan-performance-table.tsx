"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface PlanPerformanceTableProps {
  data: any[]
}

export function PlanPerformanceTable({ data }: PlanPerformanceTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plan Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Enrollments</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Performance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((plan) => (
            <TableRow key={plan.id}>
              <TableCell className="font-medium">{plan.name}</TableCell>
              <TableCell>{plan.category}</TableCell>
              <TableCell>₹{plan.price.toLocaleString()}</TableCell>
              <TableCell>{plan.enrollments}</TableCell>
              <TableCell>₹{plan.revenue.toLocaleString()}</TableCell>
              <TableCell>{getPerformanceBadge(plan.enrollments)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function getPerformanceBadge(enrollments: number) {
  if (enrollments > 10) {
    return <Badge className="bg-green-500">High</Badge>
  } else if (enrollments > 5) {
    return <Badge className="bg-yellow-500">Medium</Badge>
  } else {
    return <Badge className="bg-gray-500">Low</Badge>
  }
}
