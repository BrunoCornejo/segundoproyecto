import React from "react";
import PropTypes from "prop-types";

export default function ConfirmDialog(props) {
  const {
    // API A (tu AdminPanel actual):
    onCancel,
    // API B (algunos ejemplos usan esta):
    onClose,
    // comunes
    onConfirm,
    message,
    isOpen,      // si no viene, asumimos true (porque lo renderizás condicionalmente)
  } = props;

  const open = typeof isOpen === "boolean" ? isOpen : true;
  const handleClose = onClose || onCancel || (() => {});

  if (!open) return null;

  return (
    <div style={styles.backdrop} onClick={handleClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ marginTop: 0 }}>Confirmar</h3>
        <p>{message}</p>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button onClick={handleClose} style={styles.btnSecondary}>Cancelar</button>
          <button onClick={onConfirm} style={styles.btnDanger}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}

ConfirmDialog.propTypes = {
  // Hacemos TODO opcional para no romper llamadas anteriores
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func, // API A
  onClose: PropTypes.func,  // API B
};

const styles = {
  backdrop: { position: "fixed", inset: 0, background: "rgba(0,0,0,.35)", display: "grid", placeItems: "center", zIndex: 40 },
  modal: { width: 420, maxWidth: "95vw", background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 10px 30px rgba(0,0,0,.15)" },
  btnSecondary: { padding: "10px 14px", borderRadius: 8, border: "1px solid #d1d5db", background: "#fff", cursor: "pointer" },
  btnDanger: { padding: "10px 14px", borderRadius: 8, border: "1px solid #ef4444", background: "#ef4444", color: "#fff", cursor: "pointer" },
};