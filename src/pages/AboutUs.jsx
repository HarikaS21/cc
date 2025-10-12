import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      
      {/* Hero Section */}
      <section className="aboutus-hero">
        <h1 className="aboutus-title">
          About <span className="aboutus-highlight">CompanionConnect</span>
        </h1>
        <p className="aboutus-description">
          CompanionConnect is a trusted platform to connect Indian parents traveling to the US with verified companions. Our mission is to make travel safe, easy, and worry-free by providing reliable, friendly, and verified travel companions.
        </p>
      </section>

      {/* Key Features */}
      <section className="aboutus-features">
        <div className="feature-card">
          <h2 className="feature-title">✅ Verified Companions</h2>
          <p className="feature-text">
            All companions are verified and background-checked for safety and peace of mind.
          </p>
        </div>
        <div className="feature-card">
          <h2 className="feature-title">💬 Secure Chat</h2>
          <p className="feature-text">
            Communicate directly within the app using our secure messaging platform before your trip.
          </p>
        </div>
        <div className="feature-card">
          <h2 className="feature-title">🎒 Optional Assistance</h2>
          <p className="feature-text">
            Need help with luggage or airport guidance? Companions assist throughout your journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
