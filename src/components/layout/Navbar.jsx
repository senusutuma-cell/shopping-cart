import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
      <NavLink to="/">🛍️ ShopCart</NavLink>

      <div style={{ display: "flex", gap: "1rem" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">Cart (0)</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;