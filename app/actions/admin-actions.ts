"use server"

import { getSupabaseServerClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function updateUserAdmin(formData: FormData) {
  const userId = formData.get("userId") as string
  const fullName = formData.get("fullName") as string
  const phone = formData.get("phone") as string
  const isAdmin = formData.get("isAdmin") === "true"

  if (!userId) {
    return {
      success: false,
      message: "User ID is required",
    }
  }

  try {
    const supabase = getSupabaseServerClient()

    const { error } = await supabase
      .from("users_profiles")
      .update({
        full_name: fullName,
        phone: phone,
        is_admin: isAdmin,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId)

    if (error) {
      throw error
    }

    // Revalidate the admin pages
    revalidatePath("/admin/users")
    revalidatePath(`/admin/users/${userId}`)

    return {
      success: true,
      message: "User updated successfully",
    }
  } catch (error: any) {
    console.error("Error updating user:", error)
    return {
      success: false,
      message: error.message || "Failed to update user",
    }
  }
}

export async function createPlan(formData: FormData) {
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const price = Number.parseFloat(formData.get("price") as string)
  const category = formData.get("category") as string

  if (!name || !price || !category) {
    return {
      success: false,
      message: "Name, price, and category are required",
    }
  }

  try {
    const supabase = getSupabaseServerClient()

    const { error } = await supabase.from("plans").insert({
      name,
      description,
      price,
      category,
    })

    if (error) {
      throw error
    }

    // Revalidate the admin pages
    revalidatePath("/admin/plans")

    return {
      success: true,
      message: "Plan created successfully",
    }
  } catch (error: any) {
    console.error("Error creating plan:", error)
    return {
      success: false,
      message: error.message || "Failed to create plan",
    }
  }
}

export async function updatePlan(formData: FormData) {
  const planId = formData.get("planId") as string
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const price = Number.parseFloat(formData.get("price") as string)
  const category = formData.get("category") as string

  if (!planId || !name || !price || !category) {
    return {
      success: false,
      message: "Plan ID, name, price, and category are required",
    }
  }

  try {
    const supabase = getSupabaseServerClient()

    const { error } = await supabase
      .from("plans")
      .update({
        name,
        description,
        price,
        category,
      })
      .eq("id", planId)

    if (error) {
      throw error
    }

    // Revalidate the admin pages
    revalidatePath("/admin/plans")
    revalidatePath(`/admin/plans/${planId}`)

    return {
      success: true,
      message: "Plan updated successfully",
    }
  } catch (error: any) {
    console.error("Error updating plan:", error)
    return {
      success: false,
      message: error.message || "Failed to update plan",
    }
  }
}

export async function deletePlan(formData: FormData) {
  const planId = formData.get("planId") as string

  if (!planId) {
    return {
      success: false,
      message: "Plan ID is required",
    }
  }

  try {
    const supabase = getSupabaseServerClient()

    // Check if plan is being used by any users
    const { data: userPlans, error: checkError } = await supabase
      .from("user_plans")
      .select("id")
      .eq("plan_id", planId)
      .limit(1)

    if (checkError) {
      throw checkError
    }

    if (userPlans && userPlans.length > 0) {
      return {
        success: false,
        message: "Cannot delete plan that is being used by users",
      }
    }

    const { error } = await supabase.from("plans").delete().eq("id", planId)

    if (error) {
      throw error
    }

    // Revalidate the admin pages
    revalidatePath("/admin/plans")

    return {
      success: true,
      message: "Plan deleted successfully",
    }
  } catch (error: any) {
    console.error("Error deleting plan:", error)
    return {
      success: false,
      message: error.message || "Failed to delete plan",
    }
  }
}
