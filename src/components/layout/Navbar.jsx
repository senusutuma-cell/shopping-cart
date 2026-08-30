import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

function Navbar() {
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
     <NavLink to="/">🛍️ ShopCart</NavLink>

      <div style={{ display: "flex", gap: "1rem" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>
        <NavLink to="/cart">Cart ({itemCount})</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;