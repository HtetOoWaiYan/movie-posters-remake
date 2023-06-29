import { type NextRequest, NextResponse } from "next/server";
import { TMDBApiBaseUrl } from "#/lib/constants";
import { getTMDBApiKey } from "#/lib/getEnv";

export const runtime = "edge";

export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const res = await fetch(
    `${TMDBApiBaseUrl}/movie/${id}?api_key=${getTMDBApiKey()}`
  );

  const data = await res.json();

  return NextResponse.json({ data });
}
