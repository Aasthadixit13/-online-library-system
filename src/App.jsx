import React from 'react'
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <h1>libary system</h1>
      <Route path="/" element={<><NavBar /><Home /></>} />
      <Route path="/books" element={<><NavBar /><BrowseBooks /></>} />
        <Route path="/books/:category" element={<><NavBar /><BrowseBooks /></>} />
        <Route path="/book/:id" element={<><NavBar /><BookDetails /></>} />
        <Route path="*" element={<NotFound />} />
      
    </div>
  )
}

export default App
