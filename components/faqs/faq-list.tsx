import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionContainer } from "@/components/layout/section-container"
import { SectionHeader } from "@/components/layout/section-header"
import { Skeleton } from "@/components/ui/skeleton"
import type { FAQData } from "@/lib/queries/getFAQs"

interface FAQListProps {
  faqs: FAQData[]
  loading?: boolean
}

export function FAQList({ faqs, loading = false }: FAQListProps) {
  if (loading) {
    return (
      <SectionContainer>
        <SectionHeader title="Preguntas Frecuentes" />
        <div className="max-w-3xl mx-auto space-y-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-24 w-full" />
            </div>
          ))}
        </div>
      </SectionContainer>
    )
  }

  if (faqs.length === 0) {
    return (
      <SectionContainer>
        <SectionHeader title="Preguntas Frecuentes" />
        <div className="text-center py-6">
          <p className="text-muted-foreground">No hay preguntas frecuentes disponibles.</p>
        </div>
      </SectionContainer>
    )
  }

  return (
    <SectionContainer>
      <SectionHeader title="Preguntas Frecuentes" />
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq) => (
          <Card key={faq._id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-primary">{faq.pregunta}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{faq.respuesta}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  )
}

