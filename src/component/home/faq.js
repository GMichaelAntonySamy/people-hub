import React, { useState } from "react";
import Headings from "../shared/heading";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "How do I apply for a job?",
      text: "You can apply for a job by visiting our careers page, selecting a suitable position, and submitting your application along with your resume.",
    },
    {
      title: "What are the company’s working hours?",
      text: "Our standard working hours are from 9:00 AM to 6:00 PM, Monday to Friday, with flexible working options available for certain roles.",
    },
    {
      title: "What benefits does the company offer?",
      text: "We offer a range of benefits including health insurance, performance bonuses, paid leave, professional development programs, and wellness initiatives.",
    },
    {
      title: "How can I request leave?",
      text: "You can request leave through our HR portal or by submitting a formal leave application to your manager for approval.",
    },
    {
      title: "Is there an employee referral program?",
      text: "Yes, we encourage employee referrals and offer incentives for successful hires through the referral program.",
    },
  ];

  // Filter FAQs based on search term
  const filteredFAQs = faqData.filter((faq) =>
    faq.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ margin: "auto",marginTop:'20px' }}>
      <Headings text={"Frequently Asked Questions"} />
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          marginTop:'20px',
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          fontSize: "1rem",
        }}
      />

      {/* FAQ Items */}
      <div>
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div
              key={index}
              style={{
                marginBottom: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <button
                onClick={() => toggleCollapse(index)}
                style={{
                  width: "100%",
                  padding: "15px",
                  background: "#f8f9fa",
                  border: "none",
                  textAlign: "left",
                  fontSize: ".9rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{faq.title}</span>
                <span style={{ fontSize: "18px" }}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div
                  style={{
                    padding: "15px",
                    background: "#fff",
                    fontSize: ".8rem",
                    fontWeight:400,
                    lineHeight: "1.4",
                  }}
                >
                  {faq.text}
                </div>
              )}
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "16px", color: "#888" }}>
            No FAQs found for "{searchTerm}".
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
