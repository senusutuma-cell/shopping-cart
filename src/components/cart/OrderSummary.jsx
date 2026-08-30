const TAX_RATE = 0.15;

function OrderSummary({ items }) {
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
     <div className="receipt">
      <h2 className="receipt__title">Order Summary</h2>
      <div className="receipt__row"><span>Items</span><span>{itemCount}</span></div>
      <div className="receipt__row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
      <div className="receipt__row"><span>Tax (15%)</span><span>${tax.toFixed(2)}</span></div>
      <div className="receipt__total"><span>Total</span><span>${total.toFixed(2)}</span></div>
    </div>
  );
}

export default OrderSummary;