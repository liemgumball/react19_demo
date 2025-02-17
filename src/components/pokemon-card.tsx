import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Pokemon } from "@/data/pokemons.ts"

export const PokemonCard: React.FC<Pokemon> = ({ name, sprites, types }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={sprites.front_default} alt={name} />
      </CardContent>
      <CardFooter>
        <CardDescription>
          {types.map((type) => type.type.name).join(", ")}
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
