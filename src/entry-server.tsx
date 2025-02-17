import { startTransition, StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { createStaticRouter, StaticRouterProvider } from "react-router"

import { Toaster } from "@/components/ui/toaster.tsx"
import store from "@/store"
import { IncomingMessage, ServerResponse } from "http"
import { Provider } from "react-redux"

import { staticHandler } from "@/routes.ts"
// @ts-expect-error no type
import createFetchRequest from "./request"

export async function render(
  _url: string,
  req: IncomingMessage,
  res: ServerResponse,
) {
  const fetchRequest = createFetchRequest(req, res)
  const context = await staticHandler.query(fetchRequest)

  if (context instanceof Response) {
    throw context
  }

  const router = createStaticRouter(staticHandler.dataRoutes, context)

  let html

  startTransition(() => {
    html = renderToString(
      <StrictMode>
        <Provider store={store}>
          <StaticRouterProvider context={context} router={router} />
          <Toaster />
        </Provider>
      </StrictMode>,
    )
  })
  return { html }
}
