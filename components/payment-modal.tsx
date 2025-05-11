"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Landmark, Smartphone } from "lucide-react"
import { purchasePlan } from "@/app/actions/purchase-plan"
import { useAuth } from "@/context/auth-context"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  planName: string
  planPrice: number
  planId: string // Add planId to props
}

export function PaymentModal({ isOpen, onClose, planName, planPrice, planId }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)

  // Add this inside the component
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Create a FormData object
      const formData = new FormData()
      formData.append("userId", user?.id || "")
      formData.append("planId", planId) // You'll need to pass the actual plan ID as a prop

      // Call the server action
      const result = await purchasePlan(formData)

      if (!result.success) {
        throw new Error(result.message)
      }

      // Success
      setTimeout(() => {
        setIsProcessing(false)
        onClose()
        alert("Payment successful! Thank you for your purchase.")
      }, 1000)
    } catch (error) {
      console.error("Payment error:", error)
      setIsProcessing(false)
      alert("There was an error processing your payment. Please try again.")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
          <DialogDescription>
            You are purchasing the {planName} plan for ₹{planPrice.toLocaleString()}.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="card" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" /> Card
            </TabsTrigger>
            <TabsTrigger value="upi" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" /> UPI
            </TabsTrigger>
            <TabsTrigger value="netbanking" className="flex items-center gap-2">
              <Landmark className="h-4 w-4" /> Net Banking
            </TabsTrigger>
          </TabsList>

          <TabsContent value="card">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Cardholder Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" required />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Pay ₹${planPrice.toLocaleString()}`}
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>

          <TabsContent value="upi">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="upi-id">UPI ID</Label>
                  <Input id="upi-id" placeholder="yourname@upi" required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Pay ₹${planPrice.toLocaleString()}`}
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>

          <TabsContent value="netbanking">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="bank">Select Bank</Label>
                  <select
                    id="bank"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Select your bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                    <option value="kotak">Kotak Mahindra Bank</option>
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Pay ₹${planPrice.toLocaleString()}`}
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
