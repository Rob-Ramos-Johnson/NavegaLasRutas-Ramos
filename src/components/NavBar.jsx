import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"; // para links con react-router
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        {/* Logo */}
        <LinkContainer to="/">
          <Navbar.Brand>Tienda Mística</Navbar.Brand>
        </LinkContainer>

        {/* Toggle (hamburguesa) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* Centrado en pantalla grande */}
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/category/velas">
              <Nav.Link>Velas</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/category/incienso">
              <Nav.Link>Incienso</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/category/cristales">
              <Nav.Link>Cristales</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/category/difusores">
              <Nav.Link>Difusores</Nav.Link>
            </LinkContainer>
          </Nav>

          {/* Carrito a la derecha en cualquier pantalla */}
          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
