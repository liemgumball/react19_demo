import { ThemeProvider } from "@/components/them-provider"
import { Button } from "@/components/ui/button"
import { HomeIcon } from "lucide-react"
import { NavLink, Outlet } from "react-router"

export default function AppFrame() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <header className="p-4">
          <nav className="space-x-2">
            <Button asChild>
              <NavLink to="/">
                <HomeIcon />
              </NavLink>
            </Button>
          </nav>
        </header>
        <main className="container flex flex-grow flex-col">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  )
}
