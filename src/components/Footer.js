import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Recipe Finder</h3>
          <p>
            Recipe Finder is your ultimate destination for discovering and
            sharing delicious recipes.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/recipe">Recipes</a>
            </li>
            <li>
              <a href="/contact">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/recipefinder">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/recipefinder">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/recipefinder">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
