import { Link } from "react-router-dom";

 function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
 }
export default NotFound;