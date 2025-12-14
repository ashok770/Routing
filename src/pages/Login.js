import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [role, setRole] = useState("user");

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">🔐 Login to CookMate</h2>

        {/* Role Toggle */}
        <div className="role-toggle">
          <button
            className={role === "user" ? "active" : ""}
            onClick={() => setRole("user")}
          >
            User Login
          </button>
          <button
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin Login
          </button>
        </div>

        {/* Login Form */}
        <form className="login-form">
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="login-btn">
            Login as {role}
          </button>
        </form>

        {/* Existing note */}
        <p className="login-note">
          {role === "admin"
            ? "Only authorized admins can access the admin panel."
            : "Welcome back! Login to explore recipes and blogs."}
        </p>

        {/* ✅ STEP 4: Register link (USER ONLY) */}
        {role === "user" && (
          <p className="login-note">
            Don’t have an account? <Link to="/register">Register here</Link>
          </p>
        )}
      </div>
    </div>
  );
}
