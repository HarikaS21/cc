import React from "react";
import Navbar from "./Navbar";
import heroImage from "../assets/hero.png";

function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-gradient-to-br from-[#2b003f] to-black text-white" id="home">
      <Navbar />

      {/* Hero Section */}
      <section className="flex items-center justify-between mt-[3.75rem] h-[700px] px-8 md:px-24 gap-8 relative">
        {/* Left Side */}
        <div className="flex-1 max-w-lg flex flex-col justify-center z-20">
          <h1 className="text-[4rem] md:text-[4rem] font-bold leading-[1.3] mb-4">
            CONNECT WITH <span className="text-purple-500">TRAVELLERS</span> AROUND THE WORLD
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            Send luggage internationally or earn money while you travel. Safe, verified, and affordable peer-to-peer luggage sharing.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mb-12">
            <button className="relative overflow-hidden rounded-xl px-6 md:px-8 py-2 md:py-3 font-semibold text-white bg-gradient-to-br from-purple-600 to-pink-400 shadow-md shadow-purple-500/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:from-purple-600 hover:to-pink-500">
             Start Your Journey
            </button>
          </div>
        </div>

        {/* Right Side with Hero Image */}
        <div className="flex-1 flex justify-center items-center relative z-10 w-full h-full">
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
