"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useAuth } from "@/context/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, FileText, Book, GraduationCap, Clock } from "lucide-react"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
    }
  }, [user, isLoading, router])

  if (isLoading) {
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
            <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>

            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="sessions">My Sessions</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CalendarDays className="mr-2 h-5 w-5 text-orange-500" />
                        Upcoming Sessions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">No upcoming sessions scheduled.</p>
                        <Button asChild className="bg-orange-500 hover:bg-orange-600">
                          <a href="/counselling-plans">Book a Session</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="mr-2 h-5 w-5 text-orange-500" />
                        Recent Updates
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="border-b pb-2">
                          <p className="font-medium">JEE Main 2025 Dates Announced</p>
                          <p className="text-sm text-gray-500">2 days ago</p>
                        </li>
                        <li>
                          <p className="font-medium">New Study Materials Available</p>
                          <p className="text-sm text-gray-500">1 week ago</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <GraduationCap className="mr-2 h-5 w-5 text-orange-500" />
                        Your Counselling Journey
                      </CardTitle>
                      <CardDescription>Track your progress and next steps</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                            <Clock className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Account Created</h3>
                            <p className="text-sm text-gray-500">Welcome to BestCounsellor!</p>
                          </div>
                        </div>
                        <div className="flex items-center opacity-50">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                            <Book className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">First Counselling Session</h3>
                            <p className="text-sm text-gray-500">Book your first session to continue</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="sessions">
                <Card>
                  <CardHeader>
                    <CardTitle>My Counselling Sessions</CardTitle>
                    <CardDescription>View your past and upcoming counselling sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">You haven't booked any counselling sessions yet.</p>
                      <Button asChild className="bg-orange-500 hover:bg-orange-600">
                        <a href="/counselling-plans">Book Your First Session</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources">
                <Card>
                  <CardHeader>
                    <CardTitle>Study Resources</CardTitle>
                    <CardDescription>Access study materials and resources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">
                        No resources available yet. Resources will be available after your first counselling session.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="progress">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Progress</CardTitle>
                    <CardDescription>Track your academic progress and goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">
                        Progress tracking will be available after your first counselling session.
                      </p>
                    </div>
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
