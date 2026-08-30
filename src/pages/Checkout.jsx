import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useToast } from "../hooks/useToast";

function Checkout() {
  const { items, dispatch } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderRef, setOrderRef] = useState("");

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const ref = "SC-" + Math.floor(100000 + Math.random() * 900000);
    setOrderRef(ref);
    setOrderPlaced(true);
    dispatch({ type: "CLEAR_CART" });
    addToast("Order placed! Thanks for shopping with us.");
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="empty-cart">
        <h2>Nothing to wrap up yet</h2>
        <p>Add something to your cart first.</p>
        <Link to="/shop" className="btn btn--primary">Browse the Shop</Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="page">
        <div className="order-confirmation">
          <div className="order-confirmation__seal">✓</div>
          <h1>You're all set!</h1>
          <p>Your order has been placed. A confirmation would normally land in your inbox.</p>
          <div className="order-confirmation__ref">
            Order reference<br /><strong>{orderRef}</strong>
          </div>
          <button className="btn btn--primary" onClick={() => navigate("/shop")}>
            Keep Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Wrap It Up</h1>
      <p>A few last details and it's on its way.</p>

      <div className="checkout-strip">
        <span>{itemCount} item{itemCount !== 1 ? "s" : ""}</span>
        <span className="checkout-strip__total">${total.toFixed(2)}</span>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2 className="form-section__title">Who's this for?</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              name="fullName"
              placeholder=" Sena Sutuma"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+251 9XX XXX XXX"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2 className="form-section__title">Where's it headed?</h2>
          <div className="form-group">
            <label htmlFor="address">Street address</label>
            <input
              id="address"
              name="address"
              placeholder="Street address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                placeholder="Addis Ababa"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                id="country"
                name="country"
                placeholder="Ethiopia"
                value={form.country}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Postal code</label>
              <input
                id="postalCode"
                name="postalCode"
                placeholder="1104"
                value={form.postalCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn--primary btn--full">
          Place Order — ${total.toFixed(2)}
        </button>
      </form>
    </div>
  );
}

export default Checkout;