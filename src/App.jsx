import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

// Lazy load pages for better performance
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Documents = lazy(() => import("./components/Documents"));
const Products = lazy(() => import("./components/Products"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <Router>
      <div className="app-root">
        {/* ✅ Navbar only here */}
        <Navbar />
        <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
