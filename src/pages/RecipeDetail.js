import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipesData";
import "./RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe Not Found</h2>;
  }

  return (
    <div className="recipe-detail-container">
      <h1 className="recipe-title">{recipe.title}</h1>

      <img src={recipe.image} alt={recipe.title} className="recipe-image" />

      <p className="recipe-description">{recipe.description}</p>

      {/* Ingredients */}
      <h2 className="section-title">Ingredients</h2>
      <ul className="ingredients-list">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Steps */}
      <h2 className="section-title">Steps</h2>
      <ol className="steps-list">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <Link to="/recipes">
        <button className="back-btn">⬅ Back to Recipes</button>
      </Link>
    </div>
  );
};

export default RecipeDetail;
