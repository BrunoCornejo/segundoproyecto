import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AcercaDeNosotros from "./components/auth/AcercaDeNosotros.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AcercaDeNosotros />
  </StrictMode>
);
