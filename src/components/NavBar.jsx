

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Online Library System</h2>
      <ul>
        <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
        <li><NavLink to="/books" className="nav-link">Browse Books</NavLink></li>
        <li><NavLink to="/add" className="nav-link">Add Book</NavLink></li>
      </ul>
    </nav>
  );
}
