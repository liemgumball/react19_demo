import { Button } from "@/components/ui/button.tsx"
import { LightbulbIcon, LightbulbOffIcon } from "lucide-react"
import { FC } from "react"

export const ToggleButton: FC<Props> = ({ toggle, value }) => {
  return (
    <Button
      onClick={toggle}
      variant={value ? "default" : "secondary"}
      size="lg"
      className="rounded-full"
    >
      {value ? <LightbulbIcon /> : <LightbulbOffIcon />}
    </Button>
  )
}

interface Props {
  toggle: () => void
  value: boolean
}
