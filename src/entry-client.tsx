import { hydrateRoot } from "react-dom/client"

import { StrictMode } from "react"
import App from "./app.tsx"
import "./index.css"

const rootElement = document.getElementById("root")

if (rootElement) {
  // createRoot(rootElement).render(<App />)
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
