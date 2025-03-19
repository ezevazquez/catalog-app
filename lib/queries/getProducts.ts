import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import type { Product } from "@/types"

// Query to get all products
const productsQuery = groq`
  *[_type == "product"] {
    _id,
    name,
    productId,
    category->{
      _id,
      name
    },
    price,
    fit,
    detail,
    size,
    color,
    mainImages,
    additionalImages,
    stockQuantity
  } | order(name asc)
`

/**
 * Fetches all products from Sanity
 * @returns Array of products
 */
export async function getProducts(): Promise<Product[]> {
  return client.fetch<Product[]>(productsQuery, {}, { cache: "no-store" })
}

