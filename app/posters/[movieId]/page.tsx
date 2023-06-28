import Link from "next/link";
import { Poster, Posters } from "#/ui/posters";
import { getMovie } from "#/app/api/movies/[id]/getMovie";
import { getPosters } from "#/app/api/movies/[id]/posters/getPosters";
import type { Movie } from "#/app/api/movies/movie";
import type { Poster as PosterType } from "#/app/api/movies/[id]/posters/poster";
import { getPosterId } from "#/lib/getPosterId";

const PosterItem = ({
  movie,
  poster,
}: {
  movie: Movie;
  poster: PosterType;
}) => {
  const posterId = getPosterId(poster.file_path);

  return (
    <Link
      href={`/posters/${movie.id}/${posterId}`}
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
}: {
  params: { movieId: string };
}) {
  const movie = await getMovie(movieId);
  const posters = await getPosters(movieId);

  return (
    <Posters>
      {posters.map((poster) => {
        return (
          <PosterItem key={poster.file_path} movie={movie} poster={poster} />
        );
      })}
    </Posters>
  );
}
