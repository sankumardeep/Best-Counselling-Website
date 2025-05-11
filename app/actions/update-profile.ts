"use server"

import { getSupabaseServerClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function updateUserProfile(formData: FormData) {
  const userId = formData.get("userId") as string
  const fullName = formData.get("fullName") as string
  const phone = formData.get("phone") as string

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
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId)

    if (error) {
      throw error
    }

    // Revalidate the profile page
    revalidatePath("/profile")

    return {
      success: true,
      message: "Profile updated successfully",
    }
  } catch (error: any) {
    console.error("Error updating profile:", error)
    return {
      success: false,
      message: error.message || "Failed to update profile",
    }
  }
}
