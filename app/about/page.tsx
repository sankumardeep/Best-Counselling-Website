import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, ExternalLink, Award, BookOpen, Users, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-800 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About BestCounsellor</h1>
              <p className="text-xl leading-relaxed">
                We are a team of passionate educators and counsellors dedicated to helping students achieve their
                academic dreams and secure admissions in top institutions across India.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Mission</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Our mission is to provide personalized, expert guidance to students preparing for competitive exams
                    like JEE, NEET, CUET, and more. We believe that every student deserves access to quality counselling
                    that can help them make informed decisions about their academic and career paths.
                  </p>
                  <p className="text-lg text-gray-700">
                    We strive to bridge the gap between students' potential and their dream colleges through
                    comprehensive counselling, mentorship, and support services tailored to individual needs.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                    <Target className="w-40 h-40 text-blue-500 opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">98%</h3>
                        <p className="text-gray-700">Success Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <Card className="border-t-4 border-blue-500">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Target className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold">Our Vision</h3>
                    </div>
                    <p className="text-gray-700">
                      To become the most trusted educational counselling platform in India, empowering students to make
                      the right academic choices and achieve their full potential.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-orange-500">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <Award className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold">Our Approach</h3>
                    </div>
                    <p className="text-gray-700">
                      We take a student-centric approach, focusing on individual strengths, preferences, and goals to
                      provide tailored guidance and support throughout the academic journey.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-purple-500">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold">Our Values</h3>
                    </div>
                    <p className="text-gray-700">
                      Integrity, excellence, empathy, and innovation guide everything we do. We are committed to
                      providing honest and transparent guidance to all our students.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Meet Our Founders</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our team is led by experienced professionals with strong academic backgrounds and a passion for
                  education
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Founder 1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="/images/founder-ishwar.jpeg"
                      alt="Ishwar - Founder of BestCounsellor"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Ishwar Prajapati</h3>
                    <p className="text-gray-600 mb-4">Co-Founder & Chief Counselling Officer</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <BookOpen className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">B.Tech in Electronics</p>
                          <p className="text-sm text-gray-600">Research Scholar, IIT Mandi</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <p>Expert in JEE & NEET Counselling with 5+ years of experience</p>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Badge variant="outline" className="px-3 py-1">
                        JEE Expert
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1">
                        Career Guidance
                      </Badge>
                    </div>

                    <div className="mt-6 pt-6 border-t flex justify-start space-x-4">
                      <a href="mailto:ishwar@bestcounsellor.in" className="text-gray-600 hover:text-blue-600">
                        <Mail className="h-5 w-5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/ishwar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Founder 2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="/images/founder-gautam.png"
                      alt="Gautam - Founder of BestCounsellor"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Gautam Kumar</h3>
                    <p className="text-gray-600 mb-4">Co-Founder & Technical Director</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <BookOpen className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">B.Tech in Computer Science</p>
                          <p className="text-sm text-gray-600">College of Technology and Engineering</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <p>Specialized in educational technology and digital learning solutions</p>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Badge variant="outline" className="px-3 py-1">
                        Tech Expert
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1">
                        EdTech Specialist
                      </Badge>
                    </div>

                    <div className="mt-6 pt-6 border-t flex justify-start space-x-4">
                      <a href="mailto:gautam@bestcounsellor.in" className="text-gray-600 hover:text-blue-600">
                        <Mail className="h-5 w-5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/gautam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Choose BestCounsellor</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">Expertise</h3>
                  </div>
                  <p className="text-gray-700">
                    Our counsellors have helped thousands of students secure admissions in top institutions across
                    India, with a proven track record of success.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold">Personalization</h3>
                  </div>
                  <p className="text-gray-700">
                    We understand that each student is unique, and our guidance is tailored to individual needs,
                    strengths, and career goals.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <ExternalLink className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Comprehensive Support</h3>
                  </div>
                  <p className="text-gray-700">
                    From exam preparation to final admission, we provide end-to-end support at every step of your
                    academic journey.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold">Success Rate</h3>
                  </div>
                  <p className="text-gray-700">
                    Our high success rate speaks for itself, with 98% of our students achieving their academic goals and
                    securing admissions in their preferred institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their academic careers with our expert guidance and
              support.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
