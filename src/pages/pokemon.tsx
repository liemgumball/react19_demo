"use client"
import { InlineLoader } from "@/components/fallback/inline-loader.tsx"
import { PokemonData } from "@/components/pokemon-data.tsx"
import { Button } from "@/components/ui/button"
import { fetchPokemon } from "@/data/pokemons.ts"
import { useToggle } from "@/hooks/use-toggle.ts"
import React, { Suspense } from "react"

export const TimeContext = React.createContext<Date | null>(null)

const Pokemon = () => {
  const [shouldFetch, toggleShouldFetch] = useToggle(false)
  const [useInLoop, toggleUseInLoop] = useToggle(false)

  const dataPromises = Array.from({ length: 12 }, (_, i) => fetchPokemon(i + 1))

  return (
    <TimeContext value={new Date()}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <Button
          onClick={toggleShouldFetch}
          variant={shouldFetch ? "default" : "secondary"}
        >
          toggle should fetch
        </Button>
        <Button
          onClick={toggleUseInLoop}
          variant={useInLoop ? "default" : "secondary"}
        >
          use hook inside a loop
        </Button>
        <Suspense fallback={<InlineLoader />}>
          <PokemonData
            shouldFetch={shouldFetch}
            useInLoop={useInLoop}
            dataPromise={dataPromises}
            // dataPromise={Promise.reject("Not implemented")}
          />
        </Suspense>
      </div>
    </TimeContext>
  )
}

export default Pokemon
