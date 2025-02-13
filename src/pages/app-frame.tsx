"use client"

import { ThemeProvider } from "@/components/them-provider"
import { Outlet } from "react-router"
import Header from "@/pages/header.tsx"

export default function AppFrame() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="container flex flex-grow flex-col">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  )
}
