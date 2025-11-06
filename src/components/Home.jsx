import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col pt-15 lg:pt-0 overflow-x-hidden bg-gradient-to-br from-[#2b003f] to-black text-white lg:min-h-screen"
      id="home"
    >
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between mt-6 sm:mt-8 md:mt-10 lg:mt-12 2xl:mt-16 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] px-4 sm:px-6 md:px-12 lg:px-16 2xl:px-24 gap-6 sm:gap-8 lg:gap-12 relative">
        
        {/* Left Side */}
        <div className="flex-1 max-w-full sm:max-w-md lg:max-w-lg 2xl:max-w-xl flex flex-col justify-center z-20 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight sm:leading-snug md:leading-[1.3] mb-4 sm:mb-6">
            CONNECT WITH{" "}
            <span className="text-purple-500">TRAVELLERS</span> AROUND THE WORLD
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed mb-6 sm:mb-8">
            Send luggage internationally or earn money while you travel. Safe,
            verified, and affordable peer-to-peer luggage sharing.
          </p>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => navigate("/findtravelbuddy")}
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-base sm:text-lg lg:text-xl shadow-lg shadow-purple-500/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              JetMate
            </button>
          </div>
        </div>

        {/* Right Side with Hero Image */}
        <div className="flex-1 flex justify-center items-center relative z-10 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] 2xl:h-[700px]">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;