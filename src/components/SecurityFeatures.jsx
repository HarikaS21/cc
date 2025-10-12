import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaShieldAlt,
  FaUserCheck,
  FaSearch,
  FaMapMarkedAlt
} from "react-icons/fa";
import securityImage from "../assets/security.png"; // your image
import "./SecurityFeatures.css"; // import CSS

const features = [
  {
    icon: <FaUserCheck />,
    title: "Screened & Verified",
    desc: "All companions undergo thorough screening and ID verification to ensure complete trust and safety."
  },
  {
    icon: <FaSearch />,
    title: "Background Checks",
    desc: "We perform strict background checks to ensure every companion meets the highest safety standards."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Real-Time Tracking",
    desc: "Stay updated with live tracking throughout the journey — for extra confidence and peace of mind."
  },
  {
    icon: <FaShieldAlt />,
    title: "24/7 Safety Support",
    desc: "Our safety team is always available — day or night — to assist and monitor your travel experience."
  }
];

export default function SecurityFeatures() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="security-section">
      <div className="glow-background"></div>

      <div className="security-container">
        {/* Heading */}
        <div className="security-heading">
          <h2>Safety is Our Priority</h2>
          <p>
            We blend trust, technology, and transparency to make every journey
            feel secure, verified, and worry-free.
          </p>
        </div>

        {/* Features left, Image right */}
        <div className="security-content">
          {/* Left Features */}
          <div className="features-left">
            {features.map((f, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="feature-card"
              >
                <div className="feature-orb"></div>
                <div className="feature-content">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="image-right" data-aos="fade-left">
            <img src={securityImage} alt="Security Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}
