import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./categorias.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Categorias() {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="g-4 text-center cont-cards">
            <Col xs={12} md={4}>
              <Card className="card-item h-100">
                <Card.Body>
                  <i className="bi bi-phone fs-1 text-primary"></i>
                  <Card.Title className="mt-3">
                    <Link
                      to="/productos?categoria=celulares"
                      className="link-categorias"
                    >
                      Celulares
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    Descubrí la última tecnología móvil con nuestros smartphones
                    de alto rendimiento, diseño moderno y cámaras de calidad
                    profesional.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

   
            <Col xs={12} md={4}>
              <Card className="card-item h-100">
                <Card.Body>
                  <i className="bi bi-laptop fs-1 text-primary"></i>
                  <Card.Title className="mt-3">
                    <Link
                      to="/productos?categoria=notebooks"
                      className="link-categorias"
                    >
                      Notebooks
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    Potenciá tu productividad con equipos rápidos, confiables y
                    adaptados a tus necesidades, desde el trabajo hasta el
                    gaming.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="card-item h-100">
                <Card.Body>
                  <i className="bi bi-tablet fs-1 text-primary"></i>
                  <Card.Title className="mt-3">
                    <Link
                      to="/productos?categoria=tablets"
                      className="link-categorias"
                    >
                      Tablets
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    Comodidad y potencia en un solo dispositivo: ideales para
                    estudiar, trabajar o disfrutar de tu contenido favorito en
                    cualquier lugar.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="card-item h-100">
                <Card.Body>
                  <i className="bi bi-headphones fs-1 text-primary"></i>
                  <Card.Title className="mt-3">
                    <Link to="*" className="link-categorias">
                      Auriculares
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    Sumergite en un sonido de alta calidad con diseños cómodos y
                    modernos, ideales para música, trabajo o gaming.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="card-item h-100">
                <Card.Body>
                  <i className="bi bi-usb-symbol fs-1 text-primary"></i>
                  <Card.Title className="mt-3">
                    <Link to="*" className="link-categorias">
                      Cables y fichas
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    Conectá tus dispositivos con confianza: cables y fichas
                    duraderas, seguras y con excelente rendimiento.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card className="card-item h-100">
                <Card.Body>
                  <i className="bi bi-lightbulb fs-1 text-primary"></i>
                  <Card.Title className="mt-3">
                    <Link to="*" className="link-categorias">
                      Otros
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    Encontrá una amplia variedad de accesorios y artículos
                    tecnológicos que complementan perfectamente tus
                    dispositivos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
