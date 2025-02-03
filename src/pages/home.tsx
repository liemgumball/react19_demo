import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import * as React from "react"
import { Link } from "react-router"

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
      <ExampleCard
        to="/login"
        title="useActionState"
        description="Example of a login form for useActionState"
      />
      <ExampleCard
        to="/texting"
        title="useOptimistic"
        description="Example of a message box for useOptimistic"
      />
      <ExampleCard
        to="/comments"
        title="use"
        description="Example of a message box for use hook"
      />
    </div>
  )
}

interface ExampleCardProps extends React.PropsWithChildren {
  title: string
  description?: string
  to: string
}
const ExampleCard: React.FC<ExampleCardProps> = ({
  title,
  description,
  children,
  to,
}) => {
  return (
    <Link to={to}>
      <Card className="size-full">
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
