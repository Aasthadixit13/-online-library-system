

import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import "../styles/bookDetails.css"; 

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.list.find((b) => b.id == id)
  );

  if (!book) return <h2 style={{ textAlign: "center" }}>Book Not Found</h2>;

  return (
    <div className="book-details-container">
      <div className="book-details-card">
        <h1>{book.title}</h1>
        <p><b>Author:</b> {book.author}</p>
        <p><b>Description:</b> {book.description}</p>
        <p><b>Rating:</b> ⭐ {book.rating}</p>

        <Link to="/books">
          <button className="back-btn">Back to Browse</button>
        </Link>
      </div>
    </div>
  );
}

