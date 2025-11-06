import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Works from "./components/Works";
import Morefeatures from "./components/Morefeatures";
import Users from "./components/Users";
import Security from "./components/SecurityFeatures";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

// Pages
import Features from "./pages/Features";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import FindTravelBuddy from "./pages/FindTravelBuddy";
import Signup from "./pages/SignUp";
import Login from "./pages/Login"; 


// Styles
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  return (
    <Router>
      <div className="App overflow-x-hidden">
        {/* Navbar visible on all pages */}
        <Navbar />

        <Routes>
          {/* 🏠 Home Page (All Sections) */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Works />
                <Morefeatures />
                <Users />
                <Security />
                <Faq />
                <Footer />
              </>
            }
          />

          {/* 🧳 Find Travel Buddy Page */}
          <Route
            path="/findtravelbuddy"
            element={
              <>
                <FindTravelBuddy />
              </>
            }
          />

          {/* ✈️ Signup Page */}
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />

          {/* 🔑 Login Page */}
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          {/* 💡 Features - Future Page Placeholder */}
          <Route
            path="/features"
            element={
              <>
               
                <Features />
                <Footer />
              </>
            }
          />

          {/* 🧍 About Us Page */}
          <Route
            path="/about-us"
            element={
              <>
                <AboutUs />
                <Footer />
              </>
            }
          />

          {/* 📞 Contact Us Page */}
          <Route
            path="/contact-us"
            element={
              <>
                <ContactUs />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
