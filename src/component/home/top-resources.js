import React from "react";
import "./../css/QuickLinks.css"; // Make sure the CSS file is imported
import Headings from "../shared/heading";

const TopResources = ({ siteData }) => {
  return (
    <>
      <Headings text="Top Resources" />
      <div className="quick-links-container">
        <div className="quick-links-row">
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
              <span>Diversity Equity & Inclusion</span>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="quick-links-container">
        <div className="quick-links-row">
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-user-shield quick-link-icon"></i>
              <span>HR Policies</span>
            </a>
          </div>
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-heartbeat quick-link-icon"></i>
              <span>Employee Wellness</span>
            </a>
          </div>
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-users quick-link-icon"></i>
              <span>Employee Engagement</span>
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
              <i className="fas fa-globe quick-link-icon"></i>
              <span>Diversity Equity & Inclusion</span>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TopResources;
