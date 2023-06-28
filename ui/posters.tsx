import Image from "next/image";

import type { ReactNode } from "react";

export function Poster({ file_path, alt }: { file_path: string; alt: string }) {
  return (
    <Image
      width={160}
      height={240}
      src={`https://image.tmdb.org/t/p/w1280/${file_path}`}
      alt={alt}
      className="rounded border border-indigo-900/50 hover:cursor-pointer hover:shadow hover:brightness-110 hover:duration-500"
    />
  );
}

export function Posters({ children }: { children: ReactNode }) {
  return (
    <section className="grid w-full grid-cols-[repeat(auto-fit,_160px)] items-center justify-center gap-4">
      {children}
    </section>
  );
}
