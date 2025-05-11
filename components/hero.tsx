"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src="/images/graduation-students.png"
            alt="Successful graduates"
            className="w-full h-full object-cover object-center"
            style={{
              filter: "brightness(0.9) contrast(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/70"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Get Into Your Dream College
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            With <span className="text-orange-400 font-bold">BestCounsellor</span>
          </h2>

          <p className="text-lg md:text-xl text-white mb-10 leading-relaxed max-w-lg">
            Personalized guidance for <span className="font-medium text-white">JEE, NEET, CUET & MHT-CET</span>{" "}
            aspirants. Our 98% success rate speaks for itself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg bg-orange-500 hover:bg-orange-600 transition-all duration-300">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg border-2 border-orange-400 text-orange-400 hover:bg-orange-400/20 hover:text-orange-300 transition-all duration-300"
            >
              <Link href="/mentorship" className="flex items-center">
                Explore Mentorship <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
