import { createStaticHandler, RouteObject } from "react-router"

import Hydrating from "@/components/fallback/hydrating.tsx"
import AppFrame from "@/pages/app-frame.tsx"
import Home from "@/pages/home"
import NotFound from "@/pages/not-found.tsx"
import Profile from "@/pages/profile.tsx"
import Resource from "@/pages/resource.tsx"
import { lazy } from "react"

const routes: RouteObject[] = [
  {
    Component: AppFrame,
    HydrateFallback: Hydrating,
    children: [
      { index: true, Component: Home },
      { path: "*", Component: NotFound },
      { path: "profile", Component: Profile },
      {
        path: "expensive",
        Component: lazy(() => import("@/pages/expensive-page")),
      },
      {
        path: "use-hook",
        Component: lazy(() => import("@/pages/use-hook.tsx")),
        children: [
          {
            path: "use-context",
            Component: lazy(() => import("@/pages/use-context.tsx")),
          },
          {
            path: "use-data",
            Component: lazy(() => import("@/pages/use-data.tsx")),
          },
          {
            path: "use-in-loop",
            Component: lazy(() => import("@/pages/use-in-loop.tsx")),
          },
        ],
      },
      {
        path: "chat-room",
        Component: lazy(() => import("@/pages/chat-room")),
      },
      {
        path: "resources",
        Component: Resource,
        HydrateFallback: Hydrating,
      },
    ],
  },
]

export const staticHandler = createStaticHandler(routes)
