import { useDeferredValue } from "react"

const length = 65000

export const ExpensiveComponent = ({ input }: Props) => {
  const newInput = useDeferredValue(input)

  return (
    <ul className="space-y-4">
      {Array.from({ length }).map((_, index) => (
        <li key={index}>{newInput}</li>
      ))}
    </ul>
  )
}

type Props = {
  input: string
}
