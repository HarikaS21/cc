// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import loginImg from "../assets/Login.png"; // Make sure this path is correct

// export default function Login() {
//   const navigate = useNavigate();

//   // Form data and login state
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Login Data:", formData);
//     // Simulate login success
//     setIsLoggedIn(true);

//     // Redirect after short delay (optional)
//     setTimeout(() => {
//       navigate("/");
//     }, 1200);
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-black px-4 py-10">
//       {/* Main container */}
//       <div className="flex flex-col md:flex-row items-center md:items-start bg-[#1a001f] rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-10">
        
//         {/* Image Section */}
//         <div className="w-full md:w-1/2 flex justify-center items-center">
//           <img
//             src={loginImg}
//             alt="Login"
//             className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-center space-y-5">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-400 text-center">
//             Welcome Back ✈️
//           </h2>
//           <p className="text-gray-300 text-center text-sm sm:text-base max-w-md">
//             Enter your credentials to continue your journey
//           </p>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-5">
//             {/* Email */}
//             <div>
//               <label className="block text-sm sm:text-base font-semibold text-violet-300 mb-1">
//                 Email *
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 placeholder="you@example.com"
//                 className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm sm:text-base font-semibold text-violet-300 mb-1">
//                 Password *
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//                 placeholder="********"
//                 className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold text-lg sm:text-xl shadow-lg shadow-violet-500/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
//             >
//               Let’s Go 👋
//             </button>
//           </form>

//           {/* Signup Link (only show if NOT logged in) */}
//           {!isLoggedIn && (
//             <p className="text-gray-400 text-sm sm:text-base mt-2 text-center">
//               Don't have an account?{" "}
//               <span
//                 className="text-violet-400 cursor-pointer underline hover:text-violet-300"
//                 onClick={() => navigate("/signup")}
//               >
//                 Signup here
//               </span>
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/Login.png";

export default function Login() {
  const navigate = useNavigate();

  // Form data and login state
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);
    // Simulate login success
    setIsLoggedIn(true);

    // Set user as logged in
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', formData.email);

    // Redirect after short delay
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black px-4 py-10">
      {/* Main container */}
      <div className="flex flex-col md:flex-row items-center md:items-start bg-[#1a001f] rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-5xl space-y-8 md:space-y-0 md:space-x-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={loginImg}
            alt="Login"
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center space-y-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-400 text-center">
            Welcome Back ✈️
          </h2>
          <p className="text-gray-300 text-center text-sm sm:text-base max-w-md">
            Enter your credentials to continue your journey
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-violet-300 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="you@example.com"
                className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-violet-300 mb-1">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="********"
                className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold text-lg sm:text-xl shadow-lg shadow-violet-500/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Let's Go 👋
            </button>
          </form>

          {/* Signup Link (only show if NOT logged in) */}
          {!isLoggedIn && (
            <p className="text-gray-400 text-sm sm:text-base mt-2 text-center">
              Don't have an account?{" "}
              <span
                className="text-violet-400 cursor-pointer underline hover:text-violet-300"
                onClick={() => navigate("/signup")}
              >
                Signup here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}