

import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";
import "../styles/browse.css"; 

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.list);
  const [search, setSearch] = useState("");

  // Add your new category here
  const categories = ["All" ,"Fiction", "Non-Fiction", "Sci-Fi"];

  // Redirect to 404 if category is invalid
  if (category && !categories.includes(category)) {
    return <Navigate to="/404" replace />;
  }

  const filtered = books.filter((b) => {
    // const matchesCategory = category ? b.category === category : true;
     const matchesCategory =
      !category || category === "All" ? true : b.category === category;
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-container">
      <h1 className="page-title">
        Browse Books {category && `(${category})`}
      </h1>

      <input
        className="search-input"
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card-container">
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
