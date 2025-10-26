import React from "react";

export default function ProductList({ products, onEdit, onDelete }) {
  if (!products?.length)
    return <p className="no-products">No hay productos todavía.</p>;

  return (
    <div className="product-list">
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <img
            src={p.imageUrl || "https://via.placeholder.com/80"}
            alt={p.name}
            className="product-image"
          />
          <div className="product-info">
            <h3>{p.name}</h3>
            <p>
              {p.category} - ${p.price}
            </p>
          </div>
          <div className="product-actions">
            <button className="edit-btn" onClick={() => onEdit(p)}>
              ✎
            </button>
            <button className="delete-btn" onClick={() => onDelete(p)}>
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
