import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="logo">
          CookMate
        </Link>

        {/* MENU LINKS */}
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
