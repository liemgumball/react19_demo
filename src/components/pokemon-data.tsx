// hydrate component
import { PokemonCard } from "@/components/pokemon-card.tsx"
import { Pokemon } from "@/data/pokemons.ts"
import { FC, use } from "react"

export const PokemonData: FC<Props> = ({ dataPromise, should }) => {
  if (!should) {
    return null
  }

  const data = use(dataPromise) as Pokemon

  return (
    <>
      <h2>Data</h2>
      <PokemonCard {...data} />
    </>
  )
}

interface Props {
  dataPromise: Promise<unknown>
  should?: boolean
}
