import Accordion from "react-bootstrap/Accordion";
import "./razon.css";
export default function Razon() {
  return (
    <>
      <h1 className="fs-2 text-center mb-3">¿Porque Deberias elegirnos?</h1>
      <Accordion className="cont-acordion">
        <Accordion.Item eventKey="0" className="item-acordeon">
          <Accordion.Header >Ventajas de elegir TecnoVolt</Accordion.Header>
          <Accordion.Body>
            En TecnoVolt nos enfocamos en ofrecerte una experiencia de compra
            cómoda, rápida y confiable. Podés explorar una amplia variedad de
            productos electrónicos desde la comodidad de tu casa, con
            información clara, asesoramiento personalizado y opciones de pago
            seguras. Además, garantizamos envíos ágiles y atención postventa
            para que disfrutes de tus dispositivos sin complicaciones.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1"  className="item-acordeon1">
          <Accordion.Header>Innovación, precios y calidad</Accordion.Header>
          <Accordion.Body>
            En TecnoVolt nos destacamos por ofrecer lo último en tecnología,
            siempre con la mejor relación entre precio, calidad y rendimiento.
            Contamos con una amplia variedad de productos, desde los
            lanzamientos más recientes hasta opciones accesibles para todos los
            presupuestos. Creemos que la tecnología debe estar al alcance de
            todos, por eso trabajamos para brindarte accesibilidad sin perder
            excelencia.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
