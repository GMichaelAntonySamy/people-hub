import React, { useState, useEffect } from "react";
import "./../css/NavBar.css";
import logo from "./../../assert/images/Western_Digital_logo.png";

const NavBar = () => {
  const [selectedFlag, setSelectedFlag] = useState("us");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleFlagChange = (flag) => {
    setSelectedFlag(flag);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".flag-dropdown") &&
      !event.target.closest(".dropdown-menu")
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="pipe">|</span>
        <span className="brand-name">People Hub</span>
      </div>

      {/* Right Section */}
      <div className={`nav-right ${isMenuOpen ? "open" : ""}`}>
        <div className="profile-circle">LM</div>
        <span className="profile-name">Logesh Manohar</span>

        {/* Flag Dropdown */}
        <div className="flag-dropdown">
          <i
            className={`flag-icon flag-icon-${selectedFlag}`}
            onClick={toggleDropdown}
            role="button"
            aria-expanded={isDropdownOpen}
            tabIndex={0}
          ></i>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleFlagChange("us")}>
                <i className="flag-icon flag-icon-us"></i> United States
              </li>
              <li onClick={() => handleFlagChange("in")}>
                <i className="flag-icon flag-icon-in"></i> India
              </li>
            </ul>
          )}
        </div>

        {/* Hamburger Icon */}
        <i
          className="fas fa-bars hamburger-icon"
          onClick={toggleMenu}
          role="button"
          aria-expanded={isMenuOpen}
          tabIndex={0}
        ></i>
      </div>
    </nav>
  );
};

export default NavBar;
