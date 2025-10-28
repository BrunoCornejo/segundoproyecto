import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ tipo, producto }) {
  return (
    <Card style={{ width: "18rem" }} className="shadow-sm">
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text className="fw-bold text-primary">${producto.precio}</Card.Text>
        <Button as={Link} to={`/detalle/${tipo}/${producto.id}`} variant="primary">
          Ver detalle
        </Button>
      </Card.Body>
    </Card>
  );
}
