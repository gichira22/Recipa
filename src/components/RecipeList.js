import React from "react";

const RecipeList = (getMeal) => {
  console.log(getMeal.data);
  return (
    <>
      <div className="card">
        <img src={getMeal.data.strMealThumb} alt={getMeal.data.strMeal}></img>
        <div className="info">
          <h2>{getMeal.data.strMeal}</h2>
          <p>{getMeal.data.strArea}</p>
          {/* Fetches data by area */}
        </div>
        <div className="recipe">
          <h2>Recipe</h2>
          <p>{getMeal.data.strInstructions}</p>

          <img src={getMeal.data.strMealThumb} alt={getMeal.data.strMeal}></img>
          {/* Returns an image for the meal searched */}

          <a href={getMeal.data.strSource}>Watch tutorial</a>
          {/* A link to watch a video tutorial */}
        </div>
      </div>
    </>
  );
};

export default RecipeList;
