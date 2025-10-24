import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Card className="hover-elevate">
      <CardHeader>
        <CardTitle className="text-pretty">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
