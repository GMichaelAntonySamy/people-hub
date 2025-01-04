// TopMenus.js
import React from "react";
import Headings from "../shared/heading";
import "./../css/TopMenu.css";

const menuItems = [
  { icon: "fas fa-handshake", title: "Benefits" },
  { icon: "fas fa-money-check-alt", title: "Compensation" },
  { icon: "fas fa-user-tie", title: "Career" },
  { icon: "fas fa-smile", title: "Culture" },
  { icon: "fas fa-chart-line", title: "Performance" },
  { icon: "fas fa-clock", title: "Time Off" },
];

const TopMenus = ({ siteData }) => {
  return (
    <>
      <Headings text={"Top Menu"} />
      <div className="top-menu-container">
        <div className="top-menu-list">
          {menuItems.map((item, index) => (
            <div className="top-menu-card" key={index}>
              {/* Icon Section */}
              <div className="top-menu-icon">
                <i className={item.icon}></i>
              </div>
              {/* Details Section */}
              <div className="top-menu-details">
                <h3 className="top-menu-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopMenus;
