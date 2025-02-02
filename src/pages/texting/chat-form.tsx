import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useAppDispatch } from "@/hooks"
import { useLog } from "@/hooks/use-log"
import { cn } from "@/lib/utils"
import { addMessageAsync, IMessage } from "@/store/chat-box-slice"
import { SendIcon } from "lucide-react"
import React from "react"

interface Props {
  className?: string
  optimisticUpdate?: React.Dispatch<React.SetStateAction<IMessage[]>>
}

export const ChatForm: React.FC<Props> = ({ className, optimisticUpdate }) => {
  const { log } = useLog()
  const dispatch = useAppDispatch()

  const [error, action] = React.useActionState(
    async (_: string | null, formData: FormData): Promise<string | null> => {
      const message = formData.get("message") as string
      const willRejected = formData.get("willRejected") === "on"
      const from = Math.random() > 0.5 ? "me" : "others"

      log({ data: { message, willRejected, from } })

      optimisticUpdate?.((prev: IMessage[]) => [
        ...prev,
        { id: "temp", text: message, from, isPending: true },
      ])

      await dispatch(addMessageAsync({ text: message, willRejected, from }))

      if (willRejected) {
        return "Message rejected!"
      }

      return null
    },
    null,
  )

  return (
    <form className={cn(className)} action={action}>
      <div className="relative mb-2 px-2">
        <p
          className={`${error ? "" : "hidden"} absolute -top-1 mx-1 -translate-y-full text-sm text-destructive`}
        >
          {error}
        </p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Checkbox
                name="willRejected"
                className="absolute left-3 top-1/2 -translate-y-1/2"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Decide if this message will be rejected or not.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Input type="text" className="px-6 py-2" name="message" />
        <Button
          type="submit"
          className="absolute bottom-1/2 right-4 translate-y-1/2 rounded-full"
          variant="ghost"
          size="icon"
        >
          <SendIcon />
        </Button>
      </div>
    </form>
  )
}
