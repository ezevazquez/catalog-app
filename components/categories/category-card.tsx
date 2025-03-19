import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Category } from "@/types"

interface CategoryCardProps {
  category: Category
  productCount?: number
}

export function CategoryCard({ category, productCount = 0 }: CategoryCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{category.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        {category.description && <p className="text-sm text-muted-foreground">{category.description}</p>}
        <p className="text-sm mt-2">
          {productCount} {productCount === 1 ? "product" : "products"}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href={`/categories/${category._id}`} className="text-primary hover:underline">
          View products →
        </Link>
      </CardFooter>
    </Card>
  )
}

