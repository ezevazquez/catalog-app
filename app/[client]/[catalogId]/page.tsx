import { SectionContainer } from "@/components/layout/section-container"
import { SectionHeader } from "@/components/layout/section-header"
import { CatalogSection } from "@/components/catalogs/catalog-section"
import { getCatalogById } from "@/lib/queries/getCatalogById"
import { notFound } from "next/navigation"

interface CatalogPageProps {
  params: {
    client: string
    catalogId: string
  }
}

export default async function CatalogPage({ params }: CatalogPageProps) {
  const { client: clientName, catalogId } = params

  console.log(`Rendering catalog page for client: ${clientName}, catalogId: ${catalogId}`)

  const catalog = await getCatalogById(catalogId)

  if (!catalog || decodeURIComponent(clientName).toLowerCase() !== catalog.client.toLowerCase()) {
    console.log("Catalog not found or client mismatch, redirecting to 404");
    notFound();
  }

  console.log(`Catalog found: ${catalog.name}, sections: ${catalog.sections?.length || 0}`)

  // Add debugging to check section structure
  if (catalog.sections) {
    catalog.sections.forEach((section, index) => {
      console.log(`Section ${index + 1}:`, {
        header: section.header
          ? {
            id: section.header._id,
            name: section.header.name,
          }
          : "Missing header",
        productsCount: section.products?.length,
      })
    })
  }

  return (
    <main>
      <SectionContainer>
        <SectionHeader title={catalog.name} description={`Client: ${catalog.client}`} />

        {catalog.sections && catalog.sections.length > 0 ? (
          catalog.sections.map((section, index) => (
            <CatalogSection key={`${section.header?._id || index}-${index}`} section={section} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-xl">This catalog has no sections yet.</p>
            <p className="text-muted-foreground mt-2">Add sections in the Sanity Studio to populate this catalog.</p>
          </div>
        )}
      </SectionContainer>
    </main>
  )
}

