import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <section
      style={{
        background: "#222",
        color: "#fff",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <h1>Welcome to ShopCart</h1>
      <p>Quality products, honest prices, no nonsense.</p>
      <Link to="/shop" style={{ color: "#fff", textDecoration: "underline" }}>
        Shop Now
      </Link>
    </section>
  );
}

export default HeroBanner;