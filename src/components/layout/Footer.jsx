function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
      <p>&copy; {new Date().getFullYear()} ShopCart. Built with React.</p>
    </footer>
  );
}

export default Footer;