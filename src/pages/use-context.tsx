import { ToggleButton } from "@/components/toggle-button.tsx"
import { useToggle } from "@/hooks/use-toggle.ts"
import { TimeContext } from "@/pages/use-hook.tsx"
import { use } from "react"

const UseContext = () => {
  const [should, toggle] = useToggle(false)
  let now: Date | null = null

  if (should) {
    now = use(TimeContext)
  }

  return (
    <div className="space-y-2 text-center">
      <ToggleButton value={should} toggle={toggle} />

      <p className="text-4xl">Toggle to get context value with "use hook"</p>

      {now && <p>Now is {now?.toLocaleTimeString()}</p>}
    </div>
  )
}

export default UseContext
