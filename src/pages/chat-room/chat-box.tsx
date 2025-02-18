import { ScrollArea } from "@/components/ui/scroll-area"
import { IMessage } from "@/store/chat-box-slice.ts"
import { useOptimistic } from "react"
import { ChatForm } from "./chat-form"
import ChatMessage from "./chat-message"

export function ChatBox({ data, sendMessage }: Props) {
  const [messages, setMessages] = useOptimistic<OptimisticMessage[]>(data)

  const optimisticUpdate = (message: IMessage) =>
    setMessages((prev) => [...prev, { ...message, isPending: true }])

  return (
    <div className="my-10 flex flex-grow flex-col justify-between rounded-lg border-2 p-6 shadow-lg">
      <ScrollArea>
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </ScrollArea>
      <ChatForm
        className="bottom-0 mt-4 w-full"
        onSubmit={async (message) => {
          // optimisticUpdate(message)

          await sendMessage(message)
        }}
        optimisticUpdate={optimisticUpdate}
      />
    </div>
  )
}

type Props = {
  data: IMessage[]
  sendMessage: (message: IMessage) => Promise<unknown>
}

type OptimisticMessage = IMessage & {
  isPending?: boolean
}
