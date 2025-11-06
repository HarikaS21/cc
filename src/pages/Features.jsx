import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import "./Features.css";

// Import animations
import verification from "../assets/verification.json";
import chat from "../assets/chat.json";
import trip from "../assets/trip.json";
import bag from "../assets/bag.json";

const Features = () => {
  return (
    <section className="features-section">
      {/* Header */}
      <div className="features-header">
        <h2>✨ Powerful Features for Smarter Travel</h2>
        <p>
          We’re building something amazing! Each feature is designed to make
          your travel experience smoother, smarter, and safer.
        </p>
      </div>

      {/* ---------- 1. Find Verified Companions ---------- */}
      <div className="feature-row">
        <div className="feature-text-box left-box">
          <h3>Find Verified Companions</h3>
          <p>
            Connect confidently with trusted travelers verified by our secure
            system. Every companion is authenticated to ensure a safe and
            reliable travel experience.
          </p>
        </div>

        <div className="feature-animation">
          <Lottie animationData={verification} loop={true} />
        </div>
      </div>

      {/* ---------- 2. Secure In-App Chat ---------- */}
      <div className="feature-row reverse">
        <div className="feature-animation">
          <Lottie animationData={chat} loop={true} />
        </div>

        <div className="feature-text-box right-box">
          <h3>Secure In-App Chat</h3>
          <p>
            Enjoy private, encrypted communication within our app. Your
            conversations remain completely confidential and safe from
            third-party access.
          </p>
        </div>
      </div>

      {/* ---------- 3. Trip Coordination ---------- */}
      <div className="feature-row">
        <div className="feature-text-box left-box">
          <h3>Trip Coordination</h3>
          <p>
            Plan and coordinate your journey with your companions effortlessly.
            Get reminders, manage itineraries, and stay in sync every step of
            the way.
          </p>
        </div>

        <div className="feature-animation">
          <Lottie animationData={trip} loop={true} />
        </div>
      </div>

      {/* ---------- 4. Extra Luggage Assistance ---------- */}
      <div className="feature-row reverse">
        <div className="feature-animation">
          <Lottie animationData={bag} loop={true} />
        </div>

        <div className="feature-text-box right-box">
          <h3>🧳 Extra Luggage Assistance</h3>
          <p>
            Need help with extra bags? Our innovative luggage assistance
            connects you with verified travelers who can securely and
            affordably transport your additional items with care.
          </p>
        </div>
      </div>

      {/* ---------- Back to Home ---------- */}
      <div className="features-footer">
        <Link to="/">Back to Home</Link>
      </div>
    </section>
  );
};

export default Features;
