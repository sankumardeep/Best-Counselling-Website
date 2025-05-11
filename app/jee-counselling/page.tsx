import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { JeeCounsellingContent } from "@/components/jee-counselling-content"

export default function JeeCounsellingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <JeeCounsellingContent />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
