import { getBaseUrl } from "#/lib/getEnvs";
import type { Movie } from "../movie";

import "server-only";

export async function getMovie(id: string) {
  const res = await fetch(`${getBaseUrl()}/api/movies/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch movie data.");
  }

  const data = await res.json();
  const {
    id: movieId,
    title,
    release_date,
    poster_path,
    backdrop_path,
  } = data.data;

  const movie: Movie = {
    id: movieId,
    title,
    release_date,
    poster_path,
    backdrop_path,
  };

  return movie;
}
