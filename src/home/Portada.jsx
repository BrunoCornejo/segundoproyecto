import Carousel from "react-bootstrap/Carousel";
import "./portada.css";
export default function Portada() {
  return (
    <Carousel variant="dark" className="Carrusel-padre">
      <Carousel.Item interval={1000} className="carrusel-hijo">
        <img
          src="https://img.freepik.com/vector-gratis/tecnologia-inalambrica-dispositivos-electronicos-cartel-isometrico_1284-15286.jpg"
          alt=""
          className="img-carrusel"
        />
      </Carousel.Item>
      <Carousel.Item interval={500} className="carrusel-hijo">
        <img
          src="https://www.thenocgroup.com/wp-content/uploads/2023/03/dispositivos_ectronicos_thenoc.jpg"
          alt=""
          className="img-carrusel"
        />
      </Carousel.Item>
      <Carousel.Item className="carrusel-hijo">
        <img
          src="https://cdn.shopify.com/s/files/1/0259/0484/0781/files/como-crear-fondos-de-pantalla-para-celular.jpg?v=1635232815"
          alt=""
          className="img-carrusel"
        />
      </Carousel.Item>
    </Carousel>
  );
}
