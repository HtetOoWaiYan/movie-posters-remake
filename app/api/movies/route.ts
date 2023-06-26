import { NextResponse } from 'next/server'

const API_KEY = process.env.TMDB_API_KEY;

export async function GET() {
  const value = 'popular';

  const res = await fetch(`https://api.themoviedb.org/3/movie/${value}?api_key=${API_KEY}`);

  const data = await res.json()

  return NextResponse.json({ data })
}