import type { ReactNode } from "react";
import { getMovie } from "#/app/api/movies/[id]/getMovie";

import Breadcrumbs from "#/ui/breadcrumbs";

export default async function Layout({
  children,
  params: { movieId },
}: {
  children: ReactNode;
  params: { movieId: string };
}) {
  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <Breadcrumbs movie={movie} />
      {children}
    </div>
  );
}
