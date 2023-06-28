import type { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto flex w-[1200px]">{children}</div>;
}
