import "#/styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "#/ui/header";
import Footer from "#/ui/footer";

export const metadata: Metadata = {
  title: {
    default: "Movie Posters",
    template: "%s | Movie Posters",
  },
  icons: {
    shortcut: "/logo192.png",
    apple: "/logo192.png",
  },
  applicationName: "Movie Posters",
  description: "A website where you can view and download movie posters.",
  keywords: ["movie posters"],
  colorScheme: "dark",
  creator: "Htet Oo Wai Yan",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex flex-grow items-start justify-center py-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
