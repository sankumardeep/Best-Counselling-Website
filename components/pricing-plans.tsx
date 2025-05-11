"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"
import { PaymentModal } from "@/components/payment-modal"
import { getAvailablePlans } from "@/lib/plan-service"
import { useAuth } from "@/context/auth-context"

export function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null)
  const [plans, setPlans] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    const fetchPlans = async () => {
      setIsLoading(true)
      try {
        const availablePlans = await getAvailablePlans()
        if (availablePlans.length > 0) {
          setPlans(availablePlans)
        } else {
          // Fallback to static plans if no plans in database yet
          setPlans([
            {
              id: "basic-plan",
              name: "Basic",
              description: "Essential counselling for students seeking guidance",
              price: 1499,
              features: [
                "JEE/CUET Counselling Session",
                "College Selection Guidance",
                "Email Support",
                "Educational Resources",
                "7-Day Validity",
              ],
              popular: false,
            },
            {
              id: "premium-plan",
              name: "Premium",
              description: "Comprehensive support for serious aspirants",
              price: 2999,
              features: [
                "Everything in Basic",
                "3 One-on-One Sessions",
                "Priority Phone Support",
                "Performance Analysis",
                "Branch Selection Strategy",
                "30-Day Validity",
              ],
              popular: true,
            },
            {
              id: "ultimate-plan",
              name: "Ultimate",
              description: "Complete guidance package for guaranteed success",
              price: 4999,
              features: [
                "Everything in Premium",
                "Unlimited Counselling Sessions",
                "24/7 WhatsApp Support",
                "Personalized Study Plan",
                "Mock Interview Preparation",
                "College Application Assistance",
                "90-Day Validity",
              ],
              popular: false,
            },
          ])
        }
      } catch (error) {
        console.error("Error fetching plans:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPlans()
  }, [])

  const handlePlanSelect = (plan: any) => {
    if (!user) {
      // If user is not logged in, trigger auth modal
      document.dispatchEvent(new CustomEvent("open-auth-modal"))
      return
    }

    setSelectedPlan(plan)
    setIsPaymentModalOpen(true)
  }

  return (
    <>
      <div className="flex justify-center mb-10">
        <div className="flex items-center space-x-2">
          <Label htmlFor="billing-toggle" className={!isAnnual ? "font-medium" : "text-gray-500"}>
            Monthly
          </Label>
          <Switch id="billing-toggle" checked={isAnnual} onCheckedChange={setIsAnnual} />
          <Label htmlFor="billing-toggle" className={isAnnual ? "font-medium" : "text-gray-500"}>
            Annual{" "}
            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full ml-1 dark:bg-green-900 dark:text-green-100">
              Save 20%
            </span>
          </Label>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan.popular ? "border-primary shadow-md" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-4xl font-bold">₹{isAnnual ? plan.price * 10 : plan.price}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {isAnnual ? "per year" : "one time payment"}
                  </p>
                </div>
                <ul className="space-y-3">
                  {plan.features &&
                    plan.features.map((feature: string) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? "" : "bg-primary"}`} onClick={() => handlePlanSelect(plan)}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {selectedPlan && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          planName={selectedPlan.name}
          planPrice={isAnnual ? selectedPlan.price * 10 : selectedPlan.price}
          planId={selectedPlan.id}
        />
      )}
    </>
  )
}
