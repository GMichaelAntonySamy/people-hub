import React from "react";
import Headings from "../shared/heading";
import "./../css/QuickLinks.css";

const QuickLinks = ({siteData}) => {
  return (
    <>
      <Headings text="Quick Links" />
      <div className="quick-links-container">
        <div className="quick-links-row">
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-comments quick-link-icon"></i>
              <span>Ask HR</span>
            </a>
          </div>
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-briefcase quick-link-icon"></i>
              <span>Workday</span>
            </a>
          </div>
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-plane-departure quick-link-icon"></i>
              <span>Mobility</span>
            </a>
          </div>
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-graduation-cap quick-link-icon"></i>
              <span>Training</span>
            </a>
          </div>
          <div className="quick-link">
            <a href="#" className="quick-link-item">
              <i className="fas fa-hand-holding-usd quick-link-icon"></i>
              <span>Benefits</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
