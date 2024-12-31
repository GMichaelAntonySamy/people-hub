import React, { useState } from "react";
import logo from "./../../assert/images/Western_Digital_logo.png";

const NavBar = () => {
  const [selectedFlag, setSelectedFlag] = useState("us");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFlagChange = (flag) => {
    setSelectedFlag(flag);
  };

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
        {/* Search Icon & Search Box */}
        <div className="search-container">
          <i
            className={`fas fa-search search-icon ${showSearchBox ? "active" : ""}`}
            onClick={toggleSearchBox}
          ></i>
          {showSearchBox && (
            <input
              type="text"
              placeholder="Search..."
              className="search-box"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          )}
        </div>
        <div className="profile-circle">LM</div> {/* Profile initials */}
        Logesh Manohar
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
