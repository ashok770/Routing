import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogDetail from "../pages/BlogDetail";
import Register from "../pages/Register";

import Home from "../pages/Home";
import Recipes from "../pages/Recipes/Recipes";
import RecipeDetail from "../pages/RecipeDetail";
import CookingGuides from "../pages/CookingGuides";
import GuideDetail from "../pages/GuideDetail";

import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />

      {/* ⭐ IMPORTANT ROUTE FOR DYNAMIC RECIPE */}
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/guides" element={<CookingGuides />} />
      <Route path="/guide/:id" element={<GuideDetail />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
