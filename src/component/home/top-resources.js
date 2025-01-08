import React from "react";
import "./../css/TopResources.css"; // Make sure the CSS file is imported
import Headings from "../shared/heading";

const TopResources = ({ siteData }) => {
  const menuItems = [
    { icon: "fas fa-first-aid", title: "Benefits" },
    { icon: "fas fa-first-aid", title: "Benefits" },
    { icon: "fas fa-heartbeat", title: "Wellness" },
    { icon: "fas fa-users", title: "Engagement" },
    { icon: "fas fa-hands-helping", title: "Global Giving & Doing" },
    { icon: "fas fa-user-shield", title: "HR Policies" },
    { icon: "fas fa-globe", title: "Diversity, Equity & Inclusion" },
  ];
  return (
    <>
      <Headings text="Top Resources" />
      <div className="top-resources-container">
        <div className="top-resources-list">
          {menuItems.map((item, index) => (
            <div className="top-resources-card" key={index}>
              {/* Icon Section */}
              <div className="top-resources-icon">
                <i className={item.icon}></i>
              </div>
              {/* Details Section */}
              <div className="top-resources-details">
                <h3 className="top-resources-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="quick-links-container">
        <div className="quick-links-row">
          <div className="quick-link">
            <a href="#" className="quick-link-item">
            <i className="fas fa-first-aid quick-link-icon"></i>
              <span>Benefits</span>
            </a>
          </div>
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-heartbeat quick-link-icon"></i>
              <span>Wellness</span>
            </a>
          </div>
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-users quick-link-icon"></i>
              <span>Engagement</span>
            </a>
          </div>
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-hands-helping quick-link-icon"></i>
              <span>Global Giving & Doing</span>
            </a>
          </div>
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-user-shield quick-link-icon"></i>
              <span>HR Policies</span>
            </a>
          </div>
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-globe quick-link-icon"></i>
              <span>Diversity, Equity & Inclusion</span>
            </a>
          </div>
        </div>
      </div> */}
      
    </>
  );
};

export default TopResources;

