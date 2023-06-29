"use client";

import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const NavItem = ({ href, children }: { href: string; children: ReactNode }) => {
  const segment = useSelectedLayoutSegment();

  const isActive =
    href === "/"
      ? segment === null || segment === "posters"
      : segment === href.slice(1);

  return (
    <li
      className={clsx(
        isActive &&
          "underline decoration-sky-400/50 decoration-2 underline-offset-8"
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default function Nav() {
  return (
    <nav className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <NavItem href="/">Posters</NavItem>
        <NavItem href="/about">About</NavItem>
      </ul>
    </nav>
  );
}
