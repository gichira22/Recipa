// // import React from "react";
// // // import "./App.css";
// import Recipe from "./components/Recipe";
// import "./Style.css";

// // function App() {
// //   return (
// //     <div>
// //       <Recipe />
// //     </div>
// //   );
// // }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import "./Style.css";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
const Recipes = () => <h1>Recipes Page</h1>;
const Favourites = () => <h1>Favourites Page</h1>;

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
        <Recipe />
      </div>
    </Router>
  );
};

export default App;
