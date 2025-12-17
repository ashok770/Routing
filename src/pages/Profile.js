import React, { useEffect, useState } from "react";
import "./Profile.css";
import avatar from "../assets/images/default-avatar.png";
import { getUserProfile } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getUserProfile();
        setUser(res.data.user);
      } catch (error) {
        // Token invalid or expired
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading profile...</h2>;
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Header */}
        <div className="profile-header">
          <img src={avatar} alt="Profile" className="profile-avatar" />
          <h2>{user.name}</h2>
          <span className={`role-badge ${user.role}`}>{user.role}</span>
        </div>

        {/* Profile Info */}
        <div className="profile-section">
          <h3>My Information</h3>

          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <div className="profile-actions">
            <button>Edit Profile</button>
            <button
              className="logout"
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
