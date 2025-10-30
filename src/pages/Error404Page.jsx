import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./error.css";

export default function Error404Page() {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-light text-center error"
    >
      <img src="/Error.png" alt="error404" className="img-Error" />
      <h2 className="fw-semibold mb-3" style={{ color: "#FFFFFF" }}>
        ¡Ups! Página no encontrada
      </h2>
      <p
        className="text-color mb-4"
        style={{ maxWidth: "500px", color: "#FFFFFF" }}
      >
        No te preocupes, te ayudamos a volver al camino
      </p>
      <Link to="/">
        <Button className="botonError" type="submit">
          Volver a la Página Principal
        </Button>
      </Link>
    </Container>
  );
}
