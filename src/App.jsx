import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar"; // Navbar
import Home from "./components/Home";
import Works from "./components/Works";
import Morefeatures from "./components/Morefeatures";
import Users from "./components/Users";
import Security from "./components/SecurityFeatures";
import Faq from "./components/Faq";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs"; // New About Us page
import Footer from "./components/Footer";

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
          {/* Home Route - All Sections */}
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

          {/* Find Travel Buddy - Placeholder for future */}
          <Route
            path="/findtravelbuddy"
            element={
              <>
                <div className="py-40 text-center text-white text-3xl">
                  Find Travel Buddy (Coming Soon)
                </div>
                <Footer />
              </>
            }
          />

          {/* Features - Placeholder for future */}
          <Route
            path="/features"
            element={
              <>
                <div className="py-40 text-center text-white text-3xl">
                  Features Page (Coming Soon)
                </div>
                <Footer />
              </>
            }
          />

          {/* About Us - Real AboutUs page */}
          <Route
            path="/about-us"
            element={
              <>
                <AboutUs />
                <Footer />
              </>
            }
          />

          {/* Contact Us - Only Contact Form + Footer */}
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
