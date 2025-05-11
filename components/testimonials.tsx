"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
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

  const testimonials = [
    {
      name: "Rahul Sharma",
      college: "IIT Delhi - Computer Science",
      rank: "AIR 342 in JEE Advanced",
      text: "I was confused about which IIT to choose with my rank. BestCounsellor's personalized guidance helped me understand the pros and cons of different branches and institutes. Their detailed analysis of placement statistics and future prospects was invaluable. I'm now pursuing Computer Science at IIT Delhi and couldn't be happier with my decision.",
      rating: 5,
      image: "/images/student-1.png",
    },
    {
      name: "Priya Patel",
      college: "NIT Trichy - Electronics & Communication",
      rank: "AIR 4,289 in JEE Main",
      text: "With so many NITs and their varying cutoffs, I was overwhelmed about making the right choice. The counsellors at BestCounsellor provided me with a comprehensive comparison of ECE departments across NITs. Their round-wise strategy for JoSAA counselling was spot on, and I secured my seat at NIT Trichy despite my moderate rank. Their support during the entire admission process was exceptional.",
      rating: 5,
      image: "/images/student-6.png",
    },
    {
      name: "Amit Kumar",
      college: "BITS Pilani - Mechanical Engineering",
      rank: "BITSAT Score: 348/390",
      text: "I was torn between accepting a lower branch at an IIT or a preferred branch at BITS Pilani. The mentors at BestCounsellor helped me evaluate my long-term career goals and interests. Their insights into the BITS system, dual degree opportunities, and industry connections helped me make an informed decision. Their practice interviews also prepared me well for the admission process.",
      rating: 5,
      image: "/images/student-2.png",
    },
    {
      name: "Neha Singh",
      college: "AIIMS Delhi - MBBS",
      rank: "NEET Rank: 118",
      text: "The competition for medical seats is intense, and I needed expert guidance to navigate the complex counselling process. BestCounsellor's team of medical professionals provided detailed insights into various medical colleges. Their state quota vs. all-India quota analysis helped me maximize my chances. Their 24/7 support during the counselling rounds was a lifesaver. I'm now studying at AIIMS Delhi, my dream college!",
      rating: 5,
      image: "/images/student-3.png",
    },
    {
      name: "Vikram Reddy",
      college: "DTU Delhi - Computer Engineering",
      rank: "JEE Main Percentile: 98.76",
      text: "With a decent but not exceptional JEE Main score, I was unsure about my options. BestCounsellor helped me explore state engineering colleges and deemed universities. Their counsellors had in-depth knowledge about DTU's admission process and department strengths. Thanks to their strategic approach to choice filling, I secured Computer Engineering at DTU, which has excellent placements and is close to my home in Delhi.",
      rating: 4,
      image: "/images/student-4.png",
    },
    {
      name: "Ananya Gupta",
      college: "IIIT Hyderabad - Data Science",
      rank: "JEE Main Rank: 5,842",
      text: "I was specifically interested in emerging fields like AI and Data Science. BestCounsellor's specialized knowledge about IIIT curriculum and research opportunities was impressive. They helped me compare similar programs across institutes and choose the one that best aligned with my interests. Their guidance on preparing for IIIT's additional admission requirements was crucial to my selection.",
      rating: 5,
      image: "/images/student-5.png",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from students who have achieved their academic goals with our guidance and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`h-full ${
                isVisible ? `opacity-100 transition-all duration-500 delay-${index * 100}` : "opacity-0"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute top-0 left-0 h-8 w-8 text-gray-200 -translate-x-2 -translate-y-2" />
                  <p className="text-gray-700 relative z-10 pl-4">{testimonial.text}</p>
                </div>

                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-orange-500">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.college}</p>
                    <p className="text-xs text-orange-600 font-medium">{testimonial.rank}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
