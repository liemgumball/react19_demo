"use client"

import { ThemeProvider } from "@/components/them-provider"
import { Toaster } from "@/components/ui/toaster.tsx"
import Header from "@/pages/header.tsx"
import store from "@/store"
import { Provider } from "react-redux"
import { Outlet } from "react-router"

export default function AppFrame() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="container flex flex-grow flex-col">
            <Outlet />
          </main>
        </div>
        <Toaster />
      </ThemeProvider>
    </Provider>
  )
}
