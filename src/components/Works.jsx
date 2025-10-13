import React from "react";
import Lottie from "lottie-react";
import "./Works.css";
import thinking from "../assets/thinking.json"; // your Lottie animation in src/assets

function Works() {
  return (
    <section className="works-section" id="how-it-works">
      <h1 className="works-heading">Travel Flow</h1>

      <div className="works-container">
        {/* Left Column */}
        <div className="works-column left">
          {/* Step 1 - Travel Details */}
          <div className="work-step">
            <div className="icon">✈️</div>
            <div className="work-text">
              <h3>Enter Travel Details</h3>
              <p>
                Input your parents’ flight date, airline, and US destination to
                find the perfect companion for their journey.
              </p>
            </div>
          </div>

          {/* Step 2 - Verified Companions */}
          <div className="work-step">
            <div className="icon">🧑‍🤝‍🧑</div>
            <div className="work-text">
              <h3>Find Verified Companions</h3>
              <p>
                Connect only with verified and trusted travelers who share the
                same route and timing.
              </p>
            </div>
          </div>
        </div>

        {/* Center Animation */}
        <div className="works-center">
          <Lottie animationData={thinking} loop={true} />
        </div>

        {/* Right Column */}
        <div className="works-column right">
          {/* Step 3 - Secure Chat */}
          <div className="work-step">
            <div className="icon">📱</div>
            <div className="work-text">
              <h3>Secure In-App Chat</h3>
              <p>
                Chat safely with companions using our encrypted chat feature to
                coordinate travel details smoothly.
              </p>
            </div>
          </div>

          {/* Step 4 - Luggage Help */}
          <div className="work-step">
            <div className="icon">🧳</div>
            <div className="work-text">
              <h3>Optional Luggage Help</h3>
              <p>
                Companions can optionally help with small luggage or essentials
                — secure, transparent, and trustworthy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
