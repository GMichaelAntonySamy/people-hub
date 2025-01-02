import React, { useState } from "react";
import logo from "./../../assert/images/Western_Digital_logo.png";
import "./../css/NavBar.css";
import { us_data } from "../../util/data-us";
import { in_data } from "../../util/data-in";

const NavBar = ({ onSiteDataChange }) => {
  const [selectedFlag, setSelectedFlag] = useState("us");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleFlagChange = (flag) => {
    setSelectedFlag(flag);
    setDropdownVisible(false); // Close the dropdown after selection
  };

  const fetchData = () => {
    if (selectedFlag === "us") {
      console.log(us_data)
      onSiteDataChange(us_data);
    } else {
      onSiteDataChange(in_data);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [selectedFlag]);

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="pipe">|</span>
        <span className="brand-name">People Hub</span>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <div className="profile-circle">LM</div> {/* Profile initials */}
        Logesh Manohar
        <div
          className="flag-dropdown"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <i className={`flag-icon flag-icon-${selectedFlag}`}></i>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li onClick={() => handleFlagChange("us")}>
                <i className="flag-icon flag-icon-us"></i>
              </li>
              <li onClick={() => handleFlagChange("in")}>
                <i className="flag-icon flag-icon-in"></i>
              </li>
            </ul>
          )}
        </div>
        <i className="fas fa-bars hamburger-icon"></i> {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default NavBar;
