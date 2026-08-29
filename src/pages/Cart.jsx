import { useCart } from "../hooks/useCart";
import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";
import EmptyCart from "../components/cart/EmptyCart";

function Cart() {
  const { items, dispatch } = useCart();

  function handleClearCart() {
    const confirmed = window.confirm("Are you sure you want to clear your cart?");
    if (confirmed) {
      dispatch({ type: "CLEAR_CART" });
    }
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div style={{ padding: "1rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      <div style={{ flex: 2, minWidth: "300px" }}>
        <h1>Your Cart</h1>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <button onClick={handleClearCart} style={{ marginTop: "1rem" }}>
          Clear Cart
        </button>
      </div>

      <div style={{ flex: 1, minWidth: "250px" }}>
        <OrderSummary items={items} />
      </div>
    </div>
  );
}

export default Cart;