import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils.ts"
import * as React from "react"
import { Link } from "react-router"

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-4">
      <ExampleCard
        to="/profile"
        title="Actions"
        description="Example of a profile form for useActionState"
      />
      <ExampleCard
        to="/chat-room"
        title="useOptimistic"
        description="Example of a message box for useOptimistic"
      />
      <ExampleCard
        to="/pokemons"
        title="use"
        description="Example of a message box for use hook"
      />
      <ExampleCard
        to="/resources"
        title="Loading resources"
        description="Example of a message box for loading resources"
      />
      <div className="h-[900px]" />
      <ExampleCard
        to="/expensive-page"
        title="A very expensive component"
        className="col-span-1 border-destructive text-destructive shadow-2xl shadow-destructive md:col-span-2"
      />
    </div>
  )
}

const ExampleCard: React.FC<ExampleCardProps> = ({
  title,
  description,
  children,
  to,
  className,
}) => {
  return (
    <Card className={cn("max-h-40 min-w-fit", className)}>
      <Link to={to}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardFooter>
      </Link>
    </Card>
  )
}

interface ExampleCardProps extends React.PropsWithChildren {
  title: string
  description?: string
  to: string
  className?: string
}
