import React, { useState } from "react";
import RecipeList from "./RecipeList";
const Recipe = () => {
  const [search, setSearch] = useState();
  const [myRecipe, setMyRecipe] = useState([]);
  const searchRecipe = (evt) => {
    if (evt.key === "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyRecipe(data.meals || []);
        });
    }
  };
  return (
    <div className="main">
      <div className="heading">
        <h1>Welcome to RECIPE-FINDER!</h1>
        <h4>
          Welcome to our recipe finder application! Whether you're looking for a
          quick meal idea or planning a gourmet dinner, we've got you covered.
        </h4>
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
        {myRecipe.length === 0 ? (
          <p className="notFound">
            {" "}
            Use our search bar to discover a world of delicious recipes and
            culinary inspiration. Happy cooking!
          </p>
        ) : (
          myRecipe.map((res, index) => {
            return <RecipeList key={index} data={res} />;
          })
        )}
      </div>
    </div>
  );
};

export default Recipe;
