import { useRecentlyViewed } from "../../hooks/useRecentlyViewed";
import { useProduct } from "../../hooks/useProduct";
import ProductCard from "./ProductCard";

function RecentlyViewedItem({ id }) {
  const { product, loading } = useProduct(id);

  if (loading || !product) return null;

  return <ProductCard product={product} />;
}

function RecentlyViewed() {
  const { viewedIds } = useRecentlyViewed();

  if (viewedIds.length === 0) return null;

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Recently Viewed</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
        {viewedIds.map((id) => (
          <RecentlyViewedItem key={id} id={id} />
        ))}
      </div>
    </section>
  );
}

export default RecentlyViewed;