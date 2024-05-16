import React, { useState } from "react";
import RecipeList from "./RecipeList";
const Recipe = () => {
  const [search, setSearch] = useState();
  const [myRecipe, setMyRecipe] = useState([]);
  const [error, setError] = useState(false);
  const searchRecipe = (evt) => {
    if (evt.key === "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.meals) {
            setMyRecipe(data.meals);
            setError(false);
          } else {
            setMyRecipe([]);
            setError(true);
          }
          // setMyRecipe(data.meals || []);
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
          setError(true);
        });
    }
  };
  return (
    <div className="main">
      <div className="heading">
        <h1>Welcome to RECIPA</h1>
        <h4>Your favourite recipe finder assistant</h4>
      </div>
      <div className="searchButton">
        <input
          type="search"
          className="searchBar"
          placeholder="Enter meal name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyPress={searchRecipe}
        ></input>
      </div>
      <div className="container">
        {error ? (
          <p className="notFound">Sorry, recipe not found. Try again.</p>
        ) : (
          myRecipe.length === 0 && (
            <p className="notFound">
              {" "}
              Use search bar to discover a world of delicious recipes and
              culinary inspiration. Happy cooking!
            </p>
          )
        )}
        {myRecipe.map((res, index) => (
          <RecipeList key={index} data={res} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
