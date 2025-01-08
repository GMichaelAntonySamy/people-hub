import React from "react";
import "./../css/TopResources.css"; // Ensure this CSS is properly linked
import Headings from "../shared/heading";

const TopResources = ({ siteData }) => {
  const menuItems = [
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
      <div className="top-resources-wrapper">
      <div className="top-resources-list">
        {menuItems.map((item, index) => (
          <div className="top-resources-card" key={index}>
            <div className="top-resources-icon">
              <i className={item.icon}></i>
            </div>
            <div className="top-resources-details">
              <h3 className="top-resources-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TopResources;
