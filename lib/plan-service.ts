import { getSupabaseBrowserClient, type Plan, type UserPlan } from "./supabase"

export async function getUserPlans(userId: string): Promise<UserPlan[]> {
  const supabase = getSupabaseBrowserClient()

  const { data, error } = await supabase
    .from("user_plans")
    .select(`
      *,
      plans:plan_id (*)
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching user plans:", error)
    return []
  }

  return data || []
}

export async function getAvailablePlans(): Promise<Plan[]> {
  const supabase = getSupabaseBrowserClient()

  const { data, error } = await supabase.from("plans").select("*").order("price", { ascending: true })

  if (error) {
    console.error("Error fetching plans:", error)
    return []
  }

  return data || []
}

export async function purchasePlan(userId: string, planId: string, expiryDays = 30): Promise<boolean> {
  const supabase = getSupabaseBrowserClient()

  // Calculate expiry date
  const expiryDate = new Date()
  expiryDate.setDate(expiryDate.getDate() + expiryDays)

  const { error } = await supabase.from("user_plans").insert({
    user_id: userId,
    plan_id: planId,
    expiry_date: expiryDate.toISOString(),
    status: "active",
  })

  if (error) {
    console.error("Error purchasing plan:", error)
    return false
  }

  return true
}
