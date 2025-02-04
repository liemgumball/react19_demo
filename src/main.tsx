import { createRoot } from "react-dom/client"

import { Toaster } from "@/components/ui/toaster.tsx"
import App from "./app.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <>
    <App />
    <Toaster />
  </>,
  // </StrictMode>,
)
