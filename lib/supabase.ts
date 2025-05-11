import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for the browser
const createBrowserClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

  return createClient(supabaseUrl, supabaseAnonKey)
}

// Create a singleton instance for client-side
let browserClient: ReturnType<typeof createClient> | null = null

export const getSupabaseBrowserClient = () => {
  if (!browserClient) {
    browserClient = createBrowserClient()
  }
  return browserClient
}

// Create a server client (for server components and API routes)
export const getSupabaseServerClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

  return createClient(supabaseUrl, supabaseServiceKey)
}

// Types for our database tables
export type UserProfile = {
  id: string
  full_name: string
  phone?: string
  created_at: string
  updated_at: string
}

export type Plan = {
  id: string
  name: string
  description?: string
  price: number
  category: string
  created_at: string
}

export type UserPlan = {
  id: string
  user_id: string
  plan_id: string
  purchase_date: string
  expiry_date?: string
  status: "active" | "expired" | "cancelled"
  created_at: string
  updated_at: string
}

export type ContactSubmission = {
  id: string
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  created_at: string
}
