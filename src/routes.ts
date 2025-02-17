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
        path: "pokemons",
        Component: lazy(() => import("@/pages/pokemon.tsx")),
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
