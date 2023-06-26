import Link from 'next/link';
import Image from 'next/image';

import Container from './container';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

interface PosterProps {
  movie: Movie;
}

interface PostersProps {
  movies: Movie[];
}

const Poster = ({ movie }: PosterProps) => {
  return (
    <Link
      href={`/posters/${movie.id}`}
      title={`${movie.title} (${movie.release_date.substring(0, 4)})`}
    >
      <Image
        width={160}
        height={240}
        src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
        alt={`${movie.title} (${movie.release_date.substring(0, 4)})`}
        className="rounded border border-indigo-900/50 hover:cursor-pointer hover:shadow hover:brightness-110 hover:duration-500"
      />
    </Link>
  );
};

export default function Posters({ movies }: PostersProps) {
  return (
    <Container>
      <section className="grid grid-cols-[repeat(auto-fit,_160px)] items-center justify-center gap-4">
        {movies.map((movie) => {
          return <Poster key={movie.id} movie={movie} />;
        })}
      </section>
    </Container>
  );
}
