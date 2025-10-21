import { useEffect, useState } from "react";
import AdminPanel from "../components/AdminPanel";
import { useLocalStorage } from "../hooks/useLocalStorage";
import productService from "../services/productService";

const AdminPage = () => {
  // Importante: la clave coincide con KEY = "products" del service
  const [products, setProducts] = useLocalStorage("products", []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargamos desde el service (localStorage) al montar
    const storedProducts = productService.getProducts();
    setProducts(storedProducts);
    setLoading(false);
  }, [setProducts]);

  const handleAddProduct = (product) => {
    productService.addProduct(product);
    setProducts(productService.getProducts());
  };

  const handleEditProduct = (updatedProduct) => {
    productService.editProduct(updatedProduct);
    setProducts(productService.getProducts());
  };

  const handleDeleteProduct = (productId) => {
    productService.deleteProduct(productId);
    setProducts(productService.getProducts());
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="admin-page">
      <AdminPanel
        products={products}
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default AdminPage;