"use client"

import { useEffect, useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase"
import { CreditCard } from "lucide-react"

interface StudentActivityLogProps {
  userId: string
}

export function StudentActivityLog({ userId }: StudentActivityLogProps) {
  const [activities, setActivities] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchActivities() {
      setIsLoading(true)
      const supabase = getSupabaseBrowserClient()

      // Fetch user plans for activity
      const { data: userPlans, error } = await supabase
        .from("user_plans")
        .select(`
          *,
          plans:plan_id (name, category, price)
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching activities:", error)
        setActivities([])
      } else {
        // Convert plans to activity items
        const activityItems = userPlans.map((plan) => ({
          id: plan.id,
          type: "plan_purchase",
          title: `Purchased ${plan.plans?.name || "a plan"}`,
          description: `${plan.plans?.category || "Plan"} - ₹${plan.plans?.price || "N/A"}`,
          date: new Date(plan.created_at),
          icon: CreditCard,
        }))

        setActivities(activityItems)
      }

      setIsLoading(false)
    }

    fetchActivities()
  }, [userId])

  if (isLoading) {
    return <div className="py-4">Loading activity...</div>
  }

  if (activities.length === 0) {
    return <div className="py-4">No activity recorded for this student.</div>
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex gap-4">
          <div className="mt-1">
            <div className="bg-gray-100 p-2 rounded-full">
              <activity.icon className="h-4 w-4 text-gray-600" />
            </div>
          </div>
          <div className="flex-1">
            <p className="font-medium">{activity.title}</p>
            <p className="text-sm text-gray-500">{activity.description}</p>
            <p className="text-xs text-gray-400 mt-1">{activity.date.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
