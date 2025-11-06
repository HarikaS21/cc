import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const navigate = useNavigate();

  // ✅ Load login state from localStorage
  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("userData");

    if (storedLogin === "true" && storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.fullName || user.email || "Traveler");
      setProfileImage(user.profileImage || "");
      setIsLoggedIn(true);
    }
  }, []);

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserName("");
    setProfileImage("");
    navigate("/login");
  };

  return (
    <div className="bg-black/40 p-3 sm:p-4 fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div className="text-white max-w-10xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <FaPlaneDeparture className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          <h1 className="text-white font-bold text-lg sm:text-xl lg:text-[25px]">
            C - <span className="text-[#a86ac5]">CONNECT</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-7 uppercase text-gray-200 font-semibold text-xs lg:text-[12px] bg-[#2B003F]/50 p-3 lg:p-5 rounded-xl">
          <Link to="/">Home</Link>
          <Link to="/findtravelbuddy">FindTravelBuddy</Link>
          <Link to="/features">Features</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>

        {/* Auth/Profile Section */}
        <div className="hidden md:flex items-center gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="bg-[#2B003F]/50 text-white px-4 py-3 rounded-lg font-semibold uppercase text-sm hover:bg-[#2B003F]/70 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#a86ac5] text-white px-4 py-3 rounded-lg font-semibold uppercase text-sm hover:bg-[#8c4fa8] transition-colors"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3 bg-[#2B003F]/50 px-4 py-2 rounded-lg">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-violet-400"
                />
              ) : (
                <FaUserCircle className="text-white text-2xl" />
              )}
              <span className="font-semibold text-sm">{userName}</span>
              <button
                onClick={handleLogout}
                className="bg-[#a86ac5] px-3 py-1 text-xs rounded-md font-semibold hover:bg-[#8c4fa8]"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-[#2B003F]/50 text-white p-2 rounded-lg hover:bg-[#2B003F]/70 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a0026]/95 mt-2 p-6">
          <div className="flex flex-col gap-0 uppercase text-gray-200 font-semibold text-base">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/findtravelbuddy" onClick={() => setIsMenuOpen(false)}>FindTravelBuddy</Link>
            <Link to="/features" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>

            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[#2B003F]/60 text-white py-4 mt-4 rounded-lg text-center hover:bg-[#2B003F]/80"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[#a86ac5] text-white py-4 mt-3 rounded-lg text-center hover:bg-[#8c4fa8]"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="flex flex-col items-center mt-4">
                {profileImage ? (
                  <img src={profileImage} className="w-16 h-16 rounded-full border-2 border-violet-400 mb-2" alt="User" />
                ) : (
                  <FaUserCircle className="text-3xl text-white mb-2" />
                )}
                <span className="text-white mb-3">{userName}</span>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="bg-[#a86ac5] text-white py-2 px-6 rounded-lg font-semibold uppercase hover:bg-[#8c4fa8]"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
