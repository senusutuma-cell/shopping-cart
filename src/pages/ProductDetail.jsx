import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useCart } from "../hooks/useCart";
import RelatedProducts from "../components/product/RelatedProducts";

function ProductDetail() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const { dispatch } = useCart();

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Something went wrong: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  function handleAddToCart() {
    dispatch({ type: "ADD_ITEM", payload: product });
  }
  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ maxWidth: "300px", objectFit: "contain" }}
        />

        <div>
          <h1>{product.title}</h1>
          <p style={{ textTransform: "capitalize", color: "#666" }}>{product.category}</p>
          <p>{product.description}</p>
          <p>⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
          <h2>${product.price.toFixed(2)}</h2>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
<RelatedProducts category={product.category} currentProductId={product.id} />
    </div>
  );
 }

export default ProductDetail;