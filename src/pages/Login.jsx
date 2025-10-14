import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/Login.png"; // Ensure the image exists

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    navigate("/"); // Redirect to home page after login
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-black px-4 py-6">
      {/* Main container */}
      <div className="flex flex-col md:flex-row items-center md:items-start bg-[#1a001f] rounded-xl shadow-xl p-4 md:p-8 w-full max-w-5xl space-y-6 md:space-y-0 md:space-x-8">

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={loginImg}
            alt="Login"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-violet-400 text-center">
            Welcome Back ✈️
          </h2>
          <p className="text-gray-300 text-center text-sm sm:text-base">
            Enter your credentials to continue your journey
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-violet-300 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="you@example.com"
                className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-violet-300 mb-1">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="********"
                className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold text-lg shadow-lg shadow-violet-500/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Let’s Go 👋
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-gray-400 text-sm mt-2 text-center">
            Don't have an account?{" "}
            <span
              className="text-violet-400 cursor-pointer underline"
              onClick={() => navigate("/signup")}
            >
              Signup here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
