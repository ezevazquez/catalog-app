import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import type { Header } from "@/types"

// Query to get all headers
const headersQuery = groq`
  *[_type == "header"] {
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
  } | order(name asc)
`

/**
 * Fetches all headers from Sanity
 * @returns Array of headers
 */
export async function getHeaders(): Promise<Header[]> {
  return client.fetch<Header[]>(headersQuery, {}, { cache: "no-store" })
}

