import React from "react";
import "./Profile.css";
import avatar from "../assets/images/default-avatar.png";

export default function Profile() {
  // TEMP: role simulation (later from backend)
  const role = "user"; // change to "admin" to test

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Profile Header */}
        <div className="profile-header">
          <img src={avatar} alt="Profile Avatar" className="profile-avatar" />

          <h2>{role === "admin" ? "Admin User" : "CookMate User"}</h2>

          <span className={`role-badge ${role}`}>
            {role === "admin" ? "Admin" : "User"}
          </span>
        </div>

        {/* USER PROFILE */}
        {role === "user" && (
          <div className="profile-section">
            <h3>My Information</h3>

            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> john@example.com
            </p>

            <div className="profile-actions">
              <button>Edit Profile</button>
              <button className="logout">Logout</button>
            </div>
          </div>
        )}

        {/* ADMIN PROFILE */}
        {role === "admin" && (
          <div className="profile-section">
            <h3>Admin Controls</h3>

            <p>
              <strong>Email:</strong> admin@cookmate.com
            </p>
            <p>
              <strong>Role:</strong> System Administrator
            </p>

            <div className="profile-actions">
              <button>Go to Dashboard</button>
              <button className="logout">Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
