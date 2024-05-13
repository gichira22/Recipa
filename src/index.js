import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import RecipeList from "./components/RecipeList";
import Contacts from "./components/Contacts";
import LoginForm from "./components/LoginForm";
import FeedbackForm from "./components/FeedbackForm";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import { CartProvider } from "./components/ShoppingCart";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/recipe" element={<RecipeList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  </CartProvider>
);
