import Image from "next/image";
import { Metadata } from "next";
import { getMovie } from "#/app/api/movies/[id]/getMovie";
import { getPosterFilePath } from "#/lib/getPosterId";

type Props = {
  params: { movieId: string; posterId: string };
};

export async function generateMetadata({
  params: { movieId },
}: Props): Promise<Metadata> {
  const movie = await getMovie(movieId);

  return {
    title: movie.title,
  };
}

export default async function Page({ params: { movieId, posterId } }: Props) {
  const movie = await getMovie(movieId);
  const filePath = getPosterFilePath(posterId);

  return (
    <div className="flex justify-center">
      <Image
        width={460}
        height={690}
        src={`https://image.tmdb.org/t/p/w1280/${filePath}`}
        alt={`A poster of ${movie.title} (${movie.release_date.substring(
          0,
          4
        )})`}
        className="rounded border border-indigo-900/50 hover:cursor-pointer hover:shadow hover:brightness-110 hover:duration-500"
      />
    </div>
  );
}
