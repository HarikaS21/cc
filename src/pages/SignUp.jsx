// import React, { useState } from "react";
// import { FileText } from "lucide-react";
// import Lottie from "react-lottie-player";
// import { useNavigate } from "react-router-dom";
// import sideAnimation from "../assets/signup1.json";

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     profileImage: "",
//     userType: "traveler",
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#0a0014] to-[#12002b] px-4 py-8">
//       {/* Container */}
//       <div className="flex flex-col md:flex-row items-center md:items-start bg-[#1a001f] rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 w-full max-w-6xl gap-8">
        
//         {/* ---------- Left: Lottie Animation ---------- */}
//         <div className="w-full md:w-1/2 flex justify-center items-center">
//           <Lottie
//             loop
//             animationData={sideAnimation}
//             play
//             className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]"
//           />
//         </div>

//         {/* ---------- Right: Signup Form ---------- */}
//         <div className="w-full md:w-1/2 flex flex-col items-center space-y-5">
//           {/* Header */}
//           <div className="text-center space-y-2">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-400">
//               Ready, Set, Go
//             </h2>
//             <p className="text-gray-300 text-sm sm:text-base">
//               Create your account to connect with flight companions
//             </p>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="w-full space-y-5 sm:space-y-6 px-1 sm:px-0"
//           >
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-semibold text-violet-300 mb-1">
//                 Full Name *
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 required
//                 placeholder="John Doe"
//                 className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-semibold text-violet-300 mb-1">
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
//               <label className="block text-sm font-semibold text-violet-300 mb-1">
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

//             {/* User Type */}
//             <div>
//               <label className="block text-sm font-semibold text-violet-300 mb-1">
//                 I am a *
//               </label>
//               <select
//                 name="userType"
//                 value={formData.userType}
//                 onChange={handleInputChange}
//                 className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
//               >
//                 <option value="traveler">Traveler</option>
//                 <option value="companion">Companion</option>
//               </select>
//             </div>

//             {/* Profile Image Upload */}
//             <div>
//               <label className="block text-sm font-semibold text-violet-300 mb-1 flex items-center gap-1">
//                 <FileText className="w-4 h-4" /> Profile Image *
//               </label>
//               <label className="form-input w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 text-white cursor-pointer flex items-center justify-center hover:border-violet-400 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-500 transition bg-black">
//                 Choose File
//                 <input
//                   type="file"
//                   accept="image/*"
//                   required
//                   name="profileImage"
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     if (file) {
//                       const imageUrl = URL.createObjectURL(file);
//                       setFormData((prev) => ({
//                         ...prev,
//                         profileImage: imageUrl,
//                       }));
//                     }
//                   }}
//                   className="hidden"
//                 />
//               </label>
//               {formData.profileImage && (
//                 <img
//                   src={formData.profileImage}
//                   alt="Preview"
//                   className="mt-3 w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full shadow-md border-2 border-violet-500 mx-auto"
//                 />
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold text-base sm:text-lg shadow-lg shadow-violet-500/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
//             >
//               {formData.userType === "companion"
//                 ? "Register as Companion"
//                 : "Login ✈️"}
//             </button>
//           </form>

//           {/* Login Redirect */}
//           <p className="text-gray-400 text-sm mt-2 text-center">
//             Already have an account?{" "}
//             <span
//               className="text-violet-400 cursor-pointer underline hover:text-violet-300"
//               onClick={() => navigate("/login")}
//             >
//               Login here
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { FileText } from "lucide-react";
import Lottie from "react-lottie-player";
import { useNavigate } from "react-router-dom";
import sideAnimation from "../assets/signup1.json";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    profileImage: "",
    userType: "traveler",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    
    // Set user as logged in after successful signup
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(formData));
    
    // Redirect to home page
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#0a0014] to-[#12002b] px-4 py-8">
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start bg-[#1a001f] rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 w-full max-w-6xl gap-8">
        
        {/* ---------- Left: Lottie Animation ---------- */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Lottie
            loop
            animationData={sideAnimation}
            play
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]"
          />
        </div>

        {/* ---------- Right: Signup Form ---------- */}
        <div className="w-full md:w-1/2 flex flex-col items-center space-y-5">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-400">
              Ready, Set, Go
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Create your account to connect with flight companions
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-5 sm:space-y-6 px-1 sm:px-0"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-violet-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
              />
            </div>

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
                className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
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
                className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
              />
            </div>

            {/* User Type */}
            <div>
              <label className="block text-sm font-semibold text-violet-300 mb-1">
                I am a *
              </label>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                className="w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 bg-black text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500 transition"
              >
                <option value="traveler">Traveler</option>
                <option value="companion">Companion</option>
              </select>
            </div>

            {/* Profile Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-violet-300 mb-1 flex items-center gap-1">
                <FileText className="w-4 h-4" /> Profile Image *
              </label>
              <label className="form-input w-full border-2 border-violet-600 rounded-lg px-4 py-2 sm:py-3 text-white cursor-pointer flex items-center justify-center hover:border-violet-400 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-500 transition bg-black">
                Choose File
                <input
                  type="file"
                  accept="image/*"
                  required
                  name="profileImage"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      setFormData((prev) => ({
                        ...prev,
                        profileImage: imageUrl,
                      }));
                    }
                  }}
                  className="hidden"
                />
              </label>
              {formData.profileImage && (
                <img
                  src={formData.profileImage}
                  alt="Preview"
                  className="mt-3 w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full shadow-md border-2 border-violet-500 mx-auto"
                />
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold text-base sm:text-lg shadow-lg shadow-violet-500/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {formData.userType === "companion"
                ? "Register as Companion"
                : "Login ✈️"}
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-gray-400 text-sm mt-2 text-center">
            Already have an account?{" "}
            <span
              className="text-violet-400 cursor-pointer underline hover:text-violet-300"
              onClick={() => navigate("/login")}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}