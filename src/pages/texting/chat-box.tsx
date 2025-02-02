import { ScrollArea } from "@/components/ui/scroll-area"
import { useAppSelector } from "@/hooks"
import React from "react"
import { ChatForm } from "./chat-form"
import ChatMessage from "./chat-message"

export function ChatBox() {
  const messages = useAppSelector((state) => state.chatBox.messages)

  const [optimisticMessages, setOptimisticMessages] =
    React.useOptimistic(messages)

  return (
    <div className="flex h-full flex-col justify-between rounded border-2 pt-2">
      <ScrollArea>
        {optimisticMessages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </ScrollArea>
      <ChatForm
        className="bottom-0 mt-4 w-full"
        optimisticUpdate={setOptimisticMessages}
      />
    </div>
  )
}
