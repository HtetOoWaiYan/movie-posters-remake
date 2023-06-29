import { type NextRequest, NextResponse } from "next/server";
import { TMDBApiBaseUrl } from "#/lib/constants";
import { getTMDBApiKey } from "#/lib/getEnv";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const sort = searchParams.get("by");
  const query = searchParams.get("query");

  let res = null;

  if (query && query !== "") {
    res = await fetch(
      `${TMDBApiBaseUrl}/search/movie?api_key=${getTMDBApiKey()}&language=en-US&query=${query}&include_adult=false`
    );
  } else {
    res = await fetch(
      `${TMDBApiBaseUrl}/movie/${sort}?api_key=${getTMDBApiKey()}`
    );
  }

  const data = await res.json();

  return NextResponse.json({ data });
}
