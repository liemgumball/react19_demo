import { PokemonData } from "@/components/pokemon-data.tsx"
import { ToggleButton } from "@/components/toggle-button.tsx"
import { useToggle } from "@/hooks/use-toggle.ts"

const UseData = () => {
  const [should, toggle] = useToggle(false)

  const dataPromise = fetch("https://pokeapi.co/api/v2/pokemon/1").then((res) =>
    res.json(),
  )

  return (
    <div className="space-y-2 text-center">
      <ToggleButton value={should} toggle={toggle} />

      <p className="text-4xl">Toggle to get data with "use hook"</p>

      <PokemonData dataPromise={dataPromise} should={should} />
    </div>
  )
}

export default UseData
