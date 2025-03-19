import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import type { Catalog } from "@/types"

// Enhanced query with more explicit path references and error handling
const catalogByIdQuery = groq`
  *[_type == "catalog" && catalogId.current == $catalogId][0] {
    _id,
    name,
    catalogId,
    client,
    "sections": sections[] {
      "header": header->{
        _id,
        name,
        image,
        title,
        description
      },
      "products": products[]->{ 
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
      }
    }
  }
`

/**
 * Fetches a catalog by ID from Sanity
 * @param catalogId The slug ID of the catalog to fetch
 * @returns The catalog or null if not found
 */
export async function getCatalogById(catalogId: string): Promise<Catalog | null> {
  try {
    console.log(`Fetching catalog with ID: ${catalogId}`)
    const catalog = await client.fetch<Catalog | null>(catalogByIdQuery, { catalogId }, { cache: "no-store" })

    console.log(
      "Catalog data received:",
      catalog
        ? {
            id: catalog._id,
            name: catalog.name,
            sectionsCount: catalog.sections?.length || 0,
          }
        : "No catalog found",
    )

    return catalog
  } catch (error) {
    console.error("Error fetching catalog:", error)
    throw error
  }
}

