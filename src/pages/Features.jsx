import React from "react";
import { Link } from "react-router-dom";
import "./Features.css"; // Import the CSS file

const Features = () => {
  return (
    <div className="features-page min-h-screen flex flex-col text-white overflow-hidden">
      {/* Main Section */}
      <section className="features-section flex flex-col items-center justify-center flex-grow text-center px-6 py-20">
        <div className="features-card">
          <h1 className="features-title">
            ✨ Features Coming Soon
          </h1>

          <p className="features-desc">
            We’re building something amazing! Our new features are being crafted 
            to make your experience smarter, faster, and more exciting.
          </p>

          <div className="features-buttons">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
            <button className="btn-secondary">
              Notify Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
