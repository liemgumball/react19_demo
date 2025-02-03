import { CommentList } from "@/components/comment-list"
import { Suspense } from "react"

const Comments = () => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <CommentList />
    </Suspense>
  )
}

export default Comments
