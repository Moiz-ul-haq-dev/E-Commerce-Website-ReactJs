import React from "react";
import "./App.css";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import ContactPage from "./pages/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/cart";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
