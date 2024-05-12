// import React from "react";
// // import "./App.css";
import Recipe from "./components/Recipe";
import "./Style.css";

// function App() {
//   return (
//     <div>
//       <Recipe />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

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
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/favourites" component={Favourites} />
        </main>
        <Recipe />
      </div>
    </Router>
  );
};

export default App;
