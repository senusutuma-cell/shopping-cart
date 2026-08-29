function SkeletonCard() {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: "8px", padding: "1rem" }}>
      <div style={{ height: "180px", background: "#eee", borderRadius: "4px" }} />
      <div style={{ height: "1rem", background: "#eee", marginTop: "0.75rem", width: "80%" }} />
      <div style={{ height: "1rem", background: "#eee", marginTop: "0.5rem", width: "40%" }} />
    </div>
  );
}

export default SkeletonCard;