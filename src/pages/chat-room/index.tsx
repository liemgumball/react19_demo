import { useAppDispatch, useAppSelector } from "@/hooks.ts"
import { addMessageAsync, IMessage } from "@/store/chat-box-slice.ts"
import { ChatBox } from "./chat-box"

export default function ChatRoom() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.chatBox.messages)

  const sendMessage = async (message: IMessage) =>
    dispatch(addMessageAsync(message))

  return <ChatBox data={data} sendMessage={sendMessage} />
}
