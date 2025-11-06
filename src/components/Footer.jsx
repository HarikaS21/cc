import React from "react";
import "./Footer.css";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaGooglePlay } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <h2>Ready to Travel with Peace of Mind?</h2>
        <p>Your trusted partner for seamless travel and luggage connections worldwide.</p>
        <button className="download-btn">
          <FaGooglePlay className="icon" />📱 Download on Play Store
        </button>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        {/* About Section */}
        <div className="footer-column">
          <h3>About CompanionConnect</h3>
          <p>
            CompanionConnect helps travelers and senders connect effortlessly —
            making global travel more affordable, secure, and convenient.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <ul className="contact-list">
            <li><FaEnvelope className="icon" /> support@companionconnect.com</li>
            <li><FaPhoneAlt className="icon" /> +91 98765 43210</li>
            <li><FaLinkedin className="icon" /> linkedin.com/company/companionconnect</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 CompanionConnect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;