import Link from "next/link";
import Toolbar from "#/ui/toolbar";
import { Poster, Posters } from "#/ui/posters";
import type { Movie, Query, Sort } from "#/app/api/movies/movie";
import { getMovies } from "#/app/api/movies/getMovies";
import { isFromSearch } from "#/lib/checkParams";

const PosterItem = ({
  movie,
  fromSearch,
  query,
}: {
  movie: Movie;
  fromSearch: boolean;
  query: Query;
}) => {
  return (
    <Link
      href={`/posters/${movie.id}${fromSearch ? `?q=${query}` : ""}`}
      title={`${movie.title} (${movie.release_date.substring(0, 4)})`}
    >
      <Poster
        file_path={movie.poster_path}
        alt={`${movie.title} (${movie.release_date.substring(0, 4)})`}
      />
    </Link>
  );
};

export default async function Page({
  searchParams: { q, by },
}: {
  searchParams: { q: Query; by: Sort };
}) {
  const movies = await getMovies(by || "popular", q);

  const { fromSearch, query } = isFromSearch(q);

  return (
    <div className="w-full">
      <Toolbar />
      <Posters>
        {movies.map((movie) => {
          return (
            <PosterItem
              key={movie.id}
              movie={movie}
              query={query}
              fromSearch={fromSearch}
            />
          );
        })}
      </Posters>
    </div>
  );
}
