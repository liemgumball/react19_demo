// hydrate component
import { PokemonCard } from "@/components/pokemon-card.tsx"
import { ScrollArea } from "@/components/ui/scroll-area.tsx"
import { Pokemon } from "@/data/pokemons.ts"
import { TimeContext } from "@/pages/pokemon.tsx"
import { use } from "react"

export const PokemonData: React.FC<{
  dataPromise: Promise<unknown>[]
  shouldFetch?: boolean
  useInLoop?: boolean
}> = ({ shouldFetch, dataPromise, useInLoop }) => {
  if (!shouldFetch) {
    const now = use(TimeContext)

    return (
      <p className="my-2 text-center text-lg text-accent-foreground">
        Not thing to show at {now?.toLocaleString()}
      </p>
    )
  }

  const list: unknown[] = []

  if (useInLoop) {
    for (let i = 0; i < 12; i++) {
      list.push(use(dataPromise[i]))
    }
  } else {
    list.push(use(dataPromise[0]))
  }

  return (
    <ScrollArea className="max-w-max">
      <h1>Data</h1>
      <p>Count: {list.length}</p>
      <div className="m-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((data) => {
          const { id, ...rest } = data as Pokemon

          return <PokemonCard key={id} id={id} {...rest} />
        })}
      </div>
    </ScrollArea>
  )
}
