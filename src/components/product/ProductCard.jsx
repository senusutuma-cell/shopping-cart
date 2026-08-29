import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useToast } from "../../hooks/useToast";
import { useWishlist } from "../../hooks/useWishlist";


function ProductCard({ product }) {
  const { dispatch } = useCart();
  const { addToast } = useToast();
  const { items: wishlistItems, dispatch: wishlistDispatch } = useWishlist();

  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  function handleAddToCart(e) {
    e.preventDefault(); 
    dispatch({ type: "ADD_ITEM", payload: product });
    addToast(`Added "${product.title}" to cart`);
  }
function handleToggleWishlist(e) {
    e.preventDefault();
    if (isWishlisted) {
      wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id });
    } else {
      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
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
      <button onClick={handleToggleWishlist}>{isWishlisted ? "♥ Wishlisted" : "♡ Wishlist"}</button>
    </div>
  );
}

export default ProductCard;