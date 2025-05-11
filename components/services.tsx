"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Compass, Headphones, BarChart, Award, Calendar } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Services() {
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

  const services = [
    {
      title: "JEE Counselling",
      description:
        "Expert guidance on college selection, branch preferences, and admission procedures based on your JEE score.",
      icon: <Compass className="h-10 w-10 text-blue-600" />,
      link: "/jee-counselling",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "CUET Updates",
      description: "Stay informed with the latest news, notifications, and important dates for CUET examinations.",
      icon: <Calendar className="h-10 w-10 text-purple-600" />,
      link: "/cuet-updates",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Call Counselling",
      description:
        "Get your queries resolved instantly through our dedicated phone support with experienced counsellors.",
      icon: <Headphones className="h-10 w-10 text-pink-600" />,
      link: "/call-counselling",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Performance Analysis",
      description: "Detailed analysis of your academic performance with personalized improvement strategies.",
      icon: <BarChart className="h-10 w-10 text-indigo-600" />,
      link: "/performance-analysis",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Mentorship Program",
      description: "One-on-one guidance from industry professionals and academic experts to help you excel.",
      icon: <Award className="h-10 w-10 text-amber-600" />,
      link: "/mentorship",
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "Study Resources",
      description: "Access to comprehensive study materials, practice tests, and preparation strategies.",
      icon: <BookOpen className="h-10 w-10 text-emerald-600" />,
      link: "/resources",
      color: "from-emerald-500 to-emerald-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We offer a wide range of counselling services designed to support students at every step of their academic
            journey.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-hover border-0 shadow-lg overflow-hidden h-full">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader>
                  <div className="mb-4 p-3 rounded-full bg-gray-100 dark:bg-gray-800 inline-block">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-900"
                  >
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
