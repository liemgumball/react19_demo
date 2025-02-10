import { wait } from "@/utils/fake-fetch"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IMessage {
  id: string
  text: string
  from: "me" | "others"
  willRejected?: boolean
  isPending?: boolean
  _meta?: unknown
}

interface ChatBoxState {
  messages: IMessage[]
}

const initialState: ChatBoxState = {
  messages: [
    {
      id: "1",
      text: "Hello, World!",
      from: "me",
      _meta: {},
    },
    {
      id: "2",
      text: "Hello, Preact!",
      from: "others",
      _meta: {},
    },
    {
      id: "3",
      text: "Hello, Vite!",
      from: "me",
      _meta: {},
    },
  ],
}

export const addMessageAsync = createAsyncThunk(
  "chatBox/addMessageAsync",
  async (message: Omit<IMessage, "id">) => {
    await wait(1000)

    if (message.willRejected) {
      return Promise.reject(message)
    }

    return Promise.resolve(message)
  },
)

const chatBoxSlice = createSlice({
  name: "chat box",
  initialState,
  reducers: {
    removeMessage: (state, action: PayloadAction<string>) => {
      state.messages = state.messages.filter(
        (message) => message.id !== action.payload,
      )
    },
    clearMessages: (state) => {
      state.messages = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        addMessageAsync.fulfilled,
        (state, action: PayloadAction<Omit<IMessage, "id">>) => {
          state.messages.push({ ...action.payload, id: crypto.randomUUID() })
        },
      )
      .addCase(addMessageAsync.rejected, (_, action) => {
        console.error("Failed to add message:", action.error.message)
      })
  },
})

export const { removeMessage, clearMessages } = chatBoxSlice.actions

export default chatBoxSlice.reducer
