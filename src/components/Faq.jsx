import React, { useState } from "react";
import "./Faq.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who are the companions?",
      answer:
        "Companions are verified travelers who help carry or deliver your luggage while traveling to your destination, making travel safer and affordable."
    },
    {
      question: "How can I become a companion?",
      answer:
        "You can sign up, verify your ID, and list your upcoming travel routes. Once verified, you’ll receive luggage requests from nearby senders."
    },
    {
      question: "Is my luggage insured?",
      answer:
        "Yes, CompanionConnect provides an optional insurance plan to protect your luggage during the journey, ensuring peace of mind."
    },
    {
      question: "How are payments handled?",
      answer:
        "All transactions are processed securely through our platform. The payment is released to the companion only after successful delivery."
    },
    {
      question: "Is CompanionConnect available worldwide?",
      answer:
        "Currently, CompanionConnect operates in over 150 countries, connecting thousands of users every month for safe and efficient travel."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-left">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers related to the most common questions travelers ask.</p>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleQuestion(index)}>
                <h4>{faq.question}</h4>
                {activeIndex === index ? (
                  <FaChevronUp className="icon" />
                ) : (
                  <FaChevronDown className="icon" />
                )}
              </div>
              <div
                className={`faq-answer ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side for animation */}
      <div className="faq-right">
        {/* You can later add: 
          <Lottie animationData={yourAnimation} loop={true} />
        */}
      </div>
    </section>
  );
}

export default Faq;