import React from "react";
import { Carousel } from "react-bootstrap";

export default function ProductCarousel({ productos }) {
  if (!productos.length) return null;
   console.log(productos);
  

  return (
    <Carousel className="mb-5">
      {productos.map((p, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex flex-column align-items-center">
            <img
              src={p.imagen}
              alt={p.nombre}
              className="d-block"
              style={{
                maxHeight: "300px",
                objectFit: "contain",
                marginBottom: "1rem",
              }}
            />
            <h5>{p.nombre}</h5>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
