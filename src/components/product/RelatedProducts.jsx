import { useProducts } from "../../hooks/useProducts";
import ProductCard from "./ProductCard";

function RelatedProducts({ category, currentProductId }) {
  const { products, loading } = useProducts(category);

  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  if (loading || related.length === 0) return null;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Related Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;