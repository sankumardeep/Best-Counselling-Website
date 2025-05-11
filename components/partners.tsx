"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export function Partners() {
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

  const partners = [
    { name: "IIT Delhi", logo: "/placeholder.svg?height=80&width=160" },
    { name: "NIT Trichy", logo: "/placeholder.svg?height=80&width=160" },
    { name: "BITS Pilani", logo: "/placeholder.svg?height=80&width=160" },
    { name: "DTU Delhi", logo: "/placeholder.svg?height=80&width=160" },
    { name: "VIT Vellore", logo: "/placeholder.svg?height=80&width=160" },
    { name: "IIIT Hyderabad", logo: "/placeholder.svg?height=80&width=160" },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partner Institutions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We collaborate with top educational institutions across India to provide the best guidance to our students.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
