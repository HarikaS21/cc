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

  // =============================
  // MAIN VIEW (With Lottie)
  // =============================
  if (view === "main") {
    return (
      <div className="aboutus-container min-h-screen">
        <Navbar />

        <section className="aboutus-hero pt-32 pb-24 min-h-screen flex flex-col items-center text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="aboutus-title text-5xl md:text-7xl mb-6"
          >
            Find Your Travel Buddy
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="aboutus-description text-xl md:text-2xl max-w-3xl"
          >
            Choose your role and start connecting with verified travel companions
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-16">
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
              className="cursor-pointer group"
            >
              <div className="feature-card p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-primary to-primary/70">
                <div className="h-80 flex items-center justify-center relative overflow-hidden rounded-2xl mb-6 bg-[#0a0014]">
                  <Lottie
                    animationData={companionAnim}
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/70" />
                  {/* <UserPlus className="w-24 h-24 text-white relative z-10" /> */}
                </div>
                
                <p className="feature-text mb-6">
                  Offer your companionship services and help travelers on their journeys
                </p>
                <h2 className="feature-title mb-4">IAM A COMPANION</h2>
                
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
              className="cursor-pointer group"
            >
              <div className="feature-card p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-accent to-accent/70">
                <div className="h-80 flex items-center justify-center relative overflow-hidden rounded-2xl mb-6 bg-[#0a0014]">
                  <Lottie
                    animationData={lookingAnim}
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-accent/70" />
                  {/* <Users className="w-24 h-24 text-white relative z-10" /> */}
                </div>
              
                <p className="feature-text mb-6">
                  Find verified companions to join you on your travel adventures
                </p>
                 <h2 className="feature-title mb-5">LOOKING FOR A COMPANION</h2>
               
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // The rest (form view, companion list, chat view) remains the same — no changes required.
  // Paste them below as per your existing code if needed.

  // Form View
  if (view === "form") {
    return (
      <div className="aboutus-container min-h-screen">
        <Navbar />

        <section className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <button
                onClick={() => setView("main")}
                className="text-primary hover:text-accent mb-6 inline-flex items-center space-x-2 font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to options</span>
              </button>
              <div className="mb-6 h-48 w-full rounded-3xl overflow-hidden">
                <img
  src={userType === "companion" ? registerImg : registerImg2}
  alt="Travel"
  className="w-full h-full object-cover"
/>

              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">
                {userType === "companion" ? "Register as Companion" : "Find Your Companion"}
              </h1>
              <p className="text-xl text-muted-foreground">
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
              className="feature-card p-8 md:p-12 rounded-3xl shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
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

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
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

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
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

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <FileText className="w-4 h-4 inline mr-2" />
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

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
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

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <Plane className="w-4 h-4 inline mr-2" />
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

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
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

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <Plane className="w-4 h-4 inline mr-2" />
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

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
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
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        <FileText className="w-4 h-4 inline mr-2" />
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
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      What I Can Offer
                    </h3>
                    
                    <div className="space-y-4">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="offerLuggage"
                          checked={formData.offerLuggage}
                          onChange={handleInputChange}
                          className="checkbox-input"
                        />
                        <div className="flex items-center gap-2">
                          <Luggage className="w-5 h-5 text-primary" />
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
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="checkbox-text">
                            I can be a travel companion
                          </span>
                        </div>
                      </label>
                    </div>

                    {formData.offerLuggage && (
                      <div className="mt-4">
                        <label className="block text-sm font-semibold text-primary mb-2">
                          Luggage Details
                        </label>
                        <textarea
                          name="luggageDetails"
                          value={formData.luggageDetails}
                          onChange={handleInputChange}
                          rows={3}
                          className="form-input resize-none"
                          placeholder="Weight limit, dimensions, special conditions..."
                        />
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-btn"
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
      <div className="aboutus-container min-h-screen">
        <Navbar />

        <section className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <button
                onClick={() => setView("main")}
                className="text-primary hover:text-accent mb-6 inline-flex items-center space-x-2 font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">
                Available Companions
              </h1>
              <p className="text-xl text-muted-foreground">
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
                  <div className="companion-image-wrapper">
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
                        <MapPin className="w-4 h-4" />
                        <span>{companion.from} → {companion.to}</span>
                      </div>
                      <div className="detail-item">
                        <Calendar className="w-4 h-4" />
                        <span>{companion.date}</span>
                      </div>
                      <div className="detail-item">
                        <Plane className="w-4 h-4" />
                        <span>{companion.flightNumber}</span>
                      </div>
                      <div className="detail-item">
                        <Clock className="w-4 h-4" />
                        <span>{companion.departureTime}</span>
                      </div>
                    </div>

                    <div className="companion-badges">
                      {companion.luggageOffered && (
                        <span className="badge badge-luggage">
                          <Luggage className="w-3 h-3" />
                          Luggage
                        </span>
                      )}
                      {companion.companionOffered && (
                        <span className="badge badge-companion">
                          <Users className="w-3 h-3" />
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
                      className="chat-btn"
                    >
                      <MessageCircle className="w-5 h-5" />
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
      <div className="aboutus-container min-h-screen">
        <Navbar />

        <section className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <button
                onClick={() => setView("companions")}
                className="text-primary hover:text-accent mb-6 inline-flex items-center space-x-2 font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Companions</span>
              </button>

              <div className="chat-container">
                <div className="chat-header">
                  <img
                    src={chatWith?.image}
                    alt={chatWith?.name}
                    className="chat-avatar"
                  />
                  <div>
                    <h3 className="chat-name">{chatWith?.name}</h3>
                    <p className="chat-route">
                      {chatWith?.from} → {chatWith?.to}
                    </p>
                  </div>
                </div>

                <div className="chat-messages">
                  {(messages[chatWith?.id] || []).map((msg, idx) => (
                    <div
                      key={idx}
                      className={`message ${msg.sender === 'user' ? 'message-user' : 'message-companion'}`}
                    >
                      <div className="message-bubble">
                        <p>{msg.text}</p>
                        <span className="message-time">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="chat-input-container">
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
                    className="send-btn"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return null;
}