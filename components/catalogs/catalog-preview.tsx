import Link from "next/link"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Catalog } from "@/types"

interface CatalogPreviewProps {
  catalog: Catalog
}

export function CatalogPreview({ catalog }: CatalogPreviewProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{catalog.name}</CardTitle>
        <p className="text-sm text-muted-foreground">Client: {catalog.client}</p>
      </CardHeader>
      {/* <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{catalog.sections?.length || 0} sections</p>
      </CardContent> */}
      <CardFooter className="pt-0">
        <Link href={`/${catalog.client}/${catalog.catalogId.current}`} className="text-primary hover:underline">
          View catalog →
        </Link>
      </CardFooter>
    </Card>
  )
}

