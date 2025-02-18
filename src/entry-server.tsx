import { startTransition, StrictMode } from "react"

import { renderToString } from "react-dom/server"
import { createStaticRouter, StaticRouterProvider } from "react-router"

import { IncomingMessage, ServerResponse } from "http"

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

  startTransition(async () => {
    html = renderToString(
      <StrictMode>
        <StaticRouterProvider context={context} router={router} />
      </StrictMode>,
    )
  })

  return { html }
}

import.meta.hot?.accept?.()
