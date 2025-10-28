import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";

function Header() {
  return (
    <Navbar expand="md" className="cont-padre ">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="./src/images/tecnovolt.png"
            alt="logo"
            className="img-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="me-auto my-2 my-lg-0 text-white"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">
              Inicio
            </Nav.Link>
            <NavDropdown
              title="Categorias"
              className="text-white"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3" className="nav-item">
                Celulares
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className="nav-item">
                Notebooks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" className="nav-item">
                Tablets
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className="text-white">
              Sobre Nosotros
            </Nav.Link>
          </Nav>

          <div className="cont-button">
            <Button className="boton-nav">Iniciar Sesión</Button>
            <Button className="boton-nav">Registrarse</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
