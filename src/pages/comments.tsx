import React, { Suspense, use } from "react"

const dataPromise = fetch(
  "https://jsonplaceholder.typicode.com/comments/1",
).then((response) => response.json())

const TimeContext = React.createContext<Date | null>(null)

const Comments = () => {
  const now = new Date()

  const shouldFetch = Math.random() > 0.5

  return (
    <TimeContext value={now}>
      <Suspense
        fallback={<p className="text-center text-2xl font-bold">Loading...</p>}
      >
        <Data
          shouldFetch={shouldFetch}
          // dataPromise={}
          // dataPromise={Promise.reject("Not implemented")}
        />
      </Suspense>
    </TimeContext>
  )
}

// run on the server
const Data: React.FC<{
  // dataPromise: Promise<unknown>
  shouldFetch?: boolean
}> = ({ shouldFetch }) => {
  const now = React.use(TimeContext)

  if (!shouldFetch) {
    return (
      <p className="text-center text-sm text-muted-foreground">
        Not thing to show at {now?.toISOString()}
      </p>
    )
  }
  const list: unknown[] = []

  for (let i = 0; i < 10; i++) {
    list.push(use(dataPromise))
  }

  // const data = use(dataPromise)

  return (
    <div>
      <h1>Data</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <h2>Comments</h2>
      <p>Count: {list.length}</p>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  )
}

export default Comments
