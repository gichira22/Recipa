import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";

const Recipe = () => {
  const [myRecipe, setMyRecipe] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
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
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setError(true);
      });
  }, []);

  return (
    <div className="main">
      <div className="heading">
        <h1>Welcome to RECIPE-FINDER!</h1>
        <h4>
          Welcome to our recipe finder application! Whether you're looking for a
          quick meal idea or planning a gourmet dinner, we've got you covered.
        </h4>
      </div>
      <div className="container">
        {error ? (
          <p className="notFound">
            Sorry, there was an error fetching recipes. Please try again later.
          </p>
        ) : myRecipe.length === 0 ? (
          <p className="notFound">
            No recipes found. Please check back later for updates.
          </p>
        ) : (
          myRecipe.map((res, index) => <RecipeList key={index} data={res} />)
        )}
      </div>
    </div>
  );
};

export default Recipe;
