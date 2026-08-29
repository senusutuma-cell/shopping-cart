import { useWishlist } from "../hooks/useWishlist";
import ProductGrid from "../components/product/ProductGrid";

function Wishlist() {
  const { items } = useWishlist();

  if (items.length === 0) {
    return <p style={{ padding: "1rem" }}>Your wishlist is empty.</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Your Wishlist</h1>
      <ProductGrid products={items} />
    </div>
  );
}

export default Wishlist;