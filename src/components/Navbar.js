import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/logo.png"; // <-- NEW

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO + TEXT */}
        <div className="brand">
          <img src={logo} alt="CookMate Logo" className="brand-logo" />
          <span className="brand-name">CookMate</span>
        </div>

        {/* NAV LINKS */}
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/guides">Cooking Guides</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
