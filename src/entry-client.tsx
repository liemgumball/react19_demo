import { hydrateRoot } from "react-dom/client"

import { staticHandler } from "@/routes.ts"
import { StrictMode } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./index.css"

const rootElement = document.getElementById("root")

if (rootElement) {
  const router = createBrowserRouter(staticHandler.dataRoutes)

  hydrateRoot(
    rootElement,
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
