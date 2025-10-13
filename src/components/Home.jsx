import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ for navigation
import heroImage from "../assets/hero.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col overflow-x-hidden bg-gradient-to-br from-[#2b003f] to-black text-white"
      id="home"
    >
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-[3.75rem] min-h-[700px] px-8 md:px-24 gap-8 relative">
        
        {/* Left Side */}
        <div className="flex-1 max-w-lg flex flex-col justify-center z-20 text-center md:text-left">
          <h1 className="text-[2.8rem] md:text-[4rem] font-bold leading-[1.3] mb-4">
            CONNECT WITH{" "}
            <span className="text-purple-500">TRAVELLERS</span> AROUND THE WORLD
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            Send luggage internationally or earn money while you travel. Safe,
            verified, and affordable peer-to-peer luggage sharing.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/findtravelbuddy")}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-xl shadow-lg shadow-purple-500/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              ✨ Start Your Journey ✨
            </button>
          </div>
        </div>

        {/* Right Side with Hero Image */}
        <div className="flex-1 flex justify-center items-center relative z-10 w-full h-[500px] md:h-[550px] lg:h-[700px]">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover rounded-3xl shadow-xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
