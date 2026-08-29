function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      style={{ padding: "0.5rem", width: "100%", maxWidth: "300px" }}
    />
  );
}

export default SearchBar;