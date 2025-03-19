import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import type { Product } from "@/types"

// Query to get products by category ID
const productsByCategoryQuery = groq`
  *[_type == "product" && category._ref == $categoryId] {
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
 * Fetches products by category ID from Sanity
 * @param categoryId The ID of the category to filter by
 * @returns Array of products in the specified category
 */
export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  return client.fetch<Product[]>(productsByCategoryQuery, { categoryId }, { cache: "no-store" })
}

