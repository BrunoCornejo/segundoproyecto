import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { obtenerDelLocalStorage } from "../utils/localStorage";
import { inicializarProductos } from "../utils/productosData";
import ProductCarousel from "../components/ProductCarousel";
import ProductCard from "../components/ProductCard";

export default function ProductosPage() {
    const [productos, setProductos] = useState({
        celulares: [],
        notebooks: [],
        tablets: [],
    });

    const [searchParams] = useSearchParams();
    const categoria = searchParams.get("categoria"); // ej: "notebooks"

    useEffect(() => {
        inicializarProductos();
        setProductos({
            celulares: obtenerDelLocalStorage("celulares"),
            notebooks: obtenerDelLocalStorage("notebooks"),
            tablets: obtenerDelLocalStorage("tablets"),
        });
    }, []);

    const productosMostrados = categoria
        ? productos[categoria] || []
        : [
            ...productos.celulares,
            ...productos.notebooks,
            ...productos.tablets,
        ];

    return (
        <Container className="py-4">
            <h1 className="text-center mb-5">Nuestros Productos</h1>

            {/* Carrusel de imágenes (solo una categoría o todos los productos juntos) */}
            <ProductCarousel productos={productosMostrados} />

            <hr className="my-5" />

            {/* Cards de productos */}
            <Row className="g-4 justify-content-center">
                {productosMostrados.map((p) => (
                    <Col key={p.id + p.nombre} md={6} lg={4}>  {/* md=6 → 2 por fila en tablets, lg=4 → 3 por fila en desktops */}
                        <ProductCard tipo={categoria || "productos"} producto={p} />
                    </Col>
                ))}
            </Row>

        </Container>
    );
}
