"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useAuth } from "@/context/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MessageSquare, Clock, CheckCircle, Edit } from "lucide-react"
import { getUserPlans } from "@/lib/plan-service"
import { getSupabaseBrowserClient } from "@/lib/supabase"
import { EditProfileForm } from "@/components/profile/edit-profile-form"

export default function ProfilePage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditingProfile, setIsEditingProfile] = useState(false)

  const [userProfile, setUserProfile] = useState<any>(null)
  const [userPlans, setUserPlans] = useState<any[]>([])
  const [isLoadingProfile, setIsLoadingProfile] = useState(true)
  const [isLoadingPlans, setIsLoadingPlans] = useState(true)

  // Mock data for demonstration - in a real app, this would come from your database
  const mockMentor = {
    name: "Dr. Rajesh Kumar",
    qualification: "PhD, IIT Delhi",
    specialization: "Physics & Mathematics",
    experience: "10+ years",
    image: "/placeholder.svg?height=100&width=100",
    email: "rajesh.kumar@bestcounsellor.in",
    phone: "+91 98765 43210",
  }

  const mockSessions = [
    {
      date: "April 18, 2025",
      time: "4:00 PM - 5:00 PM",
      topic: "Introduction and Goal Setting",
      status: "Completed",
    },
    {
      date: "April 22, 2025",
      time: "4:00 PM - 5:00 PM",
      topic: "Physics: Mechanics Fundamentals",
      status: "Upcoming",
    },
    {
      date: "April 25, 2025",
      time: "4:00 PM - 5:00 PM",
      topic: "Mathematics: Calculus Review",
      status: "Scheduled",
    },
  ]

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        setIsLoadingProfile(true)
        setIsLoadingPlans(true)

        try {
          // Fetch user profile
          const supabase = getSupabaseBrowserClient()
          const { data: profileData, error: profileError } = await supabase
            .from("users_profiles")
            .select("*")
            .eq("id", user.id)
            .single()

          if (profileError) {
            console.error("Error fetching user profile:", profileError)
          } else {
            setUserProfile(profileData)
          }

          // Fetch user plans
          const plans = await getUserPlans(user.id)
          setUserPlans(plans)
        } catch (error) {
          console.error("Error fetching user data:", error)
        } finally {
          setIsLoadingProfile(false)
          setIsLoadingPlans(false)
        }
      }

      fetchUserData()
    }
  }, [user])

  // Get the current plan (first active plan or mock data if none)
  const currentPlan =
    userPlans.length > 0
      ? {
          name: userPlans[0].plans?.name || "Unknown Plan",
          purchaseDate: new Date(userPlans[0].purchase_date).toLocaleDateString(),
          expiryDate: userPlans[0].expiry_date ? new Date(userPlans[0].expiry_date).toLocaleDateString() : "N/A",
          status: userPlans[0].status,
          price: userPlans[0].plans?.price ? `₹${userPlans[0].plans.price}` : "N/A",
        }
      : {
          name: "No Active Plan",
          purchaseDate: "N/A",
          expiryDate: "N/A",
          status: "inactive",
          price: "N/A",
        }

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
    }
  }, [user, isLoading, router])

  if (isLoading || isLoadingProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold">Your Profile</h1>
                <p className="text-gray-600">
                  Welcome back, {userProfile?.full_name || user.user_metadata?.full_name || user.email}
                </p>
              </div>
              {userPlans.length > 0 && userPlans[0].status === "active" && (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-3 py-1">
                  <CheckCircle className="mr-1 h-4 w-4" /> Active Subscription
                </Badge>
              )}
            </div>

            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="plan">My Plan</TabsTrigger>
                <TabsTrigger value="sessions">Sessions</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    {isEditingProfile ? (
                      <EditProfileForm user={user} profile={userProfile} onSuccess={() => setIsEditingProfile(false)} />
                    ) : (
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                          <CardTitle>Account Information</CardTitle>
                          <Button variant="ghost" size="icon" onClick={() => setIsEditingProfile(true)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-sm font-medium text-gray-500">Email</h3>
                              <p>{user.email}</p>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-500">Name</h3>
                              <p>{userProfile?.full_name || user.user_metadata?.full_name || "Not provided"}</p>
                            </div>
                            {userProfile?.phone && (
                              <div>
                                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                                <p>{userProfile.phone}</p>
                              </div>
                            )}
                            <div>
                              <h3 className="text-sm font-medium text-gray-500">Account Created</h3>
                              <p>{new Date(user.created_at).toLocaleDateString()}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Current Plan</CardTitle>
                        <CardDescription>Your active mentorship plan details</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-semibold text-lg">{currentPlan.name}</h3>
                              <p className="text-sm text-gray-500">Valid until: {currentPlan.expiryDate}</p>
                            </div>
                            <Badge className={currentPlan.status === "active" ? "bg-green-500" : "bg-gray-500"}>
                              {currentPlan.status === "active" ? "Active" : "Inactive"}
                            </Badge>
                          </div>

                          {userPlans.length > 0 && (
                            <>
                              <div className="border-t pt-4">
                                <h3 className="font-semibold mb-2">Your Mentor</h3>
                                <div className="flex items-center">
                                  <Avatar className="h-12 w-12 mr-4">
                                    <AvatarImage src={mockMentor.image || "/placeholder.svg"} alt={mockMentor.name} />
                                    <AvatarFallback>{mockMentor.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{mockMentor.name}</p>
                                    <p className="text-sm text-gray-500">{mockMentor.qualification}</p>
                                    <p className="text-sm text-gray-500">{mockMentor.specialization}</p>
                                  </div>
                                </div>
                              </div>

                              <div className="border-t pt-4">
                                <h3 className="font-semibold mb-2">Next Session</h3>
                                {mockSessions.find((session) => session.status === "Upcoming") ? (
                                  <div className="flex items-start">
                                    <div className="bg-orange-100 p-2 rounded-md mr-4">
                                      <CalendarDays className="h-5 w-5 text-orange-500" />
                                    </div>
                                    <div>
                                      <p className="font-medium">
                                        {mockSessions.find((session) => session.status === "Upcoming")?.topic}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {mockSessions.find((session) => session.status === "Upcoming")?.date},{" "}
                                        {mockSessions.find((session) => session.status === "Upcoming")?.time}
                                      </p>
                                    </div>
                                  </div>
                                ) : (
                                  <p className="text-gray-500">No upcoming sessions scheduled</p>
                                )}
                              </div>
                            </>
                          )}

                          {userPlans.length === 0 && (
                            <div className="text-center py-6">
                              <p className="text-gray-500 mb-4">You don't have any active plans yet.</p>
                              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                                <a href="/counselling-plans">Browse Plans</a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="plan">
                <Card>
                  <CardHeader>
                    <CardTitle>Plan Details</CardTitle>
                    <CardDescription>Information about your current mentorship plan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {userPlans.length > 0 ? (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Plan Name</h3>
                            <p className="font-semibold">{currentPlan.name}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Status</h3>
                            <Badge className={currentPlan.status === "active" ? "bg-green-500" : "bg-gray-500"}>
                              {currentPlan.status === "active" ? "Active" : "Inactive"}
                            </Badge>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Purchase Date</h3>
                            <p>{currentPlan.purchaseDate}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Expiry Date</h3>
                            <p>{currentPlan.expiryDate}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Price</h3>
                            <p>{currentPlan.price}</p>
                          </div>
                        </div>

                        <div className="border-t pt-6">
                          <h3 className="font-semibold mb-4">Plan Features</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              <span>Personalized study plan</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              <span>Regular doubt solving sessions</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              <span>Mock test analysis</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              <span>Priority email & call support</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                              <span>15-day validity</span>
                            </li>
                          </ul>
                        </div>

                        <div className="border-t pt-6">
                          <h3 className="font-semibold mb-4">Your Mentor</h3>
                          <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="flex-shrink-0">
                              <Avatar className="h-24 w-24">
                                <AvatarImage src={mockMentor.image || "/placeholder.svg"} alt={mockMentor.name} />
                                <AvatarFallback>{mockMentor.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-lg">{mockMentor.name}</h4>
                                <p className="text-gray-500">{mockMentor.qualification}</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="text-sm font-medium text-gray-500">Specialization</h5>
                                  <p>{mockMentor.specialization}</p>
                                </div>
                                <div>
                                  <h5 className="text-sm font-medium text-gray-500">Experience</h5>
                                  <p>{mockMentor.experience}</p>
                                </div>
                                <div>
                                  <h5 className="text-sm font-medium text-gray-500">Email</h5>
                                  <p>{mockMentor.email}</p>
                                </div>
                                <div>
                                  <h5 className="text-sm font-medium text-gray-500">Phone</h5>
                                  <p>{mockMentor.phone}</p>
                                </div>
                              </div>
                              <div className="flex space-x-4">
                                <Button className="bg-orange-500 hover:bg-orange-600">
                                  <MessageSquare className="mr-2 h-4 w-4" /> Message
                                </Button>
                                <Button variant="outline">Schedule Session</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">You don't have any active plans yet.</p>
                        <Button asChild className="bg-orange-500 hover:bg-orange-600">
                          <a href="/counselling-plans">Browse Plans</a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sessions">
                <Card>
                  <CardHeader>
                    <CardTitle>Mentorship Sessions</CardTitle>
                    <CardDescription>Track your past and upcoming sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {userPlans.length > 0 ? (
                      <div className="space-y-6">
                        {mockSessions.map((session, index) => (
                          <div key={index} className="flex items-start border-b pb-4 last:border-0">
                            <div
                              className={`p-2 rounded-md mr-4 ${
                                session.status === "Completed"
                                  ? "bg-green-100"
                                  : session.status === "Upcoming"
                                    ? "bg-orange-100"
                                    : "bg-blue-100"
                              }`}
                            >
                              {session.status === "Completed" ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : (
                                <Clock
                                  className={`h-5 w-5 ${
                                    session.status === "Upcoming" ? "text-orange-500" : "text-blue-500"
                                  }`}
                                />
                              )}
                            </div>
                            <div className="flex-grow">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-semibold">{session.topic}</h3>
                                  <p className="text-sm text-gray-500">
                                    {session.date}, {session.time}
                                  </p>
                                </div>
                                <Badge
                                  className={`${
                                    session.status === "Completed"
                                      ? "bg-green-500"
                                      : session.status === "Upcoming"
                                        ? "bg-orange-500"
                                        : "bg-blue-500"
                                  }`}
                                >
                                  {session.status}
                                </Badge>
                              </div>
                              {session.status === "Completed" && (
                                <div className="mt-2">
                                  <Button variant="link" className="p-0 h-auto text-sm">
                                    View Session Notes
                                  </Button>
                                </div>
                              )}
                              {session.status === "Upcoming" && (
                                <div className="mt-2">
                                  <Button variant="link" className="p-0 h-auto text-sm">
                                    Prepare for Session
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">
                          You don't have any sessions yet. Purchase a plan to schedule your first session.
                        </p>
                        <Button asChild className="bg-orange-500 hover:bg-orange-600">
                          <a href="/counselling-plans">Browse Plans</a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
