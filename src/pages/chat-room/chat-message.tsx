import { cn } from "@/lib/utils"
import { IMessage } from "@/store/chat-box-slice"
import { cva } from "class-variance-authority"
import React from "react"

const ChatMessage: React.FC<IMessage> = ({ text, from, isPending }) => {
  const className = from === "others" ? "justify-start" : "justify-end"
  const variant = from === "others" ? "received" : "sent"

  return (
    <>
      <div className={cn("flex", className)}>
        <InlineMessage isPending={isPending} variant={variant}>
          {text}
        </InlineMessage>
      </div>
    </>
  )
}

export default ChatMessage

const inlineMessageCVA = cva(
  "mx-2 my-1 rounded-full border px-6 py-2 w-fit inline-block relative",
  {
    variants: {
      variant: {
        sent: "bg-primary text-primary-foreground",
        received: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "sent",
    },
  },
)

const InlineMessage: React.FC<
  React.PropsWithChildren & {
    variant: "sent" | "received"
    isPending?: boolean
  }
> = ({ children, variant, isPending }) => {
  return (
    <span
      className={cn(
        inlineMessageCVA({
          variant,
        }),
        {
          "opacity-50": isPending,
        },
      )}
    >
      {children}
    </span>
  )
}
