"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Select() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sort = searchParams.get("by");
  const query = searchParams.get("q");

  const [value, setValue] = useState(sort || "popular");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentValue = e.target.value;

    setValue(currentValue);

    if (currentValue === "popular") {
      router.push("/");
    } else {
      router.push(`/?by=${currentValue}`);
    }
  };

  if (query && query !== "") return null;

  return (
    <select
      value={value}
      onChange={handleChange}
      className="select select-ghost w-full max-w-xs place-self-end"
    >
      <option value="popular">Popular</option>
      <option value="top_rated">Top-rated</option>
      <option value="now_playing">Now Playing</option>
      <option value="upcoming">Upcoming</option>
    </select>
  );
}
