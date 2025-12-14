import React from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogData";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-title">Cooking Blogs & Tips</h1>
      <p className="blog-subtitle">
        Learn cooking with simple guides, tips, and expert advice
      </p>

      <div className="blog-grid">
        {blogData.map((blog) => (
          <Link to={`/blog/${blog.id}`} className="blog-link" key={blog.id}>
            <div className="blog-card">
              <img src={blog.image} alt={blog.title} />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <span className="blog-meta">
                  {blog.author} • {blog.date}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
