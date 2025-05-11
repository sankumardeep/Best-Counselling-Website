"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignInForm } from "@/components/auth/sign-in-form"
import { SignUpForm } from "@/components/auth/sign-up-form"

export function AuthModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("sign-in")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if user is already logged in
    try {
      const user = localStorage.getItem("user")
      if (!user) {
        // Show modal after a short delay for better UX
        const timer = setTimeout(() => {
          setIsOpen(true)
        }, 1000)
        return () => clearTimeout(timer)
      }
    } catch (error) {
      console.error("Auth modal error:", error)
      // If there's an error reading from localStorage, still show the modal
      setIsOpen(true)
    }
  }, [])

  // Add this useEffect to handle the custom event
  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true)
    }

    document.addEventListener("open-auth-modal", handleOpenModal)

    return () => {
      document.removeEventListener("open-auth-modal", handleOpenModal)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Welcome to BestCounsellor</DialogTitle>
        </DialogHeader>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>{error}</p>
          </div>
        )}
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-in">Sign In</TabsTrigger>
            <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <SignInForm onSuccess={handleClose} onError={(msg) => setError(msg)} />
          </TabsContent>
          <TabsContent value="sign-up">
            <SignUpForm onSuccess={() => setActiveTab("sign-in")} onError={(msg) => setError(msg)} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
