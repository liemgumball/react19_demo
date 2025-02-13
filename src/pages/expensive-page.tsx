import { ExpensiveComponent } from "@/components/expensive-component.tsx"
import { Input } from "@/components/ui/input.tsx"
import { ChangeEvent, useState } from "react"

const ExpensivePage = () => {
  const [input, setInput] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <Input value={input} onChange={handleChange} />

      <ExpensiveComponent input={input} />
    </div>
  )
}

export default ExpensivePage
