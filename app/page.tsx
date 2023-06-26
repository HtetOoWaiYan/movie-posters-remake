import type { Metadata } from 'next';

import Posters from '#/ui/posters';

export const metadata: Metadata = {
  description: 'Movie Posters',
};

async function getMovies() {
  const res = await fetch('http://localhost:3000/api/movies');

  if (!res.ok) {
    throw new Error('Failed to fetch movie data.');
  }

  return res.json();
}

export default async function HomePage() {
  const { data } = await getMovies();

  const movies = data.results.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    release_date: movie.release_date,
    poster_path: movie.poster_path,
  }));

  return <Posters movies={movies} />;
}
