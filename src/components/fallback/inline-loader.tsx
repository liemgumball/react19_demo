import { Loader2Icon } from "lucide-react"

export const InlineLoader = () => {
  return (
    <p className="text-center text-2xl font-bold text-muted-foreground">
      <Loader2Icon size={32} className="animate-spin font-bold" />
    </p>
  )
}
