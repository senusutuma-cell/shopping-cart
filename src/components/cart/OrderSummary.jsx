const TAX_RATE = 0.15;

function OrderSummary({ items }) {
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", maxWidth: "300px" }}>
      <h2>Order Summary</h2>
      <p>Items: {itemCount}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax (15%): ${tax.toFixed(2)}</p>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default OrderSummary;