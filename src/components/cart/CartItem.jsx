import { useCart } from "../../hooks/useCart";

function CartItem({ item }) {
  const { dispatch } = useCart();

  function increment() {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity + 1 } });
  }

  function decrement() {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity - 1 } });
  }

  function remove() {
    dispatch({ type: "REMOVE_ITEM", payload: item.id });
  }

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", borderBottom: "1px solid #eee", padding: "1rem 0" }}>
      <img src={item.image} alt={item.title} style={{ width: "60px", height: "60px", objectFit: "contain" }} />

      <div style={{ flex: 1 }}>
        <p>{item.title}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button onClick={decrement}>−</button>
        <span>{item.quantity}</span>
        <button onClick={increment}>+</button>
      </div>

      <p>${(item.price * item.quantity).toFixed(2)}</p>

      <button onClick={remove}>Remove</button>
    </div>
  );
}

export default CartItem;