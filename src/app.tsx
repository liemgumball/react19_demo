import { RouterProvider } from "react-router"

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
    </ErrorBoundary>
  )
}

export default App
