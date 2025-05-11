import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({
      cookies: () => cookieStore,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    })

    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        throw error
      }

      // If this is a new user, create a profile
      if (data?.user) {
        // Check if profile already exists
        const { data: profileData, error: profileError } = await supabase
          .from("users_profiles")
          .select("*")
          .eq("id", data.user.id)
          .single()

        if (profileError && profileError.code !== "PGRST116") {
          console.error("Error checking user profile:", profileError)
        }

        // If profile doesn't exist, create one
        if (!profileData) {
          const { error: insertError } = await supabase.from("users_profiles").insert({
            id: data.user.id,
            full_name: data.user.user_metadata?.full_name || data.user.email?.split("@")[0] || "User",
          })

          if (insertError) {
            console.error("Error creating user profile:", insertError)
          }
        }
      }
    } catch (error) {
      console.error("Error exchanging code for session:", error)
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin)
}
