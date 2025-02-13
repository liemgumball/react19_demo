import { useState } from "react"

export function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, set] = useState(initialValue)

  const toggle = () => set(!value)

  return [value, toggle]
}
