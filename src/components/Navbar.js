import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white font-bold">
          Recipa
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
          <Link to="/recipes" className="text-white">
            Recipes
          </Link>
          <Link to="/favourites" className="text-white">
            Favourites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
