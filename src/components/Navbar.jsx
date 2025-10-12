import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link to="/" className="cursor-pointer hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/findtravelbuddy" className="cursor-pointer hover:text-white transition-colors">
            FindTravelBuddy
          </Link>
          <Link to="/features" className="cursor-pointer hover:text-white transition-colors">
            Features
          </Link>
          <Link to="/about-us" className="cursor-pointer hover:text-white transition-colors">
            About Us
          </Link>
          <Link to="/contact-us" className="cursor-pointer hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Sign Up Button */}
        <button className="hidden md:block bg-[#2B003F]/50 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-semibold uppercase text-xs sm:text-sm hover:bg-[#2B003F]/70 transition-colors">
          Sign Up
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-[#2B003F]/50 text-white p-2 rounded-lg hover:bg-[#2B003F]/70 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a0026]/95 backdrop-blur-sm mt-2 p-6 animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-0 uppercase text-gray-200 font-semibold text-base">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-white transition-colors py-4 border-b border-gray-700/50 hover:bg-[#2B003F]/30 px-4 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/findtravelbuddy"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-white transition-colors py-4 border-b border-gray-700/50 hover:bg-[#2B003F]/30 px-4 rounded-lg"
            >
              FindTravelBuddy
            </Link>
            <Link
              to="/features"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-white transition-colors py-4 border-b border-gray-700/50 hover:bg-[#2B003F]/30 px-4 rounded-lg"
            >
              Features
            </Link>
            <Link
              to="/about-us"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-white transition-colors py-4 border-b border-gray-700/50 hover:bg-[#2B003F]/30 px-4 rounded-lg"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-white transition-colors py-4 border-b border-gray-700/50 hover:bg-[#2B003F]/30 px-4 rounded-lg"
            >
              Contact Us
            </Link>

            <button className="bg-[#a86ac5] text-white py-4 px-4 rounded-lg font-semibold uppercase mt-4 hover:bg-[#8c4fa8] transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;