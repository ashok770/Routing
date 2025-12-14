import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">📝 Create Your CookMate Account</h2>

        <form className="register-form">
          <input type="text" placeholder="Full Name" required />

          <input type="email" placeholder="Email Address" required />

          <input type="password" placeholder="Password" required />

          <input type="password" placeholder="Confirm Password" required />

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="register-note">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
