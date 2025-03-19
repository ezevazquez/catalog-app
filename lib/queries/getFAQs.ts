import { client } from "@/sanity/lib/client"

export interface FAQData {
  _id: string
  pregunta: string
  respuesta: string
}

export async function getFAQs(): Promise<FAQData[]> {
  const query = `
    *[_type == "faq"]{
      _id,
      pregunta,
      respuesta
    } | order(_createdAt asc)
  `

  const faqs = await client.fetch(query, {}, { cache: "no-store" })
  return faqs
}

