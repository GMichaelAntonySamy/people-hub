import React from "react";
import Headings from "../shared/heading";
import "./../css/QuickLinks.css"; // Ensure you've created this CSS file for styling

const QuickLinks = () => {
  return (
    <div className="quick-links-container">
      <Headings text={'Quick Links'} />
      <div className="row quick-links-row">
        <div className="col-md-2 col-sm-6 quick-link">
          <a href="#" className="quick-link-item">
            <i className="fas fa-comments quick-link-icon"></i>
            <span>Ask HR</span>
          </a>
        </div>
        <div className="col-md-2 col-sm-6 quick-link">
          <a href="#" className="quick-link-item">
            <i className="fas fa-briefcase quick-link-icon"></i>
            <span>Workday</span>
          </a>
        </div>
        <div className="col-md-2 col-sm-6 quick-link">
          <a href="#" className="quick-link-item">
            <i className="fas fa-plane-departure quick-link-icon"></i>
            <span>Mobility</span>
          </a>
        </div>
        <div className="col-md-2 col-sm-6 quick-link">
          <a href="#" className="quick-link-item">
            <i className="fas fa-graduation-cap quick-link-icon"></i>
            <span>Training</span>
          </a>
        </div>
        <div className="col-md-2 col-sm-6 quick-link">
          <a href="#" className="quick-link-item">
            <i className="fas fa-hand-holding-usd quick-link-icon"></i>
            <span>Benefits</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
