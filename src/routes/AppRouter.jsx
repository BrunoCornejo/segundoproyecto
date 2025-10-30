import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import FavoritosPage from "../pages/FavoritosPage.jsx";
import ProductosPage from "../pages/ProductosPage.jsx";
import DetalleProductoPage from "../pages/DetalleProductoPage.jsx";
import Error404Page from "../pages/Error404Page.jsx";
import AcercaDeNosotrosPage from "../pages/AcercaDeNosotrosPage.jsx";
import AdminPanel from "../components/AdminPanel.jsx";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobrenosotros" element={<AcercaDeNosotrosPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/productos" element={<ProductosPage />} />
      <Route path="/favoritos" element={<FavoritosPage />} />
      <Route path="/detalle/:tipo/:id" element={<DetalleProductoPage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}
