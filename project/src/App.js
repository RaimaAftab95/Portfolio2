import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import { Login } from "./Pages/Login";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
// import ProductDetailtrial from "./Pages/ProductDetailtrial";
import Cart from "./Pages/Cart";
import Navbar from "./components/MyNav";
// import './App.css';
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        {/* <Route path="/productDetailtrial/:id" element={<ProductDetailtrial />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/button" element={<MyButton>Mark as done</MyButton>} /> */}
        {/* <Route path="/Mybutton" element={<MyButton />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
