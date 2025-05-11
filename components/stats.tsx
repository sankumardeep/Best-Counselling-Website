"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Users, School, BookOpen } from "lucide-react"
import Image from "next/image"

export function Stats() {
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

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      value: "10,000+",
      label: "Students Counselled",
      delay: 0,
    },
    {
      type: "logo",
      delay: 0.1,
    },
    {
      icon: <School className="h-8 w-8 text-indigo-600" />,
      value: "200+",
      label: "Partner Colleges",
      delay: 0.2,
    },
    {
      icon: <BookOpen className="h-8 w-8 text-pink-600" />,
      value: "8+",
      label: "Years of Experience",
      delay: 0.3,
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: stat.delay }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              {stat.type === "logo" ? (
                <div className="flex flex-col items-center">
                  <div className="mb-2 relative w-24 h-24">
                    <Image
                      src="/images/counselling-logo.png"
                      alt="Best Counsellor Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Our Brand</p>
                </div>
              ) : (
                <>
                  <div className="mb-4 p-3 rounded-full bg-white dark:bg-gray-700 shadow-inner">{stat.icon}</div>
                  <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
