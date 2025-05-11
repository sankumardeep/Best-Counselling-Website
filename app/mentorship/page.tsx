"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, ExternalLink, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

export default function MentorshipPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Personalized Mentorship Program</h1>
              <p className="text-xl mb-8">
                Get one-on-one guidance from experienced mentors who have excelled in their academic and professional
                journeys.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-primary font-semibold">
                <Link href="#mentorship-plans">Explore Mentorship Plans</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Mentorship Works</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our structured mentorship program is designed to provide continuous support and guidance throughout your
                academic journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Mentor Matching</h3>
                <p className="text-gray-600">
                  We pair you with a mentor who has expertise in your area of interest and understands your academic
                  goals.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Regular Sessions</h3>
                <p className="text-gray-600">
                  Scheduled one-on-one sessions with your mentor to discuss progress, challenges, and strategies.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Continuous Support</h3>
                <p className="text-gray-600">
                  Ongoing guidance, resources, and motivation to help you stay on track and achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="mentorship-plans" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mentorship Plans</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the mentorship plan that best suits your needs and goals
              </p>
            </div>

            <div className="space-y-16">
              {/* Exam Mentorship Section */}
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center">Exam Mentorship</h2>

                {/* MHT-CET Mentorship */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-purple-500">MHT-CET</h3>
                      <p className="text-gray-600">Maharashtra Common Entrance Test</p>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Info className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Click on a plan to proceed to checkout</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-lg">Basic Support</CardTitle>
                        <CardDescription className="line-clamp-2 h-10">
                          MHT-CET Basic Mentorship Support
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="mb-4">
                          <p className="text-2xl font-bold">₹399</p>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-1" />
                            <span className="text-sm">Study plan guidance</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-1" />
                            <span className="text-sm">Basic doubt solving</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-1" />
                            <span className="text-sm">Email support</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-1" />
                            <span className="text-sm">7-day validity</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-purple-500 hover:bg-purple-600">
                          <a
                            href="https://tagmango.com/web/checkout/67cc1e5dae8cdd945445bd55"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            Book Now <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-lg">Premium Support</CardTitle>
                        <CardDescription className="line-clamp-2 h-10">
                          MHT-CET Premium Mentorship Support
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="mb-4">
                          <p className="text-2xl font-bold">₹799</p>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-1" />
                            <span className="text-sm">Personalized study plan</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-1" />
                            <span className="text-sm">Regular doubt solving sessions</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-1" />
                            <span className="text-sm">Mock test analysis</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-1" />
                            <span className="text-sm">Priority email & call support</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-1" />
                            <span className="text-sm">15-day validity</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-purple-500 hover:bg-purple-600">
                          <a
                            href="https://tagmango.com/web/checkout/67cdced477dbd2d14edb8898"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            Book Now <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>

              {/* General Mentorship Plans */}
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center">General Mentorship</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>Basic Mentorship</CardTitle>
                      <CardDescription>For students seeking foundational guidance</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="mb-6">
                        <p className="text-3xl font-bold">₹4,999</p>
                        <p className="text-sm text-gray-500">One month</p>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>2 one-on-one sessions per month</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Email support</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Study plan creation</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Basic learning resources</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-purple-500 hover:bg-purple-600">
                        <a
                          href="#"
                          onClick={() => document.dispatchEvent(new CustomEvent("open-auth-modal"))}
                          className="flex items-center justify-center"
                        >
                          Get Started
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-purple-500 shadow-md h-full flex flex-col">
                    <div className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 absolute top-0 right-0 rounded-bl-lg">
                      Most Popular
                    </div>
                    <CardHeader>
                      <CardTitle>Premium Mentorship</CardTitle>
                      <CardDescription>For dedicated students seeking comprehensive support</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="mb-6">
                        <p className="text-3xl font-bold">₹9,999</p>
                        <p className="text-sm text-gray-500">Three months</p>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Weekly one-on-one sessions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Priority email & WhatsApp support</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Personalized study plan</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Premium learning resources</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Monthly progress assessment</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-purple-500 hover:bg-purple-600">
                        <a
                          href="#"
                          onClick={() => document.dispatchEvent(new CustomEvent("open-auth-modal"))}
                          className="flex items-center justify-center"
                        >
                          Get Started
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>Elite Mentorship</CardTitle>
                      <CardDescription>For students aiming for top-tier results</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="mb-6">
                        <p className="text-3xl font-bold">₹19,999</p>
                        <p className="text-sm text-gray-500">Six months</p>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Bi-weekly one-on-one sessions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>24/7 priority support</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Customized study plan & materials</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Mock tests & detailed analysis</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>College application assistance</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>Interview preparation</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-purple-500 hover:bg-purple-600">
                        <a
                          href="#"
                          onClick={() => document.dispatchEvent(new CustomEvent("open-auth-modal"))}
                          className="flex items-center justify-center"
                        >
                          Get Started
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Mentors</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn from experienced professionals who have excelled in their fields
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((mentor) => (
                <div key={mentor} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={`/placeholder.svg?height=100&width=100`}
                      alt={`Mentor ${mentor}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Dr. Mentor Name</h3>
                  <p className="text-gray-600 text-center mb-4">PhD, IIT Delhi</p>
                  <p className="text-gray-700 mb-4">
                    10+ years of experience in guiding students for JEE and other competitive exams. Specializes in
                    Physics and Mathematics.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href="#"
                      onClick={() => document.dispatchEvent(new CustomEvent("open-auth-modal"))}
                      className="flex items-center justify-center"
                    >
                      Request as Mentor <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
