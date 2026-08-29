import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";
import ProductGrid from "../components/product/ProductGrid";
import SkeletonCard from "../components/product/SkeletonCard";

function Shop() {
  const { products, loading, error, refetch } = useProducts();
  const { categories } = useCategories();

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Shop</h1>
      <p>Categories available: {categories.join(", ")}</p>

      {loading && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {error && !loading && (
        <div>
          <p>Something went wrong: {error}</p>
          <button onClick={refetch}>Retry</button>
        </div>
      )}

      {!loading && !error && (
        <>
          <p>{products.length} products found</p>
          <ProductGrid products={products} />
        </>
      )}
    </div>
  );
}

export default Shop;