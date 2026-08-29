function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <button
        onClick={() => onSelectCategory("")}
        style={{ fontWeight: selectedCategory === "" ? "bold" : "normal" }}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          style={{ fontWeight: selectedCategory === category ? "bold" : "normal" }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;