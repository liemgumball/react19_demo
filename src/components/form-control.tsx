import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import { InputHTMLAttributes } from "react"

export const FormControl = (props: Props) => {
  const { name, error, label, ...rest } = props

  return (
    <div>
      <Label htmlFor={name} className="mb-1">
        {label}
      </Label>
      <Input id={name} name={name} {...rest} />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string | null
}
