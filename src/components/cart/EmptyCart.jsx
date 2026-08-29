import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <p>Your cart is empty.</p>
      <Link to="/shop">Continue Shopping</Link>
    </div>
  );
}

export default EmptyCart;