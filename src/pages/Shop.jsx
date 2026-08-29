import { useState, useMemo } from "react";
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";
import ProductGrid from "../components/product/ProductGrid";
import SkeletonCard from "../components/product/SkeletonCard";
import CategoryFilter from "../components/shop/CategoryFilter";
import SearchBar from "../components/shop/SearchBar";
import SortSelect from "../components/shop/SortSelect";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const { products, loading, error, refetch } = useProducts(selectedCategory);
  const { categories } = useCategories();

  const visibleProducts = useMemo(() => {
    let result = products;

    if (searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(term));
    }

    switch (sortOption) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "rating-desc":
        result = [...result].sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }
 return result;
  }, [products, searchTerm, sortOption]);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Shop</h1>
     <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      /> 
       <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <SortSelect sortOption={sortOption} onSortChange={setSortOption} />
      </div>
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
          <p>{visibleProducts.length} products found</p>
          <ProductGrid products={visibleProducts} />
        </>
      )}
    </div>
  );
}

export default Shop;