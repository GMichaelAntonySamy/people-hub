import React, { useState } from "react";
import logo from "./../../assert/images/Western_Digital_logo.png";

const NavBar = () => {
  const [selectedFlag, setSelectedFlag] = useState("us");
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleFlagChange = (flag) => {
    setSelectedFlag(flag);
  };

  

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />{" "}
        {/* Replace with your logo */}
        <span className="pipe">|</span>
        <span className="brand-name">People Hub</span>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <div className="search-container">
          {showSearchBox && (
            <input
              type="text"
              className="search-box"
              placeholder="Search..."
              autoFocus
            />
          )}
          <i
            className="fas fa-search search-icon"
            onClick={() => setShowSearchBox(!showSearchBox)}
            aria-label="Search"
          ></i>
        </div>
        <div className="profile-circle">AB</div> {/* Profile initials */}
        <div className="flag-dropdown">
          <i
            className={`flag-icon flag-icon-${selectedFlag}`}
            onClick={() =>
              handleFlagChange(selectedFlag === "us" ? "in" : "us")
            }
          ></i>
          <ul className="dropdown-menu">
            <li onClick={() => handleFlagChange("us")}>
              <i className="flag-icon flag-icon-us"></i>
            </li>
            <li onClick={() => handleFlagChange("in")}>
              <i className="flag-icon flag-icon-in"></i>
            </li>
          </ul>
        </div>
        <i className="fas fa-bars hamburger-icon"></i> {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default NavBar;
