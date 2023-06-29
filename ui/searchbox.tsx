"use client";

import { useState, useLayoutEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { ChangeEvent, KeyboardEvent } from "react";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  const [query, setQuery] = useState(q || "");

  useLayoutEffect(() => {
    if (q === null) setQuery("");
  }, [q]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    if (query !== "") {
      router.push(`/?q=${query}`);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="relative w-full place-self-center">
      <input
        type="text"
        value={query}
        placeholder="Search movies"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="input input-bordered input-md input-primary w-full"
      />
      <button
        onClick={handleClick}
        className="absolute right-4 top-[11px] hover:brightness-110 hover:duration-500"
      >
        <kbd className="kbd kbd-sm">Enter</kbd>
      </button>
    </div>
  );
}
