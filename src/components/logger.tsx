import { LoggerContext, LoggerLog, useLog } from "@/hooks/use-log"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { RotateCcwIcon } from "lucide-react"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"

export function Logger() {
  const { logs, reset } = useLog()

  return (
    <LoggerContext value={{ logs }}>
      <ScrollArea className="h-screen px-2">
        <Button
          onClick={reset}
          variant="outline"
          className="fixed right-0 top-0 m-4 rounded-full"
          size="icon"
        >
          <RotateCcwIcon />
        </Button>
        {logs.map((props) => (
          <Log key={props.id} {...props} />
        ))}
      </ScrollArea>
    </LoggerContext>
  )
}

type CVAConfig = { variant: Record<Required<LoggerLog>["variant"], string> }

const logVariants = cva<CVAConfig>(
  "flex gap-2 p-2 text-sm overflow-auto my-1",
  {
    variants: {
      variant: {
        info: "bg-primary text-primary-foreground",
        error: "bg-muted text-destructive",
        warn: "text-secondary",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
)

function Log({ data, variant }: LoggerLog) {
  return (
    <pre className={cn(logVariants({ variant }))}>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}
