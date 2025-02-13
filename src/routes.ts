import { RouteObject } from "react-router"

import Hydrating from "@/components/fallback/hydrating.tsx"
import AppFrame from "@/pages/app-frame.tsx"
import Home from "@/pages/home"
import NotFound from "@/pages/not-found.tsx"
import { lazy } from "react"

const routes: RouteObject[] = [
  {
    Component: AppFrame,
    HydrateFallback: Hydrating,
    children: [
      { index: true, Component: Home },
      { path: "*", Component: NotFound },
      { path: "movie", Component: lazy(() => import("@/pages/movie")) },
      {
        path: "expensive",
        Component: lazy(() => import("@/pages/expensive-page")),
      },
      { path: "login", Component: lazy(() => import("@/pages/login")) },
      {
        path: "comments",
        Component: lazy(() => import("@/pages/comments")),
      },
      {
        path: "chat-room",
        Component: lazy(() => import("@/pages/chat-room")),
      },
    ],
  },
]

export default routes
