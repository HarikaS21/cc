import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who exactly are “Travel Companions” and what do they do?",
      answer:
        "Travel Companions are verified travelers who help carry or deliver your luggage to your destination. They make travel safer, more affordable, and stress-free."
    },
    {
      question: "I want to become a Companion — how do I get started?",
      answer:
        "Simply sign up, verify your ID, and list your upcoming travel routes. Once verified, you’ll start receiving luggage requests from nearby senders."
    },
    {
      question: "Is my luggage safe during the journey?",
      answer:
        "Yes, CompanionConnect offers an optional insurance plan to keep your luggage protected from pickup to delivery — giving you peace of mind."
    },
    {
      question: "How and when will I receive my payment?",
      answer:
        "Payments are processed securely through the platform. Once the luggage is safely delivered, the amount is released to your Companion account."
    },
    {
      question: "Can I use CompanionConnect no matter where I travel?",
      answer:
        "Absolutely! CompanionConnect connects thousands of travelers in 150+ countries, making it easier to send and carry items across borders."
    }
  ];

  // Motion variants for floating objects
  const floatVariant = {
    animate: {
      y: [0, -10, 0],
      x: [0, 10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-12 bg-gradient-to-br from-[#0a0014] to-[#1a0033] overflow-hidden text-white">
      
      {/* Background floating objects */}
      <motion.div className="absolute top-20 right-10 text-4xl opacity-20" variants={floatVariant} animate="animate">✈️</motion.div>
      <motion.div className="absolute top-20 left-5 text-3xl opacity-30" variants={floatVariant} animate="animate">☁️</motion.div>
      <motion.div className="absolute top-32 right-32 text-3xl opacity-20" variants={floatVariant} animate="animate" transition={{ duration: 8, repeat: Infinity }}>☁️</motion.div>
      <motion.div className="absolute bottom-20 left-20 text-3xl opacity-25" variants={floatVariant} animate="animate" transition={{ duration: 10, repeat: Infinity }}>🧳</motion.div>
      <motion.div className="absolute bottom-32 right-10 text-3xl opacity-25" variants={floatVariant} animate="animate" transition={{ duration: 9, repeat: Infinity }}>🧳</motion.div>

      {/* FAQ Section */}
      <div className="max-w-3xl w-full z-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-[#a86ac5]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Frequently Asked Questions ✨
        </motion.h2>

        <motion.p
          className="text-center text-[#c4b5fd] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Got a question while booking your flight or planning a trip? We’ve got your answers right here.
        </motion.p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              onClick={() => toggleQuestion(index)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`transition-all duration-300 ease-in-out cursor-pointer rounded-xl border border-[#4c1d95] shadow-sm bg-[#2b003f] hover:shadow-lg hover:scale-[1.02] p-5`}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium text-[#e0c3fc]">{faq.question}</h4>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0, scale: activeIndex === index ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <FaChevronDown className="text-[#a86ac5]" />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                className="overflow-hidden"
              >
                <motion.p
                  initial={{ y: -10 }}
                  animate={{ y: activeIndex === index ? 0 : -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#c4b5fd] mt-3"
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
