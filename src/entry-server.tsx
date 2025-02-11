import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import {
  createStaticHandler,
  createStaticRouter,
  StaticHandlerContext,
  StaticRouterProvider,
} from "react-router"

import routes from "@/routes.ts"
import { IncomingMessage, ServerResponse } from "http"

export async function render(_url: string, req: any, res: any) {
  const { query, dataRoutes } = createStaticHandler(routes)
  const fetchRequest = createFetchRequest(req, res)
  const context = await query(fetchRequest)

  const router = createStaticRouter(dataRoutes, context as StaticHandlerContext)

  const html = renderToString(
    <StrictMode>
      <StaticRouterProvider
        context={context as StaticHandlerContext}
        router={router}
      />
    </StrictMode>,
  )
  return { html }
}

function createFetchRequest(
  req: IncomingMessage & { method: string; body?: any; originalUrl?: string },
  res: ServerResponse,
): Request {
  const origin = `${req.headers["x-forwarded-proto"] || "http"}://${req.headers.host}`
  const url = new URL(req.originalUrl || req.url || "", origin)

  const controller = new AbortController()
  res.on("close", () => controller.abort())

  const headers = new Headers()

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          if (typeof value === "string") {
            headers.append(key, value)
          }
        }
      } else if (typeof values === "string") {
        headers.set(key, values)
      }
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  }

  if (req.method !== "GET" && req.method !== "HEAD" && req.body) {
    init.body = req.body
  }

  return new Request(url.href, init)
}
