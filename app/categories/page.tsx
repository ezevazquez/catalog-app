/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionContainer } from "@/components/layout/section-container"
import { SectionHeader } from "@/components/layout/section-header"
import { CategoryGrid } from "@/components/categories/cateogory-grid"
import { getCategories } from "@/lib/queries/getCategories"
import { getProductsByCategory } from "@/lib/queries/getProductsByCategory"

export default async function CategoriesPage() {
  const categories = await getCategories()

  // Fetch products for each category to get counts
  const productsByCategory: Record<string, any> = {}
  const productCounts: Record<string, number> = {}

  for (const category of categories) {
    const products = await getProductsByCategory(category._id)
    productsByCategory[category._id] = products
    productCounts[category._id] = products.length
  }

  return (
    <main>
      <SectionContainer>
        <SectionHeader title="Browse by Category" description="Explore our products organized by category" />
        <CategoryGrid categories={categories} productCounts={productCounts} />
      </SectionContainer>
    </main>
  )
}

