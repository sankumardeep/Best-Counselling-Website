"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, BookOpen, School, Award, Users } from "lucide-react"
import Link from "next/link"

export function JeeCounsellingContent() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">JEE Counselling</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
              Expert guidance to help you make informed decisions about your engineering career
            </p>
            <Button asChild size="lg" variant="secondary" className="text-primary font-semibold">
              <Link href="/call-counselling">View Call Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={isVisible ? "animate-slide-in-left" : "opacity-0"}>
              <h2 className="text-3xl font-bold mb-6">Why JEE Counselling Matters</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                The Joint Entrance Examination (JEE) is one of the most competitive exams in India, opening doors to
                prestigious engineering institutions. But securing a good rank is just the first step.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Making the right choices about colleges and branches can significantly impact your academic journey and
                future career prospects. Our expert counsellors help you navigate this crucial decision-making process.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Informed Decisions:</span> Get insights about colleges, branches,
                    and career prospects.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Personalized Guidance:</span> Tailored advice based on your rank,
                    preferences, and career goals.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Stress Reduction:</span> Navigate the complex admission process with
                    expert support.
                  </p>
                </div>
              </div>
            </div>
            <div className={isVisible ? "animate-slide-in-right" : "opacity-0"}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="JEE Counselling Session"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our JEE Counselling Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A structured approach to help you make the best decisions for your engineering career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover border-2 border-gray-100 dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Initial Consultation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We begin with understanding your JEE rank, preferences, strengths, and career aspirations through a
                  detailed one-on-one session.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-2 border-gray-100 dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. College & Branch Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our experts analyze various colleges and branches based on your rank, providing insights on placement
                  records, faculty, and infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-2 border-gray-100 dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <School className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Admission Strategy</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We help you create a strategic plan for the counselling rounds, including choice filling, seat
                  allocation, and document preparation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">JEE Counselling Resources</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive resources to help you make informed decisions
            </p>
          </div>

          <Tabs defaultValue="colleges" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="colleges">Top Colleges</TabsTrigger>
              <TabsTrigger value="branches">Popular Branches</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent
              value="colleges"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4">Top Engineering Colleges in India</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Indian Institutes of Technology (IITs)</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Premier engineering institutions known for excellence in education and research.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">National Institutes of Technology (NITs)</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Renowned technical institutions offering quality engineering education.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Birla Institute of Technology and Science (BITS)</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Known for its innovative teaching methods and industry connections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Indian Institutes of Information Technology (IIITs)</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Specialized in information technology and related fields.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="branches"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4">Popular Engineering Branches</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Computer Science & Engineering</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Focuses on computer systems, programming, and software development. High demand and excellent
                    placement opportunities.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Electronics & Communication Engineering</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Deals with electronic devices, circuits, and communication systems. Versatile career options in
                    various industries.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Mechanical Engineering</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Covers design, manufacturing, and maintenance of mechanical systems. One of the oldest and most
                    diverse engineering fields.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Electrical Engineering</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Focuses on electrical systems, power generation, and distribution. Essential for infrastructure
                    development.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="faqs"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold">What is JoSAA counselling?</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Joint Seat Allocation Authority (JoSAA) conducts the joint admission process for IITs, NITs, IIITs,
                    and other Government Funded Technical Institutes (GFTIs) based on JEE ranks.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">How many rounds of counselling are there?</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    JoSAA typically conducts 6-7 rounds of seat allocation. It's important to participate in all rounds
                    to maximize your chances.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Should I prioritize college or branch?</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    This depends on your career goals. Sometimes a less popular branch in a top institute can offer
                    better opportunities than a popular branch in a lower-ranked college. Our counsellors can help you
                    make this decision.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">What documents are required for JEE counselling?</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Typically, you'll need your JEE admit card, rank card, Class 10 & 12 certificates, category
                    certificates (if applicable), and passport-sized photographs.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Future?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't leave your engineering career to chance. Get expert guidance from our JEE counsellors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-md">
              <Link href="/counselling-plans">
                Explore Counselling Plans <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-md">
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
