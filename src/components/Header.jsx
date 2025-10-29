import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";

function Header() {
  return (
    <Navbar expand="md" className="cont-padre" bg="dark" data-bs-theme="dark">
      <Container fluid>
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="./src/images/tecnovolt.png"
            alt="logo"
            className="img-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* LINKS PRINCIPALES */}
          <Nav
            className="me-auto my-2 my-lg-0 text-white"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="text-white">
              Inicio
            </Nav.Link>

            {/* CATEGORÍAS */}
            <NavDropdown
              title="Categorías"
              className="text-white"
              id="navbarScrollingDropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/productos?categoria=celulares" className="nav-item">
                Celulares
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos?categoria=notebooks" className="nav-item">
                Notebooks
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos?categoria=tablets" className="nav-item">
                Tablets
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/sobre-nosotros" className="text-white">
              Sobre Nosotros
            </Nav.Link>
          </Nav>

          {/* BOTONES DERECHO */}
          <div className="cont-button d-flex gap-2">
            <Button variant="outline-light" className="boton-nav">
              Iniciar Sesión
            </Button>
            <Button variant="primary" className="boton-nav">
              Registrarse
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
