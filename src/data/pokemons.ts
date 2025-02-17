import { wait } from "@/utils/fake-fetch"

export interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: {
    type: {
      name: string
    }
  }[]
}

export const fetchPokemon = async (id: number): Promise<Pokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  await wait(1000)

  return await response.json()
}
