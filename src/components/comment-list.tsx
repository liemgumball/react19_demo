import { fetchComments } from "@/data/comments"
import React from "react"

export const CommentList: React.FC<{ url: string }> = ({ url }) => {
  const comments = React.use(fetchComments(url))

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
