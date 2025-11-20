import React from 'react'
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <h1>libary system</h1>
      <Route path="/books" element={<><NavBar /><BrowseBooks /></>} />
    </div>
  )
}

export default App
