import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Best Counsellor</h3>
            <p className="text-gray-400 mb-6">
              Your trusted guide for JEE, CUET, and academic success. We provide expert counselling, mentorship, and
              support to help students achieve their goals.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/bestcounsellor?igsh=MXFmM3g4dWFtbXc5eQ=="
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://youtube.com/@bestcounsellor?si=J7-rF18Xf2YqG4Gl"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/jee-counselling" className="text-gray-400 hover:text-white transition-colors">
                  JEE Counselling
                </Link>
              </li>
              <li>
                <Link href="/cuet-updates" className="text-gray-400 hover:text-white transition-colors">
                  CUET Updates
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-gray-400 hover:text-white transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/jee-counselling" className="text-gray-400 hover:text-white transition-colors">
                  JEE Counselling
                </Link>
              </li>
              <li>
                <Link href="/cuet-updates" className="text-gray-400 hover:text-white transition-colors">
                  CUET Updates
                </Link>
              </li>
              <li>
                <Link href="/call-counselling" className="text-gray-400 hover:text-white transition-colors">
                  Call Counselling
                </Link>
              </li>
              <li>
                <Link href="/performance-analysis" className="text-gray-400 hover:text-white transition-colors">
                  Performance Analysis
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-gray-400 hover:text-white transition-colors">
                  Mentorship Program
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Study Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                <span className="text-gray-400">
                  17/90, Sector 15, Chopasni Housing Board, Jodhpur, Rajasthan 342001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <div className="flex flex-col">
                  <Link href="tel:+919056464855" className="text-gray-400 hover:text-white transition-colors">
                    +91 90564 64855
                  </Link>
                  <Link href="tel:+919530452548" className="text-gray-400 hover:text-white transition-colors">
                    +91 95304 52548
                  </Link>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <Link
                  href="mailto:bestcounsellor01@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  bestcounsellor01@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Best Counsellor. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
