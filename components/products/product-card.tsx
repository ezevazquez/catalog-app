import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { urlFor } from "@/sanity/lib/image"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
  showCategory?: boolean
  showLink?: boolean
}

export function ProductCard({ product, showCategory = true, showLink = false }: ProductCardProps) {
  const mainImage =
    product.mainImages && product.mainImages.length > 0
      ? urlFor(product.mainImages[0]).width(400).height(400).url()
      : "/placeholder.svg?height=400&width=400"

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-60 w-full">
        <Image
          src={mainImage || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          {showCategory && (
            <Badge variant="secondary" className="ml-2">
              {product.category.name}
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{product.productId}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        {product.detail && <p className="text-sm mb-2">{product.detail}</p>}
        <div className="flex flex-wrap gap-2 mt-2">
          {Array.isArray(product.size) ? (
            product.size.map((size) => (
              <Badge key={size} variant="outline" className="text-xs">
                {size}
              </Badge>
            ))
          ) : (
            <p className="text-sm text-gray-500">No size available</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="font-bold">${product.price.toFixed(2)}</p>
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">Stock: {product.stockQuantity}</p>
          {showLink && (
            <Link href={`/products/${product._id}`} className="text-sm text-primary hover:underline">
              View details →
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

