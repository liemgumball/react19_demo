import { RouterProvider } from "react-router"

import { Toaster } from "@/components/ui/toaster.tsx"
import { ErrorBoundary } from "react-error-boundary"
import { Provider } from "react-redux"
import router from "./routes"
import store from "./store"

function App() {
  return (
    <ErrorBoundary fallback={<p>Error fallback</p>}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <Toaster />
    </ErrorBoundary>
  )
}

export default App
