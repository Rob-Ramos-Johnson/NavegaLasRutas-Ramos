import CartWidget from "./CartWidget";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaStore } from "react-icons/fa";

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <FaStore size={24} />
          Mi Tienda
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* Cambiamos me-auto por mx-auto */}
            <Nav.Link href="/" className="text-light">Inicio</Nav.Link>
            <Nav.Link href="/productos" className="text-light">Productos</Nav.Link>
            <Nav.Link href="/contacto" className="text-light">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
