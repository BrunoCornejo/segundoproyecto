import React from "react";
import "./AcercaDeNosotros.css";
import { FiClock, FiSend, FiAward, FiCheckCircle, FiEye } from "react-icons/fi";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

export default function AcercaDeNosotros() {
  return (
    <div className="container">
      <section>
        <h1>ACERCA DE NOSOTROS</h1>
        <h2 className="titulo">
          <FiClock style={{ color: "#124681ff", marginRight: "8px" }} />
          NUESTRA HISTORIA
        </h2>
        <p>
          Fundada en 2025, nuestra tienda ha crecido desde un pequeño local
          hasta convertirse en un referente en el mercado de la electrónica,
          siempre con el compromiso de ofrecer la mejor tecnología a nuestros
          clientes.
        </p>
      </section>

      <section>
        <h2>
          <FiSend style={{ marginRight: "8px" }} />
          MISION
        </h2>
        <p>
          Nuestra misión es proporcionar a nuestros clientes acceso a la última
          tecnología, ofreciendo productos de alta calidad y un servicio
          excepcional que supere sus expectativas.
        </p>
      </section>

      <section>
        <h2>
          <FiAward style={{ marginRight: "5px" }} />
          VALORES
        </h2>
        <ol>
          <li>
            <FiCheckCircle style={{ marginRight: "6px" }} />
            Calidad: Ofrecemos solo productos que cumplen con los más altos
            estándares
          </li>
          <li>
            <FiCheckCircle style={{ marginRight: "6px" }} />
            Innovación: Estamos siempre a la vanguardia de las últimas
            tendencias tecnológicas
          </li>
          <li>
            <FiCheckCircle style={{ marginRight: "6px" }} />
            Atención al Cliente: Tu satisfacción es nuestra prioridad número uno
          </li>
        </ol>
      </section>
      <section>
        <h2>
          <FiEye style={{ marginRight: "6px" }} />
          VISIÓN A FUTURO
        </h2>
        <p>
          Aspiramos a ser la tienda de electrónica líder en la región,
          expandiendo nuestra presencia online y física, y continuando con
          nuestro compromiso de innovación y servicio al cliente para las
          generaciones venideras.
        </p>
      </section>
      <section>
        <h1>EQUIPO TECNOVOLT</h1>
        <div className="containerCards">
          <div>
            <Card className="cardEquipo">
              <Card.Body>
                <Card.Title>JULIETA SANTILLAN</Card.Title>
                <Card.Text>
                  Profesora de Matemática y parte del equipo administrativo de
                  Tecno Volt. Se encarga de la organización y gestión interna,
                  aplicando logica y precision
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="cardEquipo">
              <Card.Body>
                <Card.Title>FACUNDO DIAZ</Card.Title>
                <Card.Text>
                  21 años y formo parte del proyecto TecnoVolt. Soy estudiante
                  de programación y me apasiona el desarrollo web, especialmente
                  el área frontend, en la cual busco perfeccionarme y seguir
                  creciendo profesionalmente.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="cardEquipo">
              <Card.Body>
                <Card.Title>BRUNO CORNEJO</Card.Title>
                <Card.Text>
                  26 años Recibido en tecnicatura en programación 2025 en UTN
                  tengo y me encuentro perfeccionandome más en mi rubro
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card className="cardEquipo">
              <Card.Body>
                <Card.Title>YOSELIN AGUERO</Card.Title>
                <Card.Text>
                  18 años,estudiante de programación y formo parte del proyecto
                  TecnoVolt,donde continúo perfeccionando mis conocimientos y
                  habilidades en el área
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
