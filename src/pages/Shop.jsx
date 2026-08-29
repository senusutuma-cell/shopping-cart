import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";
function Shop() {
  const { products, loading, error } = useProducts();
  const { categories } = useCategories();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Shop Page</h1>
      <p>Categories: {categories.join(", ")}</p>
      <p>Product count: {products.length}</p>
      <ul>
        {products.slice(0, 3).map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;