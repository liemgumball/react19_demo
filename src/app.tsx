import { Toaster } from "@/components/ui/toaster.tsx"
import routes from "@/routes.ts"
import store from "@/store"
import { ErrorBoundary } from "react-error-boundary"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter(routes)

function App() {
  return (
    <ErrorBoundary fallback={<p>Error fallback</p>}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster />
      </Provider>
    </ErrorBoundary>
  )
}

export default App
