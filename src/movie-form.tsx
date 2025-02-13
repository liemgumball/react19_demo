import { Button } from "@/components/ui/button.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import { useToast } from "@/hooks/use-toast.ts"
import { wait } from "@/utils/fake-fetch.ts"
import { useState, useTransition } from "react"

export const MovieForm = () => {
  const [movie, setMovie] = useState("")
  const [pending, startTransition] = useTransition()

  const { toast } = useToast()

  const handleSubmit = async () => {
    startTransition(async () => {
      await wait(1000)
      toast({ title: "Favorite movie", description: movie })
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <Label>Movie name:</Label>
        <Input value={movie} onChange={(e) => setMovie(e.target.value)} />
      </div>

      <Button isLoading={pending} onClick={handleSubmit} className="w-full">
        Submit
      </Button>
    </div>
  )
}
