import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Construction } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <Construction className="h-24 w-24 text-primary mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Under Construction</h1>
        <p className="text-lg text-gray-600 mb-8">
          We're currently working on this page. Please check back soon or navigate to another section of our website.
        </p>
        <Button asChild className="px-8 py-6 text-lg">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
