import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { cn } from "@/lib/utils.ts"
import * as React from "react"
import { ReactNode } from "react"
import { Link } from "react-router"

export const ExampleCard: React.FC<ExampleCardProps> = ({
  title,
  description,
  children,
  to,
  className,
}) => {
  return (
    <Link to={to} className={cn("block h-full", className)}>
      <Card className="h-full max-h-40 min-w-fit border-inherit bg-inherit text-center text-inherit shadow-inherit">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}

interface ExampleCardProps extends React.PropsWithChildren {
  title: string | ReactNode
  description?: string
  to: string
  className?: string
}
