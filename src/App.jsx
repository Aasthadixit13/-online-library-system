


import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        {/* Routes WITH NavBar */}
        <Route path="/" element={<><NavBar /><Home /></>} />
        <Route path="/books" element={<><NavBar /><BrowseBooks /></>} />
        <Route path="/books/:category" element={<><NavBar /><BrowseBooks /></>} />
        <Route path="/book/:id" element={<><NavBar /><BookDetails /></>} />
        <Route path="/add" element={<><NavBar /><AddBook /></>} />

        {/* Route WITHOUT NAVBAR */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
