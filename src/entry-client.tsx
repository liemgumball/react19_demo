import { hydrateRoot } from "react-dom/client"

import { Toaster } from "@/components/ui/toaster.tsx"
import { staticHandler } from "@/routes.ts"
import store from "@/store"
import { StrictMode } from "react"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router"
import "./index.css"

const rootElement = document.getElementById("root")

if (rootElement) {
  const router = createBrowserRouter(staticHandler.dataRoutes)

  hydrateRoot(
    rootElement,
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </StrictMode>,
  )
}
