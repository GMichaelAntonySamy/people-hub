import React, { useState } from "react";
import Headings from "../shared/heading";
import "./../css/FAQ.css";

const FAQ = ({ siteData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = siteData?.faq?.filter((faq) =>
    faq.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Headings text="Frequently Asked Questions​" />
      <div className="faq-container">
        {/* Search Bar */}
        {/* <input
          type="text"
          className="faq-search-bar"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search FAQs"
        /> */}

        {/* FAQ Items */}
        <div>
          {filteredFAQs?.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-button ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleCollapse(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  🚀 {faq.title}
                  <span className="faq-toggle-icon">
                    {activeIndex === index ? "⯆" : "⯅"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div
                    id={`faq-content-${index}`}
                    className="faq-content"
                    aria-hidden={activeIndex !== index}
                  >
                    <p>{faq.text}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="faq-no-results">
              No FAQs found for "<span className="highlight">{searchTerm}</span>".
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FAQ;
