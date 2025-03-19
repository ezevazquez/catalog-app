/* eslint-disable @typescript-eslint/no-explicit-any */
import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import type { Catalog } from "@/types"

// Enhanced query to include section count for debugging
const catalogsQuery = groq`
  *[_type == "catalog"] {
    _id,
    name,
    catalogId,
    client,
    "sectionCount": count(sections)
  } | order(name asc)
`

/**
 * Fetches all catalogs from Sanity
 * @returns Array of catalogs
 */
export async function getCatalogs(): Promise<Catalog[]> {
  try {
    console.log("Fetching all catalogs")
    // Transform the response to ensure catalogId is properly formatted
    const catalogs = await client.fetch<any[]>(catalogsQuery, {}, { cache: "no-store" })

    console.log(`Found ${catalogs.length} catalogs`)
    catalogs.forEach((catalog) => {
      console.log(`Catalog: ${catalog.name}, Sections: ${catalog.sectionCount || 0}`)
    })

    return catalogs.map((catalog) => ({
      ...catalog,
      catalogId: typeof catalog.catalogId === "object" ? catalog.catalogId : { current: catalog.catalogId },
    }))
  } catch (error) {
    console.error("Error fetching catalogs:", error)
    throw error
  }
}

