import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { MovieForm } from "@/movie-form.tsx"
import { Link } from "react-router"

const Movie = () => {
  return (
    <div className="my-16 flex items-center justify-center">
      <Card className="mx-auto p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="font-bold">Favorite movie</CardTitle>
        </CardHeader>
        <CardContent>
          <MovieForm />
        </CardContent>
      </Card>

      <Link to="/expensive">
        <Card className="p-8 shadow-2xl shadow-destructive">
          <CardHeader>
            <CardTitle className="font-bold uppercase text-destructive">
              very expensive component
            </CardTitle>
          </CardHeader>
        </Card>
      </Link>
    </div>
  )
}

export default Movie
