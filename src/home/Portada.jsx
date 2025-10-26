import Carousel from "react-bootstrap/Carousel";
import "./portada.css";
export default function Portada() {
  return (
    <Carousel variant="dark" className="Carrusel-padre">
      <Carousel.Item interval={1000} className="carrusel-hijo">
        <img
          src="https://philco.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/n/1/n14p4020_7.jpg"
          alt=""
          className="img-carrusel"
        />
      </Carousel.Item>
      <Carousel.Item interval={500} className="carrusel-hijo">
        <img
          src="https://imagenes.elpais.com/resizer/v2/KXXRBGL6VJGYPO3T4FLNSDKR4Y.jpg?auth=0af62d3f7a47c2abb05ef9cc920f3ff0df5a6c6cabe9ba6c046e5dc469a0c1c1&width=414"
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
