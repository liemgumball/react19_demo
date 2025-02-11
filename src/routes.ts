import { RouteObject } from "react-router"

import AppFrame from "@/pages/app-frame.tsx"
import Home from "@/pages/home"
import React, { lazy } from "react"
import { ErrorBoundary } from "react-error-boundary"

// const router = createStaticRouter([
//   {
//     Component: AppFrame,
//     children: [
//       { index: true, Component: Home },
//       // { path: "login", Component: lazy(() => import("@/pages/login")) },
//       // { path: "comments", Component: lazy(() => import("@/pages/comments")) },
//       // {
//       //   path: "chat-room",
//       //   Component: lazy(() => import("@/pages/chat-room")),
//       // },
//     ],
//   },
// ])

const routes: RouteObject[] = [
  {
    Component: AppFrame,
    ErrorBoundary: ErrorBoundary as unknown as React.ComponentType,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: lazy(() => import("@/pages/login")) },
      { path: "comments", Component: lazy(() => import("@/pages/comments")) },
      {
        path: "chat-room",
        Component: lazy(() => import("@/pages/chat-room")),
      },
    ],
  },
]

export default routes
