import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes/Recipes";
import Guides from "../pages/Guides";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import RecipeDetail from "../pages/RecipeDetail";
import Admin from "../pages/Admin";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<RecipeDetail />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default AppRoutes;
