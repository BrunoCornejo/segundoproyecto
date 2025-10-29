import "./footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Footer() {
  return (
    <footer className="cont-footer bg-dark text-light">
      <Container>
        <Row className="text-center text-md-start d-flex justify-content-center">
          <Col xs={12} md={4} className="mb-3">
            <h2 className="fs-4">Redes</h2>
            <div className="item-redes d-flex justify-content-center justify-content-md-start gap-3">
              <i className="bi bi-facebook fs-3"></i>
              <i className="bi bi-whatsapp fs-3"></i>
              <i className="bi bi-instagram fs-3"></i>
            </div>
          </Col>

          <Col xs={12} md={4} className="mb-3">
            <h2 className="fs-4">Contacto</h2>
            <div className="item-contactos d-flex flex-column align-items-center align-items-md-start">
              <p>
                <i className="bi bi-whatsapp me-2"></i>0810-8888-728
              </p>
              <p>
                <i className="bi bi-telephone me-2"></i>381 123-4567
              </p>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <h2 className="fs-4">Ubicación</h2>
            <p>
              <i className="bi bi-geo-alt me-2"></i>SAN MIGUEL DE TUCUMÁN
            </p>
          </Col>
          <Row>
            <Col className="text-center mt-3 border-top pt-3">
              <small>
                <i className="bi bi-c-circle me-2"></i>
                Derechos reservados <strong>TecnoVolt - 2025</strong>
              </small>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
}
