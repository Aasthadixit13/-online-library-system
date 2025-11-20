import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p className="book-category">Category: {book.category}</p>
      <Link to={`/book/${book.id}`}>
      {/* View Details */}
       <button className="view-details-btn">View Details</button>
      </Link>
    </div>
  );
};

export default BookCard;  


