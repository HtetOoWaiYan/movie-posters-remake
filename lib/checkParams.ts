import type { Query } from "#/app/api/movies/movie";

export function isFromSearch(query: Query) {
  const fromSearch = query ? query !== "" : false;

  return {
    fromSearch,
    query,
  };
}
