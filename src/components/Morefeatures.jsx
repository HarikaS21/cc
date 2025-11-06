import React from "react";
import { FaCouch, FaShieldAlt, FaUserTie, FaClock } from "react-icons/fa";

export default function Morefeatures() {
  const features = [
    {
      icon: <FaCouch />,
      title: "Luxury & Comfort",
      desc: "Experience the finest travel with companions who prioritize comfort, relaxation, and a luxurious journey."
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety & Security",
      desc: "Travel confidently with verified companions and secure processes ensuring your safety every mile of the way."
    },
    {
      icon: <FaUserTie />,
      title: "Professional Companions",
      desc: "Our companions are trained and professional, ensuring a reliable and courteous experience."
    },
    {
      icon: <FaClock />,
      title: "Timely Assistance",
      desc: "Get prompt support and guidance during your travels for smooth check-ins, coordination, and on-time arrivals."
    }
  ];

  return (
    <section
      id="more-features"
      className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#2b003f] to-black text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* Left empty space or illustration */}
        <div className="md:flex-1 hidden md:block"></div>

        {/* Right Features List */}
        <div className="md:flex-1 flex flex-col gap-10 relative">
          {/* Vertical accent line */}
          <div className="absolute top-0 left-10 h-full w-1 bg-purple-500/30 rounded-full"></div>

          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 pl-20 relative bg-white/5 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay={idx * 200}
            >
              {/* Floating Icon */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-500 text-black p-5 rounded-full text-3xl shadow-lg">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-purple-400">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}