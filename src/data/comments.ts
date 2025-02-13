import { wait } from "@/utils/fake-fetch"

interface Comment {
  id: number
  name: string
  body: string
}

export const fetchCommentsPromise = async (): Promise<Comment[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments/1",
  )

  await wait(1000)

  return await response.json()
}
