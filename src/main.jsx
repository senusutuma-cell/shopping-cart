import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartProvider.jsx";
import { ToastProvider } from "./context/ToastProvider.jsx";
import { WishlistProvider } from "./context/WishlistProvider.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
      <ToastProvider>
       <App />
       </ToastProvider>
       </WishlistProvider>
     </CartProvider>  
    </BrowserRouter>
  </StrictMode>
);