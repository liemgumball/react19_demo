import { Logger } from "@/components/logger"
import { ThemeProvider } from "@/components/them-provider"
import { Button } from "@/components/ui/button"
import { HomeIcon } from "lucide-react"
import { NavLink, Outlet } from "react-router"

export default function AppFrame() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen">
        <aside className="w-fit p-4">
          <nav className="space-y-2">
            <Button asChild>
              <NavLink to="/">
                <HomeIcon />
              </NavLink>
            </Button>
          </nav>
        </aside>
        <main className="container">
          <Outlet />
        </main>
        <div className="w-4/12">
          <Logger />
        </div>
      </div>
    </ThemeProvider>
  )
}
