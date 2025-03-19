import { HeaderBanner } from "@/components/header/header-banner"
import { ProductGrid } from "@/components/products/product-grid"
import { SectionContainer } from "@/components/layout/section-container"
import type { Section } from "@/types"

interface CatalogSectionProps {
  section: Section
}

export function CatalogSection({ section }: CatalogSectionProps) {
  // Add validation to handle potential missing data
  if (!section.header) {
    return (
      <SectionContainer className="mb-12">
        <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
          <p>Section is missing header information</p>
        </div>
      </SectionContainer>
    )
  }

  return (
    <SectionContainer className="mb-12">
      <HeaderBanner header={section.header} />
      <ProductGrid products={section.products || []} />
    </SectionContainer>
  )
}

