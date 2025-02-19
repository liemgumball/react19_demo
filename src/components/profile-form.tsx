import { FormControl } from "@/components/form-control.tsx"
import { Button } from "@/components/ui/button.tsx"
import { updateGender } from "@/data/gender.ts"
import { useToast } from "@/hooks/use-toast.ts"
import { getGenderDescription } from "@/utils/form.ts"
import { useState, useTransition } from "react"

export const ProfileForm = () => {
  const { toast } = useToast()
  const [gender, setGender] = useState("")
  // const [pending, setPending] = useState(false)
  const [pending, startTransition] = useTransition()

  const handleSubmit = async () => {
    startTransition(async () => {
      const error = await updateGender(gender)

      if (error) {
        toast({ title: "Error", description: error, variant: "destructive" })
      } else {
        toast({
          title: "Success",
          description: getGenderDescription(gender),
        })
      }
    })
  }

  return (
    <div className="space-y-8">
      <FormControl
        label="Gender:"
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Enter your gender"
      />
      <Button isLoading={pending} onClick={handleSubmit} className="w-full">
        Submit
      </Button>
    </div>
  )
}
