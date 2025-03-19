import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import type { Category } from "@/types"

// Query to get all categories
const categoriesQuery = groq`
  *[_type == "category"] {
    _id,
    name,
    description
  } | order(name asc)
`

/**
 * Fetches all categories from Sanity
 * @returns Array of categories
 */
export async function getCategories(): Promise<Category[]> {
  return client.fetch<Category[]>(categoriesQuery, {}, { cache: "no-store" })
}

