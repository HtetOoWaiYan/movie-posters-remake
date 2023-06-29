import Link from "next/link";
import { Metadata } from "next";
import { Poster, Posters } from "#/ui/posters";
import { getMovie } from "#/app/api/movies/[id]/getMovie";
import { getPosters } from "#/app/api/movies/[id]/posters/getPosters";
import type { Movie, Query } from "#/app/api/movies/movie";
import type { Poster as PosterType } from "#/app/api/movies/[id]/posters/poster";
import { getPosterId } from "#/lib/getPosterId";
import { isFromSearch } from "#/lib/checkParams";

type Props = {
  params: { movieId: string };
  searchParams: { q: string };
};

export async function generateMetadata({
  params: { movieId },
}: Props): Promise<Metadata> {
  const movie = await getMovie(movieId);

  return {
    title: movie.title,
  };
}

const PosterItem = ({
  movie,
  poster,
  query,
  fromSearch,
}: {
  movie: Movie;
  poster: PosterType;
  query: Query;
  fromSearch: boolean;
}) => {
  const posterId = getPosterId(poster.file_path);

  return (
    <Link
      href={`/posters/${movie.id}/${posterId}${
        fromSearch ? `?q=${query}` : ""
      }`}
      title="Click to view full size"
    >
      <Poster
        file_path={poster.file_path}
        alt={`A poster of ${movie.title} (${movie.release_date.substring(
          0,
          4
        )})`}
      />
    </Link>
  );
};

export default async function Page({
  params: { movieId },
  searchParams: { q },
}: Props) {
  const movie = await getMovie(movieId);
  const posters = await getPosters(movieId);

  const { fromSearch, query } = isFromSearch(q);

  return (
    <Posters>
      {posters.map((poster) => {
        return (
          <PosterItem
            key={poster.file_path}
            movie={movie}
            poster={poster}
            query={query}
            fromSearch={fromSearch}
          />
        );
      })}
    </Posters>
  );
}
