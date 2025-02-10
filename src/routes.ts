import { lazy } from "react"
import { createBrowserRouter } from "react-router"
import AppFrame from "./pages/app-frame"

const router = createBrowserRouter([
  {
    Component: AppFrame,
    children: [
      { index: true, Component: lazy(() => import("@/pages/home")) },
      { path: "login", Component: lazy(() => import("@/pages/login")) },
      { path: "comments", Component: lazy(() => import("@/pages/comments")) },
      {
        path: "chat-room",
        Component: lazy(() => import("@/pages/chat-room")),
      },
    ],
  },
])

export default router
