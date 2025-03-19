import { CategoryCard } from "@/components/categories/category-card"
import { Skeleton } from "@/components/ui/skeleton"
import type { Category } from "@/types"

interface CategoryGridProps {
  categories: Category[]
  productCounts?: Record<string, number>
  loading?: boolean
}

export function CategoryGrid({ categories, productCounts = {}, loading = false }: CategoryGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        ))}
      </div>
    )
  }

  if (categories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No categories found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} productCount={productCounts[category._id] || 0} />
      ))}
    </div>
  )
}

