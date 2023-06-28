import { NextResponse } from "next/server";
import { getTMDBApiKey } from "#/lib/getEnvs";

export const runtime = "edge";

export async function GET() {
  const value = "popular";

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${value}?api_key=${getTMDBApiKey()}`
  );

  const data = await res.json();

  return NextResponse.json({ data });
}
