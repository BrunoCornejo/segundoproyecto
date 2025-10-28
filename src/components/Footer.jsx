import "./footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Footer() {
  return (
    <footer className="cont-footer">
      <article>
        <h2>Redes</h2>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-instagram"></i>
      </article>
      <article>
        <h2>Contacto</h2>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-telephone"></i>
      </article>
      <article>
        <h2>Ubicación</h2>
        <i className="bi bi-geo-alt"></i>
      </article>
    </footer>
  );
}
