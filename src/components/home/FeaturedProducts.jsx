import { useProducts } from "../../hooks/useProducts";
import ProductGrid from "../product/ProductGrid";
import SkeletonCard from "../product/SkeletonCard";

function FeaturedProducts() {
  const { products, loading, error } = useProducts();

  const featured = products.slice(0, 4);

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Featured Products</h2>

      {loading && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {error && !loading && <p>Couldn't load featured products.</p>}

      {!loading && !error && <ProductGrid products={featured} />}
    </section>
  );
}

export default FeaturedProducts;