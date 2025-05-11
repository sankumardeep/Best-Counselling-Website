"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Users, Package, MessageSquare, Home, LogOut, GraduationCap, BarChart } from "lucide-react"
import { useAuth } from "@/context/auth-context"

export function AdminSidebar() {
  const pathname = usePathname()
  const { signOut } = useAuth()

  const routes = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: Home,
    },
    {
      name: "Students",
      href: "/admin/students",
      icon: GraduationCap,
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "Plans",
      href: "/admin/plans",
      icon: Package,
    },
    {
      name: "Reports",
      href: "/admin/reports",
      icon: BarChart,
    },
    {
      name: "Contact Submissions",
      href: "/admin/contacts",
      icon: MessageSquare,
    },
  ]

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-1 px-2">
          {routes.map((route) => {
            const Icon = route.icon
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  pathname === route.href
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white",
                )}
              >
                <Icon className="h-5 w-5" />
                {route.name}
              </Link>
            )
          })}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-gray-800">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
          onClick={signOut}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
