import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Phone, Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CallCounsellingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Call Counselling Support</h1>
              <p className="text-xl mb-8">
                Get instant guidance and answers to your queries through our dedicated call counselling service.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-orange-600 font-semibold">
                <Link href="#call-plans">View Call Plans</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Call Counselling?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our call counselling service offers immediate assistance for your urgent academic queries and concerns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Instant Access</h3>
                <p className="text-gray-600">
                  Connect with our expert counsellors immediately without waiting for in-person appointments.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Book calls at your convenience, including evenings and weekends to fit your busy schedule.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Time-Efficient</h3>
                <p className="text-gray-600">
                  Get focused guidance on specific queries without the need for lengthy in-person sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="call-plans" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Call Counselling Plans</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose the call package that suits your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Single Call</CardTitle>
                  <CardDescription>For quick queries and guidance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold">₹499</p>
                    <p className="text-sm text-gray-500">One-time payment</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>30-minute call with an expert counsellor</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Focused guidance on specific queries</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Call summary via email</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-orange-500 shadow-md">
                <div className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 absolute top-0 right-0 rounded-bl-lg">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>Call Package</CardTitle>
                  <CardDescription>For ongoing support and guidance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold">₹1,999</p>
                    <p className="text-sm text-gray-500">One-time payment</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>5 calls (30 minutes each)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Priority scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Call summaries via email</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Valid for 3 months</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Premium Support</CardTitle>
                  <CardDescription>For comprehensive guidance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold">₹3,999</p>
                    <p className="text-sm text-gray-500">One-time payment</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>12 calls (30 minutes each)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>VIP scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Detailed call summaries and action plans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>WhatsApp support between calls</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>Valid for 6 months</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-center">How to Book a Call</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4 shrink-0">
                    <span className="font-bold text-orange-500">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Choose a Plan</h3>
                    <p className="text-gray-600">Select the call counselling plan that best suits your needs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4 shrink-0">
                    <span className="font-bold text-orange-500">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Make Payment</h3>
                    <p className="text-gray-600">Complete the payment process securely through our website.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4 shrink-0">
                    <span className="font-bold text-orange-500">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Schedule Your Call</h3>
                    <p className="text-gray-600">Choose a convenient date and time for your counselling call.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4 shrink-0">
                    <span className="font-bold text-orange-500">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Receive Confirmation</h3>
                    <p className="text-gray-600">
                      Get a confirmation email with call details and preparation instructions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Link href="/contact">
                    Book Your Call Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
