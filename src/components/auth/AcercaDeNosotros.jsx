import React from "react";
import "./AcercaDeNosotros.css";
import { FiClock, FiSend, FiAward, FiCheckCircle, FiEye } from "react-icons/fi";
export default function AcercaDeNosotros() {
  return (
    <div className="container">
      <section>
        <h1>ACERCA DE NOSOTROS</h1>
        <h2>
          {" "}
          <FiClock style={{ marginRight: "8px" }} />
          NUESTRA HISTORIA
        </h2>
        <p>
          Fundada en 2010, nuestra tienda ha crecido desde un pequeño local
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
          <FiEye style={{ marginRight: "5px" }} />
          VISIÓN A FUTURO
        </h2>
        <p>
          Aspiramos a ser la tienda de electrónica líder en la región,
          expandiendo nuestra presencia online y física, y continuando con
          nuestro compromiso de innovación y servicio al cliente para las
          generaciones venideras.
        </p>
      </section>
    </div>
  );
}
