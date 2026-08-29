function SortSelect({ sortOption, onSortChange }) {
  return (
    <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
      <option value="">Default</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="name-asc">Name: A–Z</option>
      <option value="rating-desc">Rating: High to Low</option>
    </select>
  );
}

export default SortSelect;