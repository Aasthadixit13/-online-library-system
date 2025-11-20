
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import "../styles/AddBook.css"; 

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author || !form.category || !form.description) {
      setError("All fields are required!");
      return;
    }

    const newBook = {
      id: Date.now(),
      ...form,
    };

    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
   
    <div className="addbook-container">
  <h1 className="addbook-title">Add New Book</h1>

  {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

  <form className="addbook-form" onSubmit={handleSubmit}>
    <input className="addbook-input" type="text" placeholder="Book Title"
      onChange={(e)=>setForm({...form,title:e.target.value})} />

    <input className="addbook-input" type="text" placeholder="Author"
      onChange={(e)=>setForm({...form,author:e.target.value})} />

    <input className="addbook-input" type="text" placeholder="Category"
      onChange={(e)=>setForm({...form,category:e.target.value})} />

    <textarea className="addbook-textarea" placeholder="Description"
      onChange={(e)=>setForm({...form,description:e.target.value})}></textarea>

    <input className="addbook-input" type="number" placeholder="Rating (1-5)"
      onChange={(e)=>setForm({...form,rating:e.target.value})} />

    <button className="addbook-btn" type="submit">Add Book 📚</button>
  </form>
</div>

  );
}

