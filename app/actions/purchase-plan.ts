"use server"

import { getSupabaseServerClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function purchasePlan(formData: FormData) {
  const userId = formData.get("userId") as string
  const planId = formData.get("planId") as string

  if (!userId || !planId) {
    return {
      success: false,
      message: "Missing required information",
    }
  }

  try {
    const supabase = getSupabaseServerClient()

    // Calculate expiry date (30 days from now)
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 30)

    // Insert the plan purchase
    const { error } = await supabase.from("user_plans").insert({
      user_id: userId,
      plan_id: planId,
      expiry_date: expiryDate.toISOString(),
      status: "active",
    })

    if (error) {
      throw error
    }

    // Revalidate the profile page to show the new plan
    revalidatePath("/profile")

    return {
      success: true,
      message: "Plan purchased successfully",
    }
  } catch (error: any) {
    console.error("Error purchasing plan:", error)
    return {
      success: false,
      message: error.message || "Failed to purchase plan",
    }
  }
}
