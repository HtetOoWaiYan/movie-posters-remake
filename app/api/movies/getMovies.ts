import { getBaseUrl } from "#/lib/getBaseUrl";
import type { Movies } from "./movie";

import "server-only";

export async function getMovies() {
  const res = await fetch(`${getBaseUrl()}/api/movies`);

  if (!res.ok) {
    throw new Error("Failed to fetch movie data.");
  }

  const data = await res.json();
  const movies = data.data as Movies;

  return movies;
}
