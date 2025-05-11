"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function RecentUpdates() {
  const updates = [
    {
      title: "JoSAA 2025 Counselling Schedule Released",
      date: "April 10, 2025",
      category: "JEE Counselling",
      content:
        "Joint Seat Allocation Authority (JoSAA) has released the counselling schedule for 2025. Registration begins on June 15th. Six rounds of seat allocation will be conducted. Students must register on the official JoSAA portal with their JEE Main/Advanced credentials.",
      link: "/updates/josaa-2025-counselling",
    },
    {
      title: "JAC Chandigarh Announces New Admission Process",
      date: "April 5, 2025",
      category: "Admission Updates",
      content:
        "Joint Admission Committee (JAC) Chandigarh has announced changes to the admission process for 2025. Online registrations will start from July 1st. Merit list will be based on JEE Main scores. Participating institutes include PEC, CCET, and UIET Chandigarh.",
      link: "/updates/jac-chandigarh-admission",
    },
    {
      title: "IIT Bombay Cutoffs Show Significant Changes",
      date: "March 28, 2025",
      category: "Cutoff Analysis",
      content:
        "Analysis of IIT Bombay's previous year cutoffs shows significant changes across branches. Computer Science remains the most competitive with closing rank of 98. Electrical Engineering and Mechanical Engineering saw reduced cutoffs. Experts predict similar trends for 2025 admissions.",
      link: "/updates/iit-bombay-cutoffs",
    },
    {
      title: "NEET 2025 Exam Pattern Modifications",
      date: "March 20, 2025",
      category: "Exam Updates",
      content:
        "National Testing Agency (NTA) has announced modifications to NEET 2025 exam pattern. The exam will now include more application-based questions. Total marks remain 720 with 180 questions. Biology section will have increased weightage on human physiology and biotechnology.",
      link: "/updates/neet-2025-pattern",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Updates</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest news and announcements about exams, counselling, and admissions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {updates.map((update, index) => (
            <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {update.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {update.date}
                  </div>
                </div>
                <CardTitle className="text-xl">{update.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{update.content}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-800 p-0">
                  <Link href={update.link} className="flex items-center">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/updates">View All Updates</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
