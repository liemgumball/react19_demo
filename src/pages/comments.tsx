import { useTheme } from "@/components/them-provider"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { fetchCommentsPromise } from "@/data/comments"
import { Loader2Icon, MoonIcon, SunIcon } from "lucide-react"
import React, { Suspense, use, useState } from "react"

const TimeContext = React.createContext<Date | null>(null)

const Comments = () => {
  const [shouldFetch, setShouldFetch] = useState(false)
  const [useInLoop, setUseInLoop] = useState(false)
  const { theme, setTheme } = useTheme()

  const now = new Date()

  const dataPromise = fetchCommentsPromise()

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        variant={shouldFetch ? "default" : "secondary"}
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Button
        onClick={() => setShouldFetch((prev) => !prev)}
        variant={shouldFetch ? "default" : "secondary"}
      >
        toggle should fetch
      </Button>
      <Button
        onClick={() => setUseInLoop((prev) => !prev)}
        variant={useInLoop ? "default" : "secondary"}
      >
        use hook inside a loop
      </Button>
      <TimeContext value={now}>
        <Suspense
          fallback={
            <p className="text-center text-2xl font-bold text-muted-foreground">
              <Loader2Icon size={32} className="animate-spin font-bold" />
            </p>
          }
        >
          <Data
            shouldFetch={shouldFetch}
            useInLoop={useInLoop}
            dataPromise={dataPromise}
            // dataPromise={Promise.reject("Not implemented")}
          />
        </Suspense>
      </TimeContext>
    </div>
  )
}

// hydrate component
const Data: React.FC<{
  dataPromise: Promise<unknown>
  shouldFetch?: boolean
  useInLoop?: boolean
}> = ({ shouldFetch, dataPromise, useInLoop }) => {
  const now = React.use(TimeContext)

  if (!shouldFetch) {
    return (
      <p className="my-2 text-center text-lg text-accent-foreground">
        Not thing to show at {now?.toLocaleString()}
      </p>
    )
  }

  const list: unknown[] = []

  if (useInLoop) {
    for (let i = 0; i < 10; i++) {
      list.push(use(dataPromise))
    }
  } else {
    list.push(use(dataPromise))
  }

  return (
    <ScrollArea className="max-w-max">
      <h1>Data</h1>
      <h2>Comments</h2>
      <p>Count: {list.length}</p>
      <pre className="text-wrap">{JSON.stringify(list, null, 2)}</pre>
    </ScrollArea>
  )
}

export default Comments
