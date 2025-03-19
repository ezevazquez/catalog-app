import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import type { Product } from "@/types"

// Query to get a product by ID
const productByIdQuery = groq`
  *[_type == "product" && _id == $productId][0] {
    _id,
    name,
    productId,
    category->{
      _id,
      name
    },
    catalogs[]->{
      _id,
      name,
      catalogId
    },
    price,
    fit,
    detail,
    size,
    color,
    mainImages,
    additionalImages,
    stockQuantity
  }
`

/**
 * Fetches a product by ID from Sanity
 * @param productId The ID of the product to fetch
 * @returns The product or null if not found
 */
export async function getProductById(productId: string): Promise<Product | null> {
  return client.fetch<Product | null>(productByIdQuery, { productId }, { cache: "no-store" })
}

