import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Testimonials } from "@/components/testimonials"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Success Stories</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Hear from students who have achieved their academic goals with our guidance and support
            </p>
          </div>
          <Testimonials />
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
