import React from "react";
import { Link } from "react-router-dom";
import "../Style.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/about" className="navbar-link">
        About Us
      </Link>
      <Link to="/recipe" className="navbar-link">
        Recipes
      </Link>
      <Link to="/contact" className="navbar-link">
        Contacts
      </Link>
      <Link to="/login" className="navbar-link navbar-link-blue">
        Login
      </Link>
      <Link to="/signup" className="navbar-link navbar-link-blue">
        Sign Up
      </Link>
      <Link to="/feedback" className="navbar-link">
        Feedback
      </Link>
    </div>
  );
};

export default Navbar;
