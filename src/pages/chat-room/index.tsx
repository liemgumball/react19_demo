import { useAppDispatch, useAppSelector } from "@/hooks.ts"
import { addMessageAsync, IMessage } from "@/store/chat-box-slice.ts"
import { ChatBox } from "./chat-box"

export default function ChatRoom() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.chatBox.messages)

  const sendMessage = async (message: IMessage) => {
    const result = await dispatch(addMessageAsync(message))

    if (addMessageAsync.rejected.match(result)) {
      return "Failed to send message"
    }

    if (addMessageAsync.fulfilled.match(result)) {
      return null
    }

    throw new Error("Unknown add message result")
  }

  return <ChatBox data={data} sendMessage={sendMessage} />
}
