import { Button } from "@/components/ui/button.tsx"
import { NavLink } from "react-router"
import { HomeIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "@/components/them-provider.tsx"

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="p-4">
      <nav className="flex justify-between">
        <Button asChild>
          <NavLink to="/">
            <HomeIcon />
          </NavLink>
        </Button>
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </nav>
    </header>
  )
}

export default Header
