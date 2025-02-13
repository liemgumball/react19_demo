function createFetchRequest(req, res) {
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

  const init = {
    method: req.method,
    headers,
    signal: controller.signal,
  }

  if (req.method !== "GET" && req.method !== "HEAD" && req.body) {
    init.body = req.body
  }

  return new Request(url.href, init)
}

export default createFetchRequest
