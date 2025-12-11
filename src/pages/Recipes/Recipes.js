import React from "react";
import "./Recipes.css";

const recipes = [
  {
    id: 1,
    title: "Chole Bhature",
    image: "./images/cholebatrue.jpg",
  },
  {
    id: 2,
    title: "Pani Puri",
    image: "./images/panipuri.jpg",
  },
  {
    id: 3,
    title: "Vada Pau",
    image: "./images/vadapau.jpg",
  },
];

const Recipes = () => {
  return (
    <div className="recipes-page">
      <h1>All Recipes</h1>

      <input
        type="text"
        className="search-bar"
        placeholder="Search recipes..."
      />

      <div className="filter-buttons">
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
        <button>Dessert</button>
      </div>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <button className="view-btn">View Recipe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
