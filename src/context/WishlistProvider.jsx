import { useReducer, useEffect } from "react";
import { WishlistContext } from "./wishlistContext";
import wishlistReducer, { initialWishlistState } from "./wishlistReducer";

const STORAGE_KEY = "wishlist-items";

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialWishlistState, (initial) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...initial, items: JSON.parse(stored) } : initial;
    } catch (err) {
      console.error("Failed to parse stored wishlist:", err);
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const value = { items: state.items, dispatch };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}