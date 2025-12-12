import React from "react";
import { useParams } from "react-router-dom";
import guides from "../data/cookingGuidesData";
import "./GuideDetail.css";

const GuideDetail = () => {
  const { id } = useParams();
  const guide = guides.find((g) => g.id === Number(id));

  // If no guide found
  if (!guide) {
    return <h1 className="not-found">Guide Not Found</h1>;
  }

  return (
    <div className="guide-detail-page">
      {/* HERO IMAGE */}
      <div className="guide-hero">
        <img src={guide.image} alt={guide.title} />
        <div className="guide-hero-content">
          <h1>{guide.title}</h1>
          <p>{guide.shortDescription}</p>
        </div>
      </div>

      {/* CONTENT BODY */}
      <div className="guide-content">
        {/* LEFT SIDE */}
        <div className="guide-left">
          <h2>Overview</h2>
          <p>{guide.longDescription}</p>

          <h2>Steps</h2>
          <ol>
            {(guide.steps || []).map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          <h2>Tips</h2>
          <ul>
            {(guide.tips || []).map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE PANEL */}
        <div className="guide-right">
          <div className="guide-info-card">
            <h3>Guide Info</h3>
            <p>
              <strong>Category:</strong> {guide.category}
            </p>
            <p>
              <strong>Difficulty:</strong> {guide.difficulty}
            </p>
            <p>
              <strong>Time:</strong> {guide.time}
            </p>
          </div>

          <div className="guide-info-card">
            <h3>Tools Needed</h3>
            {(guide.tools || []).map((tool, i) => (
              <span key={i} className="tool-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetail;
