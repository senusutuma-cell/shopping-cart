import { Link } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";

function CategoryGrid() {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading categories...</p>;
  if (error) return null; // non-critical section, fail quietly on the home page

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Shop by Category</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {categories.map((category) => (
          <Link
            key={category}
            to={`/shop?category=${encodeURIComponent(category)}`}
            style={{
              padding: "1rem 1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              textTransform: "capitalize",
            }}
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;