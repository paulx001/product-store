import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import WishlistPage from "./pages/WishlistPage";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div classname="min-h-screen bg-base-200 transition-colors duration-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist/:id" element={<WishlistPage />} />
      </Routes>
    </div>
  )
 
}

export default App
