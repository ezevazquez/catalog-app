import { CatalogPreview } from "@/components/catalogs/catalog-preview"
import { Skeleton } from "@/components/ui/skeleton"
import type { Catalog } from "@/types"

interface CatalogGridProps {
  catalogs: Catalog[]
  loading?: boolean
}

export function CatalogGrid({ catalogs, loading = false }: CatalogGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    )
  }

  if (catalogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No catalogs available. Create one in the Sanity Studio.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {catalogs.map((catalog) => (
        <CatalogPreview key={catalog._id} catalog={catalog} />
      ))}
    </div>
  )
}

