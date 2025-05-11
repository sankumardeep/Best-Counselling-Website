import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protected routes that require authentication
  const protectedRoutes = ["/profile", "/dashboard"]
  const isProtectedRoute = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))

  // Admin routes that require admin role
  const adminRoutes = ["/admin"]
  const isAdminRoute = adminRoutes.some((route) => req.nextUrl.pathname.startsWith(route))

  // If accessing a protected route without being logged in, redirect to home
  if (isProtectedRoute && !session) {
    const redirectUrl = new URL("/", req.url)
    return NextResponse.redirect(redirectUrl)
  }

  // If accessing an admin route, check if user has admin role
  if (isAdminRoute) {
    if (!session) {
      // Not logged in, redirect to login
      const redirectUrl = new URL("/", req.url)
      return NextResponse.redirect(redirectUrl)
    }

    // Check if user has admin role
    const { data: profile, error } = await supabase
      .from("users_profiles")
      .select("is_admin")
      .eq("id", session.user.id)
      .single()

    if (error || !profile || !profile.is_admin) {
      // Not an admin, redirect to home
      const redirectUrl = new URL("/", req.url)
      return NextResponse.redirect(redirectUrl)
    }
  }

  return res
}

export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*", "/admin/:path*"],
}
