import React from "react";
import "../Style.css";

function Home() {
  return (
    <div className="home-container">
      {" "}
      <h1 className="home-title">
        Welcome to Recipa, Your recipe finder assistant
      </h1>
      <p className="home-description">
        Looking for delicious recipes? You've come to the right place! Browse
        our extensive collection of recipes to find inspiration for your next
        meal.
      </p>
      <p className="home-description">
        Whether you're a cooking enthusiast or just getting started in the
        kitchen, our app has something for everyone. From quick and easy meals
        to gourmet delights, discover recipes that suit your taste and dietary
        preferences.
      </p>
      <p className="home-description">
        Get started by exploring our recipe categories or using our search
        feature to find specific recipes.
      </p>
    </div>
  );
}

export default Home;
