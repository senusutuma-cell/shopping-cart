function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryIcons = {
     electronics: "⚡",
     jewelery: "💎",
     "men's clothing": "👕",
     "women's clothing": "👗",
   };
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" , marginBottom: "1rem"}}>
      <button
        onClick={() => onSelectCategory("")}
        style={{
           padding: "0.5rem 1rem",
           borderRadius: "6px",
           cursor: "pointer",
           border: "1px solid #ccc",
           backgroundColor: selectedCategory === "" ? "#0070f3" : "#fff",
           color: selectedCategory === "" ? "#fff" : "#000",
           fontWeight: selectedCategory === "" ? "bold" : "normal"
         }}
      >
       🏷️ All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          style={{
             padding: "0.5rem 1rem",
             borderRadius: "6px",
             cursor: "pointer",
             border: "1px solid #ccc",
             backgroundColor: selectedCategory === category ? "#0070f3" : "#fff",
             color: selectedCategory === category ? "#fff" : "#000",
             textTransform: "capitalize",
             fontWeight: selectedCategory === category ? "bold" : "normal"
           }}
        >
          {categoryIcons[category.toLowerCase()] || "📦"} {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;