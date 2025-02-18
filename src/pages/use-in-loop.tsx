import { OtherPokemonData } from "@/components/other-pokemon-data.tsx"
import { ToggleButton } from "@/components/toggle-button.tsx"
import { useToggle } from "@/hooks/use-toggle.ts"

const UseInLoop = () => {
  const [should, toggle] = useToggle(false)

  const dataPromise = Array.from({ length: 12 }, (_, idx) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${idx + 1}`).then((res) =>
      res.json(),
    ),
  )

  return (
    <div className="space-y-2 text-center">
      <ToggleButton value={should} toggle={toggle} />
      <p className="text-4xl">If this "use hook" can run inside a loop?</p>

      <OtherPokemonData dataPromise={dataPromise} should={should} />
    </div>
  )
}

export default UseInLoop
