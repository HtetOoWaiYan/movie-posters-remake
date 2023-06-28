import { getBaseUrl } from "#/lib/getEnvs";
import type { Movie } from "./movie";

import "server-only";

export async function getMovies() {
  const res = await fetch(`${getBaseUrl()}/api/movies`);

  if (!res.ok) {
    throw new Error("Failed to fetch movies data.");
  }

  const data = await res.json();

  const movies: Movie[] = data.data.results.map((movie: any) => {
    const { id, title, release_date, poster_path, backdrop_path } = movie;

    return {
      id,
      title,
      release_date,
      poster_path,
      backdrop_path,
    };
  });

  return movies;
}
