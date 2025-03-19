import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import type { Header } from "@/types"

// Query to get a header by ID
const headerByIdQuery = groq`
  *[_type == "header" && _id == $headerId][0] {
    _id,
    name,
    image,
    title,
    description,
    catalog->{
      _id,
      name,
      catalogId
    }
  }
`

/**
 * Fetches a header by ID from Sanity
 * @param headerId The ID of the header to fetch
 * @returns The header or null if not found
 */
export async function getHeaderById(headerId: string): Promise<Header | null> {
  return client.fetch<Header | null>(headerByIdQuery, { headerId }, { cache: "no-store" })
}

