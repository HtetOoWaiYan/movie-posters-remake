import { NextRequest, NextResponse } from "next/server";
import { getTMDBApiKey } from "#/lib/getEnvs";

export const runtime = "edge";

export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${getTMDBApiKey()}&language=en`
  );

  const data = await res.json();

  return NextResponse.json({ data });
}
