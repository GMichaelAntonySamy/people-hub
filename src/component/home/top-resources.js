import React from "react";
import Headings from "../shared/heading";

const TopResources = () => {
  return (
    <div className="top-resources-container">
      <Headings text="Top Resources" />
      <div className="row scrollable-container">
        <div className="col-md-6 col-lg-6 col-sm-12 top-resource">
          <i className="fas fa-user-shield resource-icon"></i>
          <h4 className="resource-text">HR Policies</h4>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 top-resource">
          <i className="fas fa-heartbeat resource-icon"></i>
          <h4 className="resource-text">Employee Wellness</h4>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 top-resource">
          <i className="fas fa-users resource-icon"></i>
          <h4 className="resource-text">Employee Engagement</h4>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 top-resource">
          <i className="fas fa-hands-helping resource-icon"></i>
          <h4 className="resource-text">Global Giving & Doing</h4>
        </div>
        <div className="col-12 top-resource">
          <i className="fas fa-globe resource-icon"></i>
          <h4 className="resource-text">Diversity Equity & Inclusion</h4>
        </div>
      </div>
    </div>
  );
};

export default TopResources;
