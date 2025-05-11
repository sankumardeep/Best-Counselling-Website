"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ExternalLink, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function CounsellingPlansContent() {
  // Define counselling services
  const counsellingServices = [
    {
      category: "JEE Counselling",
      services: [
        {
          name: "JOSAA",
          description: "Joint Seat Allocation Authority for IITs, NITs, IIITs and GFTIs",
          plans: [
            {
              name: "JOSAA Basic Counselling Support",
              price: 699,
              url: "https://tagmango.com/web/checkout/67d1b28de1b2275425698802",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "JOSAA Premium Counselling Support",
              price: 1599,
              url: "https://tagmango.com/web/checkout/67cde0b877dbd2d14ee672c0",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
            {
              name: "JOSAA Choice Filling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67eecbfdaa6016cd3e2a21ad",
              features: [
                "Expert assistance with choice filling",
                "Rank-based recommendations",
                "Round-wise strategy",
                "Valid during counselling period",
              ],
            },
            {
              name: "JOSAA Full Counselling Support",
              price: 2199,
              url: "https://tagmango.com/web/checkout/67eecd66515da59451e6368a",
              features: [
                "Comprehensive end-to-end support",
                "Personalized counselling sessions",
                "Document verification assistance",
                "24/7 support during counselling",
                "Valid until admission confirmation",
              ],
            },
          ],
        },
        {
          name: "CSAB",
          description: "Central Seat Allocation Board for NITs, IIITs and GFTIs",
          plans: [
            {
              name: "CSAB Basic Counselling Support",
              price: 699,
              url: "https://tagmango.com/web/checkout/67d1cb66f788a8a5e74aeb0c",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "CSAB Premium Counselling Support",
              price: 1599,
              url: "https://tagmango.com/web/checkout/67d0718493c98c48b83a351c",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "JAC Delhi",
          description: "Joint Admission Counselling for Delhi Technical Universities",
          plans: [
            {
              name: "JAC Delhi Basic Counselling Support",
              price: 499,
              url: "https://tagmango.com/web/checkout/67dc5170d01afbdde4253fbd",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "JAC Delhi Premium Counselling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67d07565229650091d6fda0b",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "JAC Chandigarh",
          description: "Joint Admission Counselling for Chandigarh Region",
          plans: [
            {
              name: "JAC Chandigarh Basic Counselling Support",
              price: 499,
              url: "https://tagmango.com/web/checkout/67dc5022e7e57d562447e453",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "JAC Chandigarh Premium Counselling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67d0765f7fd22fcc4e6a8b40",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Medical Counselling",
      services: [
        {
          name: "NEET",
          description: "National Eligibility cum Entrance Test for Medical Admissions",
          plans: [
            {
              name: "NEET Basic Counselling Support",
              price: 699,
              url: "https://tagmango.com/web/checkout/67d1cd1ff788a8a5e74c2dc0",
              features: ["College recommendations", "Basic admission guidance", "Email support", "7-day validity"],
            },
            {
              name: "NEET Premium Counselling Support",
              price: 1599,
              url: "https://tagmango.com/web/checkout/67d1ce037fd22fcc4e50227f",
              features: [
                "Detailed college analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
            {
              name: "NEET Full Support Counselling + Mentorship Support",
              price: 2199,
              url: "https://tagmango.com/web/checkout/67d1cfb7229650091d5adc4e",
              features: [
                "Comprehensive end-to-end support",
                "Personalized counselling sessions",
                "Mentorship from medical professionals",
                "24/7 support during counselling",
                "Valid until admission confirmation",
              ],
            },
          ],
        },
      ],
    },
    {
      category: "State Counselling",
      services: [
        {
          name: "MHT-CET",
          description: "Maharashtra Common Entrance Test",
          plans: [
            {
              name: "MHT-CET Basic Counselling Support by IITians",
              price: 499,
              url: "https://tagmango.com/web/checkout/6801e49a171597fec2ce3b91",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "MHT-CET Premium Counselling Support by IITians",
              price: 999,
              url: "https://tagmango.com/web/checkout/6801e51e68d45abc42eb9f78",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "WB JEE",
          description: "West Bengal Joint Entrance Examination",
          plans: [
            {
              name: "WB JEE Basic Counselling Support",
              price: 499,
              url: "https://tagmango.com/web/checkout/67e43300fdd0cc42e6709fec",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "WB JEE Premium Counselling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67e433dd2c7b2a5e7f24ab18",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "GGSIPU",
          description: "Guru Gobind Singh Indraprastha University",
          plans: [
            {
              name: "GGSIPU Basic Counselling Support",
              price: 499,
              url: "https://tagmango.com/web/checkout/67e436404e1eeead075da583",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "GGSIPU Premium Counselling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67e436f7fdd0cc42e674a38e",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "REAP",
          description: "Rajasthan Engineering Admission Process",
          plans: [
            {
              name: "REAP Basic Counselling Support",
              price: 499,
              url: "https://tagmango.com/web/checkout/67e4392d4e1eeead075fd8b2",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "REAP Premium Counselling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67e43a2bb0fb0c7ebe4bc780",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "UPTU/AKTU",
          description: "Uttar Pradesh Technical University / Dr. A.P.J. Abdul Kalam Technical University",
          plans: [
            {
              name: "UPTU/AKTU + HBTU + MMMUT Basic Counselling Service",
              price: 499,
              url: "https://tagmango.com/web/checkout/67e43f312c7b2a5e7f2f90d0",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "UPTU/AKTU + HBTU + MMMUT Premium Counselling Service",
              price: 999,
              url: "https://tagmango.com/web/checkout/67e580ccfdd0cc42e64cf4a6",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "MPDTE",
          description: "Madhya Pradesh Directorate of Technical Education",
          plans: [
            {
              name: "MPDTE Basic Counselling Support",
              price: 499,
              url: "https://tagmango.com/web/checkout/67e584d7fdd0cc42e6508904",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "MPDTE Premium Counselling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67e585d0b0fb0c7ebe20374c",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "UGEAC",
          description: "Under Graduate Engineering Admission Committee (Gujarat)",
          plans: [
            {
              name: "UGEAC Basic Counselling Support",
              price: 499,
              url: "https://tagmango.com/web/checkout/67e58af02c7b2a5e7f0ebe91",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "UGEAC Premium Counselling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67e58b9cfdd0cc42e656790c",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "HSTES",
          description: "Haryana State Technical Education Society",
          plans: [
            {
              name: "HSTES Basic Counselling Support",
              price: 499,
              url: "https://tagmango.com/web/checkout/67e58daafdd0cc42e657d46b",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "HSTES Premium Counselling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67e58e502c7b2a5e7f118d67",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "COMEDK",
          description: "Consortium of Medical, Engineering and Dental Colleges of Karnataka",
          plans: [
            {
              name: "COMEDK Basic Counselling Support",
              price: 499,
              url: "https://tagmango.com/web/checkout/67e58fa3fdd0cc42e6592059",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "COMEDK Premium Counselling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67e5901ffdd0cc42e65969fe",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "GUJCET",
          description: "Gujarat Common Entrance Test",
          plans: [
            {
              name: "GUJCET Basic Counselling Support",
              price: 499,
              url: "https://tagmango.com/web/checkout/67e590e7d50014e2343e7d82",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "GUJCET Premium Counselling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67e5916013f85a03f1885d4c",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
        {
          name: "KCET",
          description: "Karnataka Common Entrance Test",
          plans: [
            {
              name: "KCET Basic Counselling Support",
              price: 499,
              url: "https://tagmango.com/web/checkout/67fa021055fe5a8f25d14e51",
              features: [
                "College & branch recommendations",
                "Basic admission guidance",
                "Email support",
                "7-day validity",
              ],
            },
            {
              name: "KCET Premium Counselling Support",
              price: 999,
              url: "https://tagmango.com/web/checkout/67fa049655fe5a8f25d352e2",
              features: [
                "Detailed college & branch analysis",
                "Personalized admission strategy",
                "Priority email & call support",
                "15-day validity",
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Special Counselling",
      services: [
        {
          name: "Private Colleges",
          description: "Counselling for top private engineering and medical colleges",
          plans: [
            {
              name: "State wise Top Private Colleges Counselling Support",
              price: 2199,
              url: "https://tagmango.com/web/checkout/6801e72d171597fec2d06b2f",
              features: [
                "Comprehensive analysis of private colleges",
                "State-wise college recommendations",
                "Admission process guidance",
                "Scholarship information",
                "Fee structure comparison",
                "30-day validity",
              ],
            },
          ],
        },
        {
          name: "All Counselling Services",
          description: "Comprehensive support for all counselling processes",
          plans: [
            {
              name: "All Counselling Services Call Support",
              price: 9999,
              url: "https://tagmango.com/web/checkout/67fa0141450043abfc7d2e17",
              features: [
                "Unlimited call support for all counselling services",
                "Priority access to counsellors",
                "Personalized guidance for multiple exams",
                "Document verification assistance",
                "Round-wise strategy for all counsellings",
                "Valid for entire admission season",
              ],
            },
          ],
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Counselling Plans</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Choose the perfect counselling plan that suits your needs and goals
        </p>
      </div>

      <div className="space-y-16">
        {counsellingServices.map((categoryGroup, categoryIndex) => (
          <div key={categoryIndex} className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center">{categoryGroup.category}</h2>

            {categoryGroup.services.map((service, serviceIndex) => (
              <div key={serviceIndex} className="space-y-4">
                <div className="flex flex-col items-center text-center mb-6">
                  <h3 className="text-xl font-bold text-orange-500">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="mt-2">
                          <Info className="h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Click on a plan to proceed to checkout</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {service.plans.map((plan, planIndex) => (
                    <Card key={planIndex} className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-lg text-center">
                          {plan.name.split(" ").slice(-2).join(" ")}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 h-10 text-center">{plan.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="mb-4 text-center">
                          <p className="text-2xl font-bold">₹{plan.price}</p>
                        </div>
                        <ul className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-1" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                          <a
                            href={plan.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            Book Now <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Need Personalized Guidance?</h2>
        <p className="text-center mb-6">
          Not sure which plan is right for you? Contact our expert counsellors for personalized recommendations.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <a href="#" onClick={() => document.dispatchEvent(new CustomEvent("open-auth-modal"))}>
              Log In for Assistance
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
