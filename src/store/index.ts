import { configureStore } from "@reduxjs/toolkit"

import chatBoxReducer from "./chat-box-slice"

const rootReducer = {
  chatBox: chatBoxReducer,
}

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
