"use server"

import { getSupabaseServerClient } from "@/lib/supabase"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Name, email, and message are required",
    }
  }

  try {
    const supabase = getSupabaseServerClient()

    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone,
      subject,
      message,
    })

    if (error) {
      throw error
    }

    return {
      success: true,
      message: "Contact form submitted successfully",
    }
  } catch (error: any) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: error.message || "Failed to submit contact form",
    }
  }
}
