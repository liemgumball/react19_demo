import { startTransition, StrictMode } from "react"
import { renderToString } from "react-dom/server"
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router"

import { Toaster } from "@/components/ui/toaster.tsx"
import routes from "@/routes.ts"
import store from "@/store"
import { IncomingMessage, ServerResponse } from "http"
import { Provider } from "react-redux"

// @ts-expect-error no type
import createFetchRequest from "./request"

export async function render(
  _url: string,
  req: IncomingMessage,
  res: ServerResponse,
) {
  const { query, dataRoutes } = createStaticHandler(routes)
  const fetchRequest = createFetchRequest(req, res)
  const context = await query(fetchRequest)

  if (context instanceof Response) {
    throw context
  }

  const router = createStaticRouter(dataRoutes, context)

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
