import { redirect } from "next/navigation";
import { getBaseUrl } from "#/lib/getEnv";
import type { Movie, Query, Sort } from "./movie";

import "server-only";

const sortOptions = [
  "popular",
  "top_rated",
  "now_playing",
  "upcoming",
] as const;

export async function getMovies(sort: Sort, query: Query) {
  if (!sortOptions.includes(sort)) {
    redirect("/");
  }

  const res = await fetch(
    `${getBaseUrl()}/api/movies?by=${sort}${query ? `&query=${query}` : ""}`
  );

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
