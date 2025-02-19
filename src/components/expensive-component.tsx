const length = 65000

export const ExpensiveComponent = ({ input }: Props) => {
  return (
    <ul className="space-y-4">
      {Array.from({ length }).map((_, index) => (
        <li key={index}>{input}</li>
      ))}
    </ul>
  )
}

type Props = {
  input: string
}
