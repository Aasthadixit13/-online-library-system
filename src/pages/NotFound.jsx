import { useLocation, Link } from "react-router-dom";
import "../styles/notFound.css"; 

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Page Not Found</h1>

      <p className="notfound-text">
        The page <strong>{location.pathname}</strong> does not exist.
      </p>

      <Link
        to="/" className="notfound-btn"

      >
        Go Back Home
      </Link>
    </div>
  );
}
