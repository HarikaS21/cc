import React, { useState } from "react";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contactus.json";

const ContactUs = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const emojis = [
    { label: "😡", value: 1 },
    { label: "😕", value: 2 },
    { label: "😐", value: 3 },
    { label: "🙂", value: 4 },
    { label: "😍", value: 5 },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0014] via-[#1a0033] to-[#000000] text-white px-6 md:px-16 py-16">
      
      {/* Lottie Animation */}
      <div className="flex justify-center mb-14">
        <div className="w-40 h-40">
          <Lottie animationData={contactAnimation} loop={true} />
        </div>
      </div>

      {/* Contact Info + Send Message */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {/* Left: Contact Info */}
        <div className="bg-[#1a0033]/70 p-8 rounded-2xl border border-[#a86ac5]/30 shadow-[0_0_25px_#a86ac5aa] backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-[#a86ac5] mb-6">
            Contact Information
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Have questions or need help? We’d love to hear from you anytime.
          </p>

          <div className="space-y-4 text-gray-200">
            <p>📍 <span className="font-medium">Address:</span> Hyderabad, India</p>
            <p>📞 <span className="font-medium">Phone:</span> +91 98765 43210</p>
            <p>📧 <span className="font-medium">Email:</span> support@companionconnect.com</p>
            <p>⏰ <span className="font-medium">Working Hours:</span> Mon - Fri, 9AM - 6PM</p>
          </div>

          <div className="mt-8 bg-[#a86ac5]/20 border border-[#a86ac5]/40 rounded-xl p-6 text-sm text-gray-200 shadow-inner">
            <h4 className="text-[#a86ac5] font-semibold mb-2">🚨 Need Immediate Help?</h4>
            <p>For urgent issues during travel, contact our 24/7 support line:</p>
            <p className="font-bold text-white text-lg mt-2">+91 99999 11111</p>
          </div>
        </div>

        {/* Right: Send Message */}
        <div className="bg-[#13002a]/70 p-8 rounded-2xl border border-[#a86ac5]/30 shadow-[0_0_25px_#a86ac577] backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-[#a86ac5] mb-6">Send Us a Message</h3>

          <form className="space-y-5">
            {[{ label: "Full Name", type: "text", placeholder: "John Doe" },
              { label: "Email Address", type: "email", placeholder: "john@example.com" },
              { label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" }].map((f, i) => (
              <div key={i}>
                <label className="block font-medium text-gray-200 mb-1">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full p-3 bg-transparent border border-[#a86ac5]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a86ac5] text-white placeholder-gray-400"
                />
              </div>
            ))}

            <div>
              <label className="block font-medium text-gray-200 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full p-3 bg-transparent border border-[#a86ac5]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a86ac5] text-white placeholder-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#a86ac5] text-white font-medium py-3 rounded-md shadow-lg hover:bg-[#944fb4] hover:shadow-[0_0_20px_#a86ac5aa] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-[#0d001f]/80 p-10 rounded-2xl border border-[#a86ac5]/30 shadow-[0_0_25px_#a86ac577] max-w-3xl mx-auto">
        <h3 className="text-3xl font-semibold text-[#a86ac5] mb-4 text-center">
          We Value Your Feedback 💬
        </h3>
        <p className="text-gray-300 mb-8 text-center">
          Tell us what you think about CompanionConnect! Your words help us improve and serve travelers better.
        </p>

        <form className="space-y-5">
          {/* Feedback Topic */}
          <div>
            <label className="block font-medium text-gray-200 mb-1">Feedback Topic</label>
            <select className="w-full p-3 bg-[#13002a] border border-[#a86ac5]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a86ac5] text-white">
              <option className="bg-[#13002a] text-white">General Feedback</option>
              <option className="bg-[#13002a] text-white">Bug Report</option>
              <option className="bg-[#13002a] text-white">Feature Request</option>
              <option className="bg-[#13002a] text-white">Travel Experience</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="block font-medium text-gray-200 mb-1">Your Experience</label>
            <select className="w-full p-3 bg-[#13002a] border border-[#a86ac5]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a86ac5] text-white">
              <option className="bg-[#13002a] text-white">Excellent</option>
              <option className="bg-[#13002a] text-white">Good</option>
              <option className="bg-[#13002a] text-white">Average</option>
              <option className="bg-[#13002a] text-white">Poor</option>
            </select>
          </div>

          {/* Emoji Rating */}
          <div>
            <label className="block font-medium text-gray-200 mb-1">Rate Us</label>
            <div className="flex space-x-4 text-2xl justify-center">
              {emojis.map((emoji) => (
                <span
                  key={emoji.value}
                  className={`cursor-pointer transition-transform ${
                    emoji.value <= (hoverRating || rating)
                      ? "scale-125"
                      : "scale-100"
                  }`}
                  onClick={() => setRating(emoji.value)}
                  onMouseEnter={() => setHoverRating(emoji.value)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  {emoji.label}
                </span>
              ))}
            </div>
          </div>

          {/* Feedback Text */}
          <div>
            <label className="block font-medium text-gray-200 mb-1">Feedback</label>
            <textarea
              rows="4"
              placeholder="Write your feedback here..."
              className="w-full p-3 bg-transparent border border-[#a86ac5]/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a86ac5] text-white placeholder-gray-400"
            ></textarea>
          </div>

          <button className="w-full bg-[#a86ac5] hover:bg-[#944fb4] text-white font-medium py-3 rounded-md shadow-lg hover:shadow-[0_0_25px_#a86ac5aa] transition-all duration-300">
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
