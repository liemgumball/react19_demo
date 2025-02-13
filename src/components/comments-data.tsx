// hydrate component
import { ScrollArea } from "@/components/ui/scroll-area.tsx"
import { TimeContext } from "@/pages/comments.tsx"
import { use } from "react"

export const CommentsData: React.FC<{
  dataPromise: Promise<unknown>
  shouldFetch?: boolean
  useInLoop?: boolean
}> = ({ shouldFetch, dataPromise, useInLoop }) => {
  if (!shouldFetch) {
    const now = use(TimeContext)
    
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
