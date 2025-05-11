"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface EnrollmentChartProps {
  data: { month: string; count: number }[]
}

export function EnrollmentChart({ data }: EnrollmentChartProps) {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip
            cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
            contentStyle={{ background: "#fff", border: "1px solid #ccc", borderRadius: "4px" }}
            formatter={(value: number) => [`${value} enrollments`, "Enrollments"]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Bar dataKey="count" fill="#f97316" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
