import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center mx-auto max-w-screen-lg">
        <Link to="/" className="text-white font-bold text-xl">
          Recipa
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
          >
            Contact
          </Link>
          <Link
            to="/recipes"
            className="text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
          >
            Recipes
          </Link>
          <Link
            to="/favourites"
            className="text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
          >
            Favourites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
