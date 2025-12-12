import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../data/recipesData";
import "./RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return <h2 className="not-found">Recipe Not Found</h2>;
  }

  return (
    <div className="recipe-detail-page">
      {/* HERO BANNER */}
      <div className="recipe-hero">
        <img src={recipe.image} alt={recipe.title} />
        <div className="recipe-hero-content">
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </div>
      </div>

      <div className="recipe-detail-container">
        {/* LEFT SIDE CONTENT */}
        <div className="recipe-left">
          <h2 className="section-title">Ingredients</h2>
          <ul>
            {recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="section-title">Steps</h2>
          <ol>
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        {/* RIGHT SIDE INFO PANEL */}
        <div>
          <div className="info-card">
            <h3>Recipe Info</h3>
            <p>
              <strong>Category:</strong> {recipe.category}
            </p>
            <p>
              <strong>Servings:</strong> {recipe.servings}
            </p>
            <p>
              <strong>Cooking Time:</strong> {recipe.cookTime}
            </p>
          </div>

          <div className="info-card">
            <h3>Tags</h3>
            {recipe.tags?.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <button className="save-btn">⭐ Save to Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
