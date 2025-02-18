import { FormControl } from "@/components/form-control.tsx"
import { Button } from "@/components/ui/button.tsx"
import { updateGender } from "@/data/gender.ts"
import { toast } from "@/hooks/use-toast.ts"
import { getGenderDescription } from "@/utils/form.ts"
import { useActionState, useRef } from "react"

export const NewProfileForm = () => {
  const ref = useRef(null)
  const [error, action] = useActionState(formAction, null)

  return (
    <form className="space-y-8" action={action} ref={ref}>
      <FormControl
        type="text"
        name="gender"
        error={error}
        label="Gender:"
        placeholder="Enter your gender"
      />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  )
}

async function formAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const gender = formData.get("gender") as string

  const error = await updateGender(gender)

  if (error) {
    toast({ title: "Error", description: error, variant: "destructive" })
    return error
  }

  toast({ title: "Hi!", description: getGenderDescription(gender) })
  return null
}

type FormState = string | null
