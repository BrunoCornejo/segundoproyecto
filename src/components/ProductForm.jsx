import React, { useEffect, useState } from "react";

const empty = {
  id: null,
  name: "",
  price: "",
  stock: "",
  category: "",
  description: "",
  imageUrl: "",
};

export default function ProductForm({
  onAddProduct,
  onEditProduct,
  selectedProduct,
  setSelectedProduct,
}) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (selectedProduct) setForm(selectedProduct);
    else setForm(empty);
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toNumber = (v) => (v === "" ? "" : Number(v));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) return alert("El nombre es obligatorio");
    if (form.price === "" || isNaN(+form.price) || +form.price < 0)
      return alert("Precio inválido");
    if (form.stock === "" || isNaN(+form.stock) || +form.stock < 0)
      return alert("Stock inválido");

    const payload = {
      ...form,
      price: toNumber(form.price),
      stock: toNumber(form.stock),
      id:
        form.id ??
        (window.crypto?.randomUUID?.() ||
          `${Date.now()}_${Math.random().toString(16).slice(2)}`),
    };

    if (selectedProduct) {
      if (typeof onEditProduct === "function") onEditProduct(payload);
    } else {
      if (typeof onAddProduct === "function") onAddProduct(payload);
    }

    setForm(empty);
    if (setSelectedProduct) setSelectedProduct(null);
  };

  const handleCancel = () => {
    setForm(empty);
    if (setSelectedProduct) setSelectedProduct(null);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.field}>
        <label style={styles.label}>Nombre *</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Ej: Teclado Mecánico"
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Precio *</label>
        <input
          name="price"
          type="number"
          min="0"
          step="0.01"
          value={form.price}
          onChange={handleChange}
          placeholder="129999"
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Stock *</label>
        <input
          name="stock"
          type="number"
          min="0"
          value={form.stock}
          onChange={handleChange}
          placeholder="50"
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Categoría</label>
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Periféricos"
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Imagen (URL)</label>
        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="https://ejemplo.com/imagen.jpg"
          style={styles.input}
        />
      </div>

      <div style={{ ...styles.field, gridColumn: "1 / -1" }}>
        <label style={styles.label}>Descripción</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Detalle del producto"
          style={{ ...styles.input, minHeight: 70 }}
        />
      </div>

      <div style={{ gridColumn: "1 / -1", display: "flex", gap: 8 }}>
        <button type="submit" style={styles.btnPrimary}>
          {selectedProduct ? "Guardar cambios" : "Agregar"}
        </button>
        {selectedProduct && (
          <button
            type="button"
            onClick={handleCancel}
            style={styles.btnSecondary}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

const styles = {
  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 16,
  },
  field: { display: "flex", flexDirection: "column", gap: 6 },
  label: { fontSize: 12, fontWeight: 600 },
  input: {
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: 8,
    fontSize: 14,
  },
  btnPrimary: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #111827",
    background: "#111827",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 600,
  },
  btnSecondary: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    background: "#fff",
    cursor: "pointer",
    fontWeight: 600,
  },
};
