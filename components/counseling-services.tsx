"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Info, ArrowRight, ExternalLink } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function CounselingServices() {
  const counselingServices = [
    {
      title: "JEE Counseling",
      description: "Expert guidance for JEE Main & Advanced college selection",
      price: 1999,
      features: [
        "College prediction based on rank",
        "Branch selection guidance",
        "Seat matrix analysis",
        "1-hour personalized session",
        "Email support for 7 days",
      ],
      popular: false,
      link: "/jee-counseling",
      color: "blue",
      checkoutLinks: [],
    },
    {
      title: "NEET Counseling",
      description: "Comprehensive medical college admission guidance",
      price: 699,
      features: [
        "Medical college selection strategy",
        "State & All India quota guidance",
        "Admission process assistance",
        "1-hour personalized session",
        "Email support for 7 days",
      ],
      popular: true,
      link: "/neet-counseling",
      color: "orange",
      checkoutLinks: [
        {
          name: "NEET Basic Counselling Support",
          price: 699,
          url: "https://tagmango.com/web/checkout/67d1cd1ff788a8a5e74c2dc0",
        },
        {
          name: "NEET Premium Counselling Support",
          price: 1599,
          url: "https://tagmango.com/web/checkout/67d1ce037fd22fcc4e50227f",
        },
        {
          name: "NEET Full Support Counselling + Mentorship Support",
          price: 2199,
          url: "https://tagmango.com/web/checkout/67d1cfb7229650091d5adc4e",
        },
      ],
    },
    {
      title: "CUET Counseling",
      description: "University and course selection guidance for CUET aspirants",
      price: 1799,
      features: [
        "University selection guidance",
        "Course recommendation",
        "Application process assistance",
        "1-hour personalized session",
        "Email support for 7 days",
      ],
      popular: false,
      link: "/cuet-counseling",
      color: "purple",
      checkoutLinks: [],
    },
    {
      title: "MHT-CET Counseling",
      description: "Maharashtra engineering & pharmacy admission guidance",
      price: 399,
      features: [
        "College selection in Maharashtra",
        "CAP round strategy",
        "Admission process assistance",
        "1-hour personalized session",
        "Email support for 7 days",
      ],
      popular: false,
      link: "/mht-cet-counseling",
      color: "green",
      checkoutLinks: [
        {
          name: "MHT-CET Basic Counselling Support",
          price: 399,
          url: "https://tagmango.com/web/checkout/67cc1e5dae8cdd945445bd55",
        },
        {
          name: "MHT-CET Premium Counselling Support",
          price: 799,
          url: "https://tagmango.com/web/checkout/67cdced477dbd2d14edb8898",
        },
      ],
    },
  ]

  const getColorClass = (color: string, isBackground = false) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-blue-500", text: "text-blue-500", border: "border-blue-500" },
      orange: { bg: "bg-orange-500", text: "text-orange-500", border: "border-orange-500" },
      purple: { bg: "bg-purple-500", text: "text-purple-500", border: "border-purple-500" },
      green: { bg: "bg-green-500", text: "text-green-500", border: "border-green-500" },
    }

    return isBackground ? colorMap[color]?.bg : colorMap[color]?.text
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Counseling Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the right counseling service to help you make informed decisions about your academic future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counselingServices.map((service, index) => (
            <div key={index} className="h-full">
              <Card
                className={`h-full flex flex-col ${service.popular ? `border-${service.color}-500 shadow-lg` : ""}`}
              >
                {service.popular && (
                  <div
                    className={`${getColorClass(service.color, true)} text-white text-xs font-semibold py-1 px-3 text-center`}
                  >
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className={`text-xl ${getColorClass(service.color)}`}>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <p className="text-3xl font-bold">₹{service.price}</p>
                    <p className="text-sm text-gray-500">Starting price</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className={`h-5 w-5 ${getColorClass(service.color)} mr-2 shrink-0 mt-0.5`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-3">
                    {service.checkoutLinks.length > 0 ? (
                      <>
                        {service.checkoutLinks.map((checkout, idx) => (
                          <Button
                            key={idx}
                            asChild
                            className={`w-full ${idx === 0 ? getColorClass(service.color, true) : "bg-gray-700"}`}
                          >
                            <a
                              href={checkout.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                            >
                              {checkout.name} - ₹{checkout.price} <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        ))}
                      </>
                    ) : (
                      <Button asChild className={`w-full ${service.popular ? getColorClass(service.color, true) : ""}`}>
                        <a href={service.link} className="flex items-center justify-center">
                          Book Now
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="outline" className="w-full">
                      <a href={service.link} className="flex items-center justify-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex items-center text-sm text-gray-500 cursor-help">
                  <Info className="h-4 w-4 mr-1" />
                  Need a custom counseling package?
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  Contact us for personalized counseling packages tailored to your specific needs.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="mt-2">
            <Button asChild variant="link" className="text-orange-500">
              <a href="/contact">Contact us for custom packages</a>
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}
