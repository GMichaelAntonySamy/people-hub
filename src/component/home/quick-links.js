import React from "react";
import Headings from "../shared/heading";
import "./../css/QuickLinks.css";

const QuickLinks = ({ siteData }) => {
  return (
    <>
      <h2 className="quick-links-heading">Quick Links</h2>
      <div className="quick-links-container">
      <div className="quick-links-row">
        {siteData?.quickLinks?.map((item, index) => (
          <div className="quick-link" key={index}>
            <a href={item.link} className="quick-link-item" target="_blank" rel="noopener noreferrer">
              <i className={`fas ${item.icon} quick-link-icon`}></i>
              <span>{item.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default QuickLinks;
