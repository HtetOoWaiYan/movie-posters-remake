"use client";

import Link from "next/link";
import { Movie } from "#/app/api/movies/movie";
import { useSearchParams, useSelectedLayoutSegment } from "next/navigation";

export default function Breadcrumbs({ movie }: { movie: Movie }) {
  const segment = useSelectedLayoutSegment();
  const isInCurrentLayout = segment === null;

  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="breadcrumbs mb-6 mt-5 text-sm">
      <ul>
        <li>
          <Link href={query ? `/?q=${query}` : "/"}>
            {query ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="mr-2 h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="mr-2 h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            )}
            {query ? query : "Home"}
          </Link>
        </li>
        <li>
          <Link href={`/posters/${movie.id}${query ? `?q=${query}` : ""}`}>
            {`${movie.title} (${movie.release_date.substring(0, 4)})`}
          </Link>
        </li>
        {!isInCurrentLayout && (
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="mr-2 h-4 w-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </li>
        )}
      </ul>
    </div>
  );
}
