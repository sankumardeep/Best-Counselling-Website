"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase"

export function SupabaseConnectionTest() {
  const [status, setStatus] = useState<"loading" | "connected" | "error">("loading")
  const [message, setMessage] = useState("")

  useEffect(() => {
    async function checkConnection() {
      try {
        const supabase = getSupabaseBrowserClient()

        // Simple query to check connection
        const { data, error } = await supabase.from("users_profiles").select("count()", { count: "exact" })

        if (error) {
          throw error
        }

        setStatus("connected")
        setMessage(`Successfully connected to Supabase! Found ${data[0]?.count || 0} user profiles.`)
      } catch (error: any) {
        console.error("Supabase connection error:", error)
        setStatus("error")
        setMessage(`Connection error: ${error.message || "Unknown error"}`)
      }
    }

    checkConnection()
  }, [])

  return (
    <div className="p-4 mt-4 rounded-lg border">
      <h3 className="text-lg font-medium mb-2">Supabase Connection Status</h3>
      <div
        className={`p-3 rounded ${
          status === "connected"
            ? "bg-green-100 text-green-800"
            : status === "error"
              ? "bg-red-100 text-red-800"
              : "bg-blue-100 text-blue-800"
        }`}
      >
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full mr-2 ${
              status === "connected" ? "bg-green-500" : status === "error" ? "bg-red-500" : "bg-blue-500 animate-pulse"
            }`}
          ></div>
          <p>{status === "loading" ? "Testing connection..." : message}</p>
        </div>
      </div>
    </div>
  )
}
