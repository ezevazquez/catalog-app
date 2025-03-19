import { FAQList } from "@/components/faqs/faq-list"
import { getFAQs } from "@/lib/queries/getFAQs"

export const revalidate = 3600 // Revalidate every hour

export default async function FAQPage() {
  const faqs = await getFAQs()

  return (
    <main>
      <FAQList faqs={faqs} />
    </main>
  )
}

