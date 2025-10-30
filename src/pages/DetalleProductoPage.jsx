import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerDelLocalStorage } from "../utils/localStorage";
import { Card, Button, Container } from "react-bootstrap";

export default function DetalleProductoPage() {
  const { tipo, id } = useParams();
  const navigate = useNavigate();
  const productos = obtenerDelLocalStorage(tipo);
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return (
      <Container className="py-5 text-center">
        Producto no encontrado
      </Container>
    );
  }

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card style={{ width: "28rem" }} className="shadow">
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <h4 className="text-primary fw-bold">${producto.precio}</h4>
          <Button
            variant="secondary"
            className="mt-3"
            onClick={() => navigate(-1)}
          >
            Volver
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
