
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/browse.css";

export default function Home() {
  const books = useSelector((state) => state.books.list);

  const categories = ["All", "Fiction", "Non-Fiction", "Sci-Fi", "History"];
  const popular = books.slice(0, 12);

  return (
    <div className="browse-container">
      <h1 className="page-title">Welcome to the Online Library</h1>

    
      <h2 className="section-title">Book Categories</h2>
<div className="category-buttons">
  {categories.map((c, i) => (
    <Link to={`/books/${c}`} key={i}>
      <button className="category-btn">{c}</button>
    </Link>
  ))}
</div>


      <h2 className="section-title">Popular Books</h2>
      <div className="card-container">
        {popular.map((b) => (
          <div className="book-card" key={b.id}>
            <h3>{b.title}</h3>
            <p><strong>Author:</strong> {b.author}</p>
            <p className="book-category">Category: {b.category}</p>
            {/* View Details button */}
            <Link to={`/book/${b.id}`}>
              <button className="view-details-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

