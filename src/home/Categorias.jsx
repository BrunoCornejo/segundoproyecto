import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./categorias.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Categorias() {
  return (
    <>
      <CardGroup className="cont-cards">
        <Card className="card-item">
          <Card.Body>
            <i className="bi bi-phone"></i>
            <Card.Title>Celulares</Card.Title>
            <Card.Text>
              Descubrí la última tecnología móvil con nuestros smartphones de
              alto rendimiento, diseño moderno y cámaras de calidad profesional.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-item">
          <Card.Body>
            <i className="bi bi-laptop"></i>
            <Card.Title>Notebooks</Card.Title>
            <Card.Text>
              Potenciá tu productividad con equipos rápidos, confiables y
              adaptados a tus necesidades, desde el trabajo hasta el gaming.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-item">
          <Card.Body>
            <i className="bi bi-tablet"></i>
            <Card.Title>Tablets</Card.Title>
            <Card.Text>
              Comodidad y potencia en un solo dispositivo: ideales para
              estudiar, trabajar o disfrutar de tu contenido favorito en
              cualquier lugar.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="cont-cards">
        <Card className="card-item">
          <Card.Body>
            <i className="bi bi-headphones"></i>
            <Card.Title>Auriculares</Card.Title>
            <Card.Text>
              Sumergite en un sonido de alta calidad con diseños cómodos y
              modernos, ideales para música, trabajo o gaming.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-item">
          <Card.Body>
            <i className="bi bi-usb-symbol"></i>

            <Card.Title>Cables y Fichas</Card.Title>
            <Card.Text>
              Conectá tus dispositivos con confianza: cables y fichas duraderas,
              seguras y con excelente rendimiento.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-item">
          <Card.Body>
            <i className="bi bi-lightbulb"></i>
            <Card.Title>Otros</Card.Title>
            <Card.Text>
              Encontrá una amplia variedad de accesorios y artículos
              tecnológicos que complementan perfectamente tus dispositivos.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}
