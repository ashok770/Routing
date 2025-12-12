import React from "react";
import { useParams } from "react-router-dom";
import cookingGuides from "../data/cookingGuidesData";
import "./GuideDetail.css";

const GuideDetail = () => {
  const { id } = useParams();
  const guide = cookingGuides.find((g) => g.id === Number(id));

  if (!guide) {
    return <h2 className="guide-not-found">Guide Not Found</h2>;
  }

  return (
    <div className="guide-detail-page">
      {/* HERO IMAGE */}
      <div className="guide-hero">
        <img src={guide.image} alt={guide.title} />
        <div className="guide-hero-content">
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="guide-detail-container">
        <h2>About This Guide</h2>
        <p>{guide.description}</p>

        <button className="guide-read-btn">⭐ Save to Favorites</button>
      </div>
    </div>
  );
};

export default GuideDetail;
