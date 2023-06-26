import Posters from "#/ui/posters";

import { getMovies } from "#/app/api/movies/getMovies";

export default async function HomePage() {
  const data = await getMovies();

  const movies = data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    release_date: movie.release_date,
    poster_path: movie.poster_path,
  }));

  return <Posters movies={movies} />;
}
