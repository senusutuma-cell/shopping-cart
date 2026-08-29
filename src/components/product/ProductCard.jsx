import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  function handleAddToCart(e) {
    e.preventDefault(); 
    dispatch({ type: "ADD_ITEM", payload: product });
  }

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem" }}>
      <Link to={`/shop/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "180px", objectFit: "contain" }}
        />
        <h3 style={{ fontSize: "0.95rem" }}>{product.title}</h3>
      </Link>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;