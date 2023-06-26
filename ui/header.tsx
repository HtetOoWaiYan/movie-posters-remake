import Link from 'next/link';
import Image from 'next/image';

import Container from './container';
import Nav from './nav';

export default function Header() {
  return (
    <header className="navbar bg-base-100">
      <Container>
        <div className="flex-1">
          <Link href="/" title="Home">
            <div className="flex items-center gap-1">
              <Image
                src="/logo.png"
                alt="Movie Posters"
                width={55}
                height={55}
              />
              <span className="border-b-2 border-dotted border-sky-300 text-sm font-light uppercase">
                Movie Posters
              </span>
            </div>
          </Link>
        </div>
        <Nav />
      </Container>
    </header>
  );
}
