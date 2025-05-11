"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { updateUserAdmin } from "@/app/actions/admin-actions"
import { toast } from "@/hooks/use-toast"

interface UserEditFormProps {
  user: any
}

export function UserEditForm({ user }: UserEditFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: user.full_name || "",
    phone: user.phone || "",
    isAdmin: user.is_admin || false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = new FormData()
      form.append("userId", user.id)
      form.append("fullName", formData.fullName)
      form.append("phone", formData.phone)
      form.append("isAdmin", formData.isAdmin.toString())

      const result = await updateUserAdmin(form)

      if (!result.success) {
        throw new Error(result.message)
      }

      toast({
        title: "User updated",
        description: "User information has been updated successfully",
      })

      router.refresh()
      router.push(`/admin/users/${user.id}`)
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update user",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="isAdmin"
          checked={formData.isAdmin}
          onCheckedChange={(checked) => setFormData({ ...formData, isAdmin: checked })}
        />
        <Label htmlFor="isAdmin">Admin User</Label>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  )
}
