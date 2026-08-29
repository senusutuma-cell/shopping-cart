import { useReducer, useEffect } from "react";
import { CartContext } from "./CartContext";
import cartReducer, { initialCartState } from "./cartReducer";

const STORAGE_KEY = "shopping-cart-items";

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState, (initial) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...initial, items: JSON.parse(stored) } : initial;
    } catch (err) {
      console.error("Failed to parse stored cart:", err);
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const value = { items: state.items, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}