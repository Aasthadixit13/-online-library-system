import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1> online library system</h1>

      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
      </Routes>
    </div>
  );
}
