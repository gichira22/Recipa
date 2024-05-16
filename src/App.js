import React from "react";
import "./Style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recipe from "./components/Recipe";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import LoginForm from "./components/LoginPage";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Search from "./components/Search";
import { CartProvider } from "./components/ShoppingCart";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
