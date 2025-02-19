import { PokemonCard } from "@/components/pokemon-card.tsx"
import { Pokemon } from "@/data/pokemons.ts"
import { FC, use } from "react"

export const OtherPokemonData: FC<Props> = ({ dataPromise, should }) => {
  const list: Pokemon[] = []

  if (!should) {
    return null
  }

  for (let i = 0; i < 12; i++) {
    const data = use(dataPromise[i]) as Pokemon
    list.push(data)
  }

  return (
    <>
      <h2>Data</h2>
      <p>Count: {list.length}</p>
      <div className="m-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((data) => (
          <PokemonCard key={data.id} {...data} />
        ))}
      </div>
    </>
  )
}

interface Props {
  dataPromise: Promise<unknown>[]
  should?: boolean
}
