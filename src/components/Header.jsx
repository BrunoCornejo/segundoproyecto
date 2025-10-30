import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import { obtenerDelSessionStorage } from "../utils/localStorage";
import { useEffect, useState } from "react";

function Header() {
  const usuario = obtenerDelSessionStorage("usuario");
  const navigate = useNavigate();

  function handleLogOut() {
    sessionStorage.removeItem("usuario");
    navigate("/");
  }

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
              <NavDropdown.Item
                as={Link}
                to="/productos?categoria=celulares"
                className="nav-item"
              >
                Celulares
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/productos?categoria=notebooks"
                className="nav-item"
              >
                Notebooks
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/productos?categoria=tablets"
                className="nav-item"
              >
                Tablets
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/sobrenosotros" className="text-white">
              Sobre Nosotros
            </Nav.Link>
          </Nav>

          {/* BOTONES DERECHO */}
          <div className="cont-button d-flex gap-2">
            {usuario?.rol === "admin" ? (
              <Link to="/admin" className="boton-nav">
                Admin
              </Link>
            ) : (
              <></>
            )}
            {usuario ? (
              <Button
                onClick={handleLogOut}
                className="boton-nav btn btn-danger"
              >
                Cerrar Sesión
              </Button>
            ) : (
              <>
                <Link to="/login" className="boton-nav">
                  Iniciar Sesión
                </Link>
                <Link to="/registro" className="boton-nav">
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
