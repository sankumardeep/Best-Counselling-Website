import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RecentUpdates } from "@/components/recent-updates"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <RecentUpdates />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
