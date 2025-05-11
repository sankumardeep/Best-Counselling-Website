"use client"

import { useEffect, useState, useRef } from "react"
import { CheckCircle, Clock, Users, Shield, Award, Zap } from "lucide-react"

export function Features() {
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

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Experienced Counsellors",
      description: "Our team consists of experienced professionals with deep knowledge of the education system.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Get assistance anytime with our round-the-clock support system for urgent queries.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Personalized Approach",
      description: "We create customized plans based on your unique strengths, weaknesses, and goals.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Trusted by Thousands",
      description: "Join thousands of students who have successfully achieved their academic goals with us.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Success Track Record",
      description: "Our students consistently secure admissions in top colleges across the country.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Latest Updates",
      description: "Stay ahead with real-time updates on exam patterns, important dates, and admission criteria.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Best Counsellor</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're committed to providing exceptional guidance and support to help you achieve your academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex ${
                isVisible
                  ? `animate-slide-up opacity-100 transition-all duration-500 delay-${index * 100}`
                  : "opacity-0"
              }`}
            >
              <div className="flex-shrink-0 mr-4">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
