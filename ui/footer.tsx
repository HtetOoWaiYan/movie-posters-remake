import Container from "./container";

export default function Footer() {
  return (
    <footer className="footer bg-base-100 text-neutral-content items-center p-8">
      <Container>
        <p className="mx-auto text-center">
          Movie data from{" "}
          <a href="https://themoviedb.com" className="link-hover">
            TMDb
          </a>
          <br />
          Logo made by{" "}
          <a
            href="https://www.flaticon.com/authors/nhor-phai"
            className="link-hover"
          >
            Nhor Phai
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" className="link-hover">
            flaticon
          </a>
        </p>
      </Container>
    </footer>
  );
}
