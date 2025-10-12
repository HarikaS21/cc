import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const users = [
  {
    name: "Sita Reddy",
    location: "Hyderabad - San Francisco",
    quote: "I was very nervous to fly alone, but CompanionConnect made my journey feel so safe and supported.",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Arjun Sharma",
    location: "Mumbai - New York",
    quote: "The verified companions made my business travel stress-free and comfortable. Highly recommend!",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Singh",
    location: "Bangalore - London",
    quote: "I found a travel companion who shared my destination and preferences. Loved the experience!",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rohit Verma",
    location: "Delhi - Sydney",
    quote: "From check-in assistance to in-flight support, the CompanionConnect service was seamless.",
    img: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

export default function Users() {
  return (
    <section
      id="users"
      className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#2b003f] to-black text-white relative"
    >
      <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-400 drop-shadow-lg">
          What Our Users Say
        </h2>
        <p className="text-gray-300 text-lg md:text-xl">
          Trusted by families across India
        </p>

        {/* Staggered Cards */}
        <div className="relative mt-16 flex flex-wrap justify-center items-start gap-8">
          {users.map((user, idx) => (
            <div
              key={idx}
              className={`
                bg-white/5 p-6 rounded-3xl flex flex-col items-center text-center shadow-lg transition-transform duration-500 hover:scale-105
                w-72
                ${idx % 2 === 0 ? "-translate-y-6 md:-translate-y-12" : "translate-y-6 md:translate-y-12"}
              `}
            >
              {/* Profile Image */}
              <div className="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-lg">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Icon */}
              <FaQuoteLeft className="text-purple-400 text-2xl mb-3" />

              {/* Quote Text */}
              <p className="text-gray-300 italic mb-4">{user.quote}</p>

              {/* Name */}
              <h3 className="text-xl font-semibold text-purple-400">{user.name}</h3>

              {/* Location */}
              <p className="text-gray-400 text-sm">{user.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Background Accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-purple-800/20 rounded-full -z-10"></div>
    </section>
  );
}
