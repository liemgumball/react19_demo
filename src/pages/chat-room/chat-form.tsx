import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input.tsx"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "@/hooks/use-toast.ts"
import { cn } from "@/lib/utils"
import { IMessage } from "@/store/chat-box-slice"
import { SendIcon } from "lucide-react"
import React from "react"

interface Props {
  className?: string
  onSubmit: (message: IMessage) => Promise<string | null>
}

export const ChatForm: React.FC<Props> = ({ className, onSubmit }) => {
  const [error, action, isPending] = React.useActionState(
    createFormAction(onSubmit),
    null,
  )

  return (
    <form className={cn(className)} action={action}>
      <p className="mx-4 mb-2 text-sm text-destructive">{error}</p>
      <div className="relative mb-2 px-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Checkbox
                name="willRejected"
                className="absolute left-6 top-1/2 -translate-y-1/2"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Decide if this message will be rejected or not.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Input
          type="text"
          className="px-10 py-2"
          name="message"
          placeholder="Enter your message"
        />
        <Button
          type="submit"
          className="absolute bottom-1/2 right-4 translate-y-1/2 rounded-full"
          variant="ghost"
          size="icon"
          isLoading={isPending}
        >
          <SendIcon />
        </Button>
      </div>
    </form>
  )
}

function createFormAction(
  onSubmit: (message: IMessage) => Promise<string | null>,
) {
  return async function (_prev: string | null, formData: FormData) {
    const id = crypto.randomUUID()
    const text = (formData.get("message") as string).trim()
    const willRejected = formData.get("willRejected") === "on"
    const from = Math.random() > 0.5 ? "me" : "others"

    const error = await onSubmit({ text, willRejected, from, id })

    if (error) {
      toast({ title: "Failed to send message!", variant: "destructive" })
    }

    return error
  }
}
