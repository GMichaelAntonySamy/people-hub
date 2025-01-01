import React from "react";
import "./../css/QuickLinks.css"; // Make sure the CSS file is imported

const TopResources = ({ siteData }) => {
  return (
    <div className="quick-links-container">
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
            <span>
              Employee Wellness</span>
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
    </div>
    // <div className="top-resources-container">
    //   <div className="top-resources-row">
    //     <div className="top-resource">
    //       <a href="#" className="resource-item">
    //         <i className="fas fa-user-shield resource-icon"></i>
    //         <h4 className="resource-text">HR Policies</h4>
    //       </a>
    //     </div>
    //     <div className="top-resource">
    //       <a href="#" className="resource-item">
    //         <i className="fas fa-heartbeat resource-icon"></i>
    //         <h4 className="resource-text">Employee Wellness</h4>
    //       </a>
    //     </div>
    //     <div className="top-resource">
    //       <a href="#" className="resource-item">
    //         <i className="fas fa-users resource-icon"></i>
    //         <h4 className="resource-text">Employee Engagement</h4>
    //       </a>
    //     </div>
    //     <div className="top-resource">
    //       <a href="#" className="resource-item">
    //         <i className="fas fa-hands-helping resource-icon"></i>
    //         <h4 className="resource-text">Global Giving & Doing</h4>
    //       </a>
    //     </div>
    //     <div className="top-resource">
    //       <a href="#" className="resource-item">
    //         <i className="fas fa-globe resource-icon"></i>
    //         <h4 className="resource-text">Diversity Equity & Inclusion</h4>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TopResources;
