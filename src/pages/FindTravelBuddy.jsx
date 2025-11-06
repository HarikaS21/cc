import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {
  Users,
  UserPlus,
  Plane,
  Calendar,
  MapPin,
  Phone,
  Mail,
  FileText,
  Luggage,
  MessageCircle,
  ArrowLeft,
  Send,
  Clock,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./FindTravelBuddy.css";

// ✅ Import Lottie animations
import companionAnim from "../assets/companion.json";
import lookingAnim from "../assets/looking.json";
import registerImg from "../assets/register.png";
import registerImg2 from "../assets/register2.png";

export default function FindTravelBuddy() {
  const [view, setView] = useState("main");
  const [userType, setUserType] = useState("");
  const [chatWith, setChatWith] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    date: "",
    flightNumber: "",
    departureTime: "",
    profileImage: "",
    offerLuggage: false,
    offerCompanion: false,
    luggageDetails: "",
    price: "",
  });

  const [companions, setCompanions] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+91 98765 43210",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      from: "Mumbai (BOM)",
      to: "Delhi (DEL)",
      date: "2025-11-15",
      flightNumber: "AI 101",
      departureTime: "10:30 AM",
      luggageOffered: true,
      companionOffered: true,
      price: "₹2,500",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      email: "rajesh.k@example.com",
      phone: "+91 98765 43211",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      from: "Bangalore (BLR)",
      to: "Hyderabad (HYD)",
      date: "2025-11-20",
      flightNumber: "6E 345",
      departureTime: "02:15 PM",
      luggageOffered: true,
      companionOffered: false,
      price: "₹1,500",
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya.s@example.com",
      phone: "+91 98765 43212",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      from: "Chennai (MAA)",
      to: "Kolkata (CCU)",
      date: "2025-11-25",
      flightNumber: "SG 456",
      departureTime: "06:00 AM",
      luggageOffered: false,
      companionOffered: true,
      price: "Free",
    },
    {
      id: 4,
      name: "Amit Patel",
      email: "amit.p@example.com",
      phone: "+91 98765 43213",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      from: "Pune (PNQ)",
      to: "Goa (GOI)",
      date: "2025-12-01",
      flightNumber: "UK 789",
      departureTime: "11:45 AM",
      luggageOffered: true,
      companionOffered: true,
      price: "₹2,000",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userType === "companion") {
      const newCompanion = {
        id: companions.length + 1,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        image:
          formData.profileImage ||
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        from: formData.from,
        to: formData.to,
        date: formData.date,
        flightNumber: formData.flightNumber,
        departureTime: formData.departureTime,
        luggageOffered: formData.offerLuggage,
        companionOffered: formData.offerCompanion,
        price: formData.price || "Free",
      };
      setCompanions((prev) => [...prev, newCompanion]);
      alert("Profile added successfully! You are now listed as a companion.");
      setView("main");
      resetForm();
    } else {
      setView("companions");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      from: "",
      to: "",
      date: "",
      flightNumber: "",
      departureTime: "",
      profileImage: "",
      offerLuggage: false,
      offerCompanion: false,
      luggageDetails: "",
      price: "",
    });
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() && chatWith) {
      const companionId = chatWith.id;
      setMessages((prev) => ({
        ...prev,
        [companionId]: [
          ...(prev[companionId] || []),
          {
            text: currentMessage,
            sender: "user",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      }));
      setCurrentMessage("");

      setTimeout(() => {
        setMessages((prev) => ({
          ...prev,
          [companionId]: [
            ...(prev[companionId] || []),
            {
              text: "Thanks for reaching out! I'd be happy to discuss the travel details with you.",
              sender: "companion",
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ],
        }));
      }, 1000);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // =============================
  // MAIN VIEW (With Lottie)
  // =============================
  if (view === "main") {
    return (
      <div className="find-travel-buddy-container pt-15">
        <Navbar />

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu-content">
              <button
                className="mobile-nav-item"
                onClick={() => {
                  setUserType("companion");
                  setView("form");
                  setIsMobileMenuOpen(false);
                }}
              >
                I'm a Companion
              </button>
              <button
                className="mobile-nav-item"
                onClick={() => {
                  setUserType("looking");
                  setView("form");
                  setIsMobileMenuOpen(false);
                }}
              >
                Looking for a Companion
              </button>
            </div>
          </div>
        )}

        <section className="hero-section">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="hero-title"
          >
            Find Your Travel Buddy
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="hero-description"
          >
            Choose your role and start connecting with verified travel companions
          </motion.p>

          <div className="options-grid">
            {/* Companion Card */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              onClick={() => {
                setUserType("companion");
                setView("form");
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="option-card companion-option"
            >
              <div className="animation-container">
                <Lottie
                  animationData={companionAnim}
                  loop
                  className="lottie-animation"
                />
                <div className="animation-overlay" />
              </div>

              <div className="option-content">
                <p className="option-text">
                  Offer your companionship services and help travelers on their journeys
                </p>
                <h2 className="option-title">I'M A COMPANION</h2>
              </div>
            </motion.div>

            {/* Looking for Companion Card */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              onClick={() => {
                setUserType("looking");
                setView("form");
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="option-card looking-option"
            >
              <div className="animation-container">
                <Lottie
                  animationData={lookingAnim}
                  loop
                  className="lottie-animation"
                />
                <div className="animation-overlay" />
              </div>

              <div className="option-content">
                <p className="option-text">
                  Find verified companions to join you on your travel adventures
                </p>
                <h2 className="option-title">LOOKING FOR A COMPANION</h2>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Form View
  if (view === "form") {
    return (
      <div className="find-travel-buddy-container">
        <Navbar />

        <section className="form-section">
          <div className="form-container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="form-header"
            >
              <button
                onClick={() => setView("main")}
                className="back-button"
              >
                <ArrowLeft className="button-icon" />
                <span>Back to options</span>
              </button>
              <div className="form-image-container">
                <img
                  src={userType === "companion" ? registerImg : registerImg2}
                  alt="Travel"
                  className="form-image"
                />
              </div>
              <h1 className="form-title">
                {userType === "companion" ? "Register as Companion" : "Find Your Companion"}
              </h1>
              <p className="form-subtitle">
                {userType === "companion"
                  ? "Fill in your details to offer companionship services"
                  : "Provide your travel details to find the perfect companion"}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="form-card"
            >
              <form onSubmit={handleSubmit} className="travel-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">
                      <Mail className="label-icon" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Mail className="label-icon" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Phone className="label-icon" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <FileText className="label-icon" />
                      Profile Image URL *
                    </label>
                    <input
                      type="url"
                      required
                      name="profileImage"
                      value={formData.profileImage}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <MapPin className="label-icon" />
                      From (City/Airport) *
                    </label>
                    <input
                      type="text"
                      required
                      name="from"
                      value={formData.from}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Mumbai (BOM)"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Plane className="label-icon" />
                      To (City/Airport) *
                    </label>
                    <input
                      type="text"
                      required
                      name="to"
                      value={formData.to}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Delhi (DEL)"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Calendar className="label-icon" />
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      required
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Plane className="label-icon" />
                      Flight Number *
                    </label>
                    <input
                      type="text"
                      required
                      name="flightNumber"
                      value={formData.flightNumber}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="AI 101"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Clock className="label-icon" />
                      Departure Time *
                    </label>
                    <input
                      type="time"
                      required
                      name="departureTime"
                      value={formData.departureTime}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  {userType === "companion" && (
                    <div className="form-group">
                      <label className="form-label">
                        <FileText className="label-icon" />
                        Price (Optional)
                      </label>
                      <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="₹2,500 or Free"
                      />
                    </div>
                  )}
                </div>

                {userType === "companion" && (
                  <div className="offer-section">
                    <h3 className="offer-title">
                      <CheckCircle className="title-icon" />
                      What I Can Offer
                    </h3>

                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="offerLuggage"
                          checked={formData.offerLuggage}
                          onChange={handleInputChange}
                          className="checkbox-input"
                        />
                        <div className="checkbox-content">
                          <Luggage className="checkbox-icon" />
                          <span className="checkbox-text">
                            I can carry additional luggage
                          </span>
                        </div>
                      </label>

                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="offerCompanion"
                          checked={formData.offerCompanion}
                          onChange={handleInputChange}
                          className="checkbox-input"
                        />
                        <div className="checkbox-content">
                          <Users className="checkbox-icon" />
                          <span className="checkbox-text">
                            I can be a travel companion
                          </span>
                        </div>
                      </label>
                    </div>

                    {formData.offerLuggage && (
                      <div className="luggage-details">
                        <label className="form-label">
                          Luggage Details
                        </label>
                        <textarea
                          name="luggageDetails"
                          value={formData.luggageDetails}
                          onChange={handleInputChange}
                          rows={3}
                          className="form-textarea"
                          placeholder="Weight limit, dimensions, special conditions..."
                        />
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-button"
                >
                  {userType === "companion" ? "Submit Details" : "Find Companions"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Companions List View
  if (view === "companions") {
    return (
      <div className="find-travel-buddy-container">
        <Navbar />

        <section className="companions-section">
          <div className="companions-container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="companions-header"
            >
              <button
                onClick={() => setView("main")}
                className="back-button"
              >
                <ArrowLeft className="button-icon" />
                <span>Back to Home</span>
              </button>
              <h1 className="companions-title">
                Available Companions
              </h1>
              <p className="companions-subtitle">
                Find the perfect travel buddy for your journey
              </p>
            </motion.div>

            <div className="companions-grid">
              {companions.map((companion, index) => (
                <motion.div
                  key={companion.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="companion-card"
                >
                  <div className="companion-image-container">
                    <img
                      src={companion.image}
                      alt={companion.name}
                      className="companion-image"
                    />
                  </div>

                  <div className="companion-content">
                    <h3 className="companion-name">{companion.name}</h3>

                    <div className="companion-details">
                      <div className="detail-item">
                        <MapPin className="detail-icon" />
                        <span>{companion.from} → {companion.to}</span>
                      </div>
                      <div className="detail-item">
                        <Calendar className="detail-icon" />
                        <span>{companion.date}</span>
                      </div>
                      <div className="detail-item">
                        <Plane className="detail-icon" />
                        <span>{companion.flightNumber}</span>
                      </div>
                      <div className="detail-item">
                        <Clock className="detail-icon" />
                        <span>{companion.departureTime}</span>
                      </div>
                    </div>

                    <div className="companion-badges">
                      {companion.luggageOffered && (
                        <span className="badge luggage-badge">
                          <Luggage className="badge-icon" />
                          Luggage
                        </span>
                      )}
                      {companion.companionOffered && (
                        <span className="badge companion-badge">
                          <Users className="badge-icon" />
                          Companion
                        </span>
                      )}
                    </div>

                    <div className="companion-price">{companion.price}</div>

                    <button
                      onClick={() => {
                        setChatWith(companion);
                        setView("chat");
                      }}
                      className="chat-button"
                    >
                      <MessageCircle className="button-icon" />
                      Chat Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Chat View
  if (view === "chat") {
    return (
      <div className="find-travel-buddy-container">
        <Navbar />

        <section className="chat-section">
          <div className="chat-container-wrapper">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <button
                onClick={() => setView("companions")}
                className="back-button"
              >
                <ArrowLeft className="button-icon" />
                <span>Back to Companions</span>
              </button>

              <div className="chat-interface">
                <div className="chat-header">
                  <img
                    src={chatWith?.image}
                    alt={chatWith?.name}
                    className="chat-avatar"
                  />
                  <div className="chat-user-info">
                    <h3 className="chat-user-name">{chatWith?.name}</h3>
                    <p className="chat-user-route">
                      {chatWith?.from} → {chatWith?.to}
                    </p>
                  </div>
                </div>

                <div className="chat-messages">
                  {(messages[chatWith?.id] || []).map((msg, idx) => (
                    <div
                      key={idx}
                      className={`message ${msg.sender === 'user' ? 'user-message' : 'companion-message'}`}
                    >
                  <div className="message-bubble">
                    <p className="message-text">{msg.text}</p>
                    <span className="message-time">{msg.time}</span>
                  </div>
                </div>
                  ))}
              </div>

              <div className="chat-input-area">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="chat-input"
                />
                <button
                  onClick={handleSendMessage}
                  className="send-button"
                >
                  <Send className="button-icon" />
                </button>
              </div>
          </div>
        </motion.div>
      </div>
        </section >

      <Footer />
      </div >
    );
  }

  return null;
}