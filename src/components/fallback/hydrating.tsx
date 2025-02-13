import { Loader2Icon } from "lucide-react"

const Hydrating = () => {
  return (
    <div className="fixed z-[100] flex h-screen w-screen items-center justify-center">
      <Loader2Icon className="animate-spin" />
    </div>
  )
}

export default Hydrating
