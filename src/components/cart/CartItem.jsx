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
    <div className="cart-item">
    <img src={item.image} alt={item.title} className="cart-item__image" />

      <div className="cart-item__info">
       <p className="cart-item__title">{item.title}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>

      <div className="cart-item__meta">
        <div className="cart-item__stepper">
          <button className="stepper-btn" onClick={decrement}>−</button>
          <span>{item.quantity}</span>
          <button className="stepper-btn" onClick={increment}>+</button>
        </div>
        <p className="cart-item__line-total">${(item.price * item.quantity).toFixed(2)}</p>
        <button className="cart-item__remove" onClick={remove}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;