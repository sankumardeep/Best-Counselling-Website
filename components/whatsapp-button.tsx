"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919530452548?text=Hello%20Best%20Counsellor,%20I%20need%20assistance%20with", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-4 w-72">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Need Help?</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Chat with our counsellors directly on WhatsApp for instant assistance.
          </p>
          <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 mb-3">
            <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
          </Button>
          <div className="flex justify-center space-x-4 mt-3 pt-3 border-t border-gray-200">
            <Link
              href="https://www.instagram.com/bestcounsellor?igsh=MXFmM3g4dWFtbXc5eQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://youtube.com/@bestcounsellor?si=J7-rF18Xf2YqG4Gl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">WhatsApp Support</span>
      </Button>
    </div>
  )
}
