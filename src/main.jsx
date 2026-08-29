import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartProvider.jsx";
import { ToastProvider } from "./context/ToastProvider.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <CartProvider>
      <ToastProvider>
       <App />
       </ToastProvider>
     </CartProvider>  
    </BrowserRouter>
  </StrictMode>
);