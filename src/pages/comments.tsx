"use client"
import { CommentsData } from "@/components/comments-data.tsx"
import { InlineLoader } from "@/components/fallback/inline-loader.tsx"
import { Button } from "@/components/ui/button"
import { fetchCommentsPromise } from "@/data/comments"
import { useToggle } from "@/hooks/use-toggle.ts"
import React, { Suspense } from "react"

export const TimeContext = React.createContext<Date | null>(null)

const Comments = () => {
  const [shouldFetch, toggleShouldFetch] = useToggle(false)
  const [useInLoop, toggleUseInLoop] = useToggle(false)

  const dataPromise = fetchCommentsPromise()

  return (
    <TimeContext value={new Date()}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <Button
          onClick={toggleShouldFetch}
          variant={shouldFetch ? "default" : "secondary"}
        >
          toggle should fetch
        </Button>
        <Button
          onClick={toggleUseInLoop}
          variant={useInLoop ? "default" : "secondary"}
        >
          use hook inside a loop
        </Button>
        <Suspense fallback={<InlineLoader />}>
          <CommentsData
            shouldFetch={shouldFetch}
            useInLoop={useInLoop}
            dataPromise={dataPromise}
            // dataPromise={Promise.reject("Not implemented")}
          />
        </Suspense>
      </div>
    </TimeContext>
  )
}

export default Comments
