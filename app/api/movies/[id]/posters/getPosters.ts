import { getBaseUrl } from "#/lib/getEnv";
import type { Poster } from "./poster";

import "server-only";

export async function getPosters(id: string) {
  const res = await fetch(`${getBaseUrl()}/api/movies/${id}/posters`);

  if (!res.ok) {
    throw new Error("Failed to fetch posters data.");
  }

  const data = await res.json();

  const posters: Poster[] = data.data.posters.map((poster: any) => {
    const { width, height, iso_639_1, aspect_ratio, file_path } = poster;

    return {
      width,
      height,
      iso_639_1,
      aspect_ratio,
      file_path,
    };
  });

  return posters;
}
