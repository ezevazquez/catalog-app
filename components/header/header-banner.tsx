import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import type { Header } from "@/types"

interface HeaderBannerProps {
  header: Header
  overlay?: boolean
  height?: "sm" | "md" | "lg"
}

export function HeaderBanner({ header, overlay = true, height = "md" }: HeaderBannerProps) {
  const headerImage = header.image
    ? urlFor(header.image).width(1200).height(400).url()
    : "/placeholder.svg?height=400&width=1200"

  const heightClass = {
    sm: "h-40",
    md: "h-60",
    lg: "h-80",
  }[height]

  return (
    <div className={`relative w-full ${heightClass} mb-8 rounded-lg overflow-hidden`}>
      <Image src={headerImage || "/placeholder.svg"} alt={header.title} fill className="object-cover" priority />
      {overlay && (
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-4">
          <h2 className="text-3xl font-bold mb-2">{header.title}</h2>
          {header.description && <p className="text-center max-w-2xl">{header.description}</p>}
        </div>
      )}
    </div>
  )
}

