import React from "react"

interface Comment {
  id: number
  name: string
  body: string
}

export const CommentList: React.FC = () => {
  const comments = React.use(
    fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
      response.json(),
    ),
  ) as Comment[]

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
