import Link from "next/link";
import Toolbar from "#/ui/toolbar";
import { Poster, Posters } from "#/ui/posters";
import type { Movie } from "#/app/api/movies/movie";
import { getMovies } from "#/app/api/movies/getMovies";

const PosterItem = ({ movie }: { movie: Movie }) => {
  return (
    <Link
      href={`/posters/${movie.id}`}
      title={`${movie.title} (${movie.release_date.substring(0, 4)})`}
    >
      <Poster
        file_path={movie.poster_path}
        alt={`${movie.title} (${movie.release_date.substring(0, 4)})`}
      />
    </Link>
  );
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className="w-full">
      <Toolbar />
      <Posters>
        {movies.map((movie) => {
          return <PosterItem key={movie.id} movie={movie} />;
        })}
      </Posters>
    </div>
  );
}
