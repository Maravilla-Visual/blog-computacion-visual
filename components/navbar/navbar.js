import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

export default function NavbarBlog() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link href="/"> Computación Visual </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link href="/posts/list">
            <a>Listas</a>
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
