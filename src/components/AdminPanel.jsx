import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import ConfirmDialog from "./ConfirmDialog";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../styles/admin.css";

const AdminPanel = () => {
  const [products, setProducts] = useLocalStorage("products", []);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    setShowForm(false);
  };

  const handleEditProduct = (product) => {
    const updated = products.map((p) => (p.id === product.id ? product : p));
    setProducts(updated);
    setSelectedProduct(null);
    setShowForm(false);
  };

  const handleDeleteProduct = (productId) => {
    const updated = products.filter((p) => p.id !== productId);
    setProducts(updated);
    setIsDialogOpen(false);
  };

  const openDeleteDialog = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  // Filtrar productos por búsqueda
  const filteredProducts = products.filter((p) =>
    [p.name, p.category, p.description]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Gestionar Productos</h1>
        {/* Botón visible solo en pantallas grandes */}
        <button className="add-btn-large" onClick={() => setShowForm(true)}>
          + Agregar Producto
        </button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ProductList
        products={filteredProducts}
        onEdit={(p) => {
          setSelectedProduct(p);
          setShowForm(true);
        }}
        onDelete={openDeleteDialog}
      />

      {/* Botón flotante visible solo en móvil */}
      <button className="fab" onClick={() => setShowForm(true)}>
        +
      </button>

      {/* Modal con formulario */}
      {showForm && (
        <div className="modal-overlay bg-light">
          <div className="modal-content">
            <h2>{selectedProduct ? "Editar Producto" : "Agregar Producto"}</h2>
            <ProductForm
              onAddProduct={handleAddProduct}
              onEditProduct={handleEditProduct}
              selectedProduct={selectedProduct}
              setSelectedProduct={(p) => {
                setSelectedProduct(p);
                if (!p) setShowForm(false);
              }}
            />
            <button
              className="close-modal-btn"
              onClick={() => {
                setShowForm(false);
                setSelectedProduct(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Confirmación de eliminación */}
      {isDialogOpen && selectedProduct && (
        <ConfirmDialog
          onConfirm={() => handleDeleteProduct(selectedProduct.id)}
          onCancel={closeDeleteDialog}
          message={`¿Estás seguro de eliminar "${selectedProduct?.name}"?`}
        />
      )}
    </div>
  );
};

export default AdminPanel;
