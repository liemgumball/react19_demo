interface Comment {
  id: number
  name: string
  body: string
}

export const fetchComments = async (url: string): Promise<Comment[]> => {
  const response = await fetch(url)

  return response.json()
}
