import React from 'react'
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";

const App = () => {
  return (
    <div>
      <h1>libary system</h1>
      <Route path="/" element={<><NavBar /><Home /></>} />
      <Route path="/books" element={<><NavBar /><BrowseBooks /></>} />
        <Route path="/books/:category" element={<><NavBar /><BrowseBooks /></>} />
      
    </div>
  )
}

export default App
