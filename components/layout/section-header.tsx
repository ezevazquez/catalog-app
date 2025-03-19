import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeader({ title, description, className, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8", align === "center" && "text-center", align === "right" && "text-right", className)}>
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}

