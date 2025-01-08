import React, { useState, useEffect } from "react";
import { us_data } from "../../util/data-us";
import { in_data } from "../../util/data-in";
import logo from "./../../assert/images/Western_Digital_logo.png";
import "./../css/NavBar.css";

const NavBar = ({ onSiteDataChange }) => {
  const [selectedFlag, setSelectedFlag] = useState("us");
  const [siteData, setSiteData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      try {
        if (selectedFlag === "us") {
          onSiteDataChange(us_data);
          setSiteData(us_data);
        } else {
          onSiteDataChange(in_data);
          setSiteData(in_data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [selectedFlag, onSiteDataChange]);

  const handleFlagChange = (flag) => {
    setSelectedFlag(flag);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container" style={{padding:'1px'}}>
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" className="logo" />
          {/* <span className="pipe">|</span> */}
          {/* <span className="brand-name">People Hub</span> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {siteData?.nav?.map((data, index) => (
              <li key={index} className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  {data?.title}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {data?.submenu?.map((submenu, index) => (
                    <li key={index}>
                      <a className="dropdown-item" href={submenu?.link}>
                        {submenu?.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center">
            <a className="nav-icon me-3" href="#">
              <i
                className="far fa-heart nav-font-icon"
                aria-label="Favorites"
              ></i>
            </a>
            <a className="nav-icon me-3" href="#">
              <i
                className="far fa-envelope nav-font-icon"
                aria-label="Messages"
              ></i>
            </a>
            <a className="nav-icon me-3" href="#" style={{textDecoration:'none'}}>
              Logesh
            </a>
            <span className="nav-icon" href="#">
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  <i
                    className={`flag-icon flag-icon-${selectedFlag}`}
                    aria-label={`Select ${
                      selectedFlag === "us" ? "United States" : "India"
                    } flag`}
                  ></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={() => handleFlagChange("us")}>
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-us"></i> US
                    </a>
                  </li>
                  <li onClick={() => handleFlagChange("in")}>
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-in"></i> India
                    </a>
                  </li>
                </ul>
              </div>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
