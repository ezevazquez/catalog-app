import { SectionContainer } from "@/components/layout/section-container"
import { SectionHeader } from "@/components/layout/section-header"
import { CatalogGrid } from "@/components/catalogs/catalog-grid"
import { getCatalogs } from "@/lib/queries/getCatalogs"
import Link from "next/link"

export default async function Home() {
  const catalogs = await getCatalogs()

  return (
    <main>
      <SectionContainer className="py-16">
        <SectionHeader title="Catalog App" description="Create and manage product catalogs with ease" />

        <SectionContainer className="py-0">
          <SectionHeader title="Available Catalogs" align="left" />
          <CatalogGrid catalogs={catalogs} />
        </SectionContainer>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Browse by Category</h2>
            <p className="mb-4">View all products organized by category.</p>
            <Link href="/categories" className="text-primary hover:underline">
              View Categories →
            </Link>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
            <p className="mb-4">Find answers to common questions about our products and services.</p>
            <Link href="/faq" className="text-primary hover:underline">
              View FAQ →
            </Link>
          </div>

          <div className="p-6 bg-muted rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Manage Your Catalogs</h2>
            <p className="mb-4">Use the Sanity Studio to create and manage your catalogs, products, and categories.</p>
            <Link href="/studio" className="text-primary hover:underline">
              Open Sanity Studio →
            </Link>
          </div>
        </div>
      </SectionContainer>
    </main>
  )
}

