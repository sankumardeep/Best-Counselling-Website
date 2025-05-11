import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CounsellingPlansContent } from "@/components/counselling-plans-content"

export default function CounsellingPlansPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <CounsellingPlansContent />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
