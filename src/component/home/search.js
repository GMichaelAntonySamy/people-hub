import React, { useState } from "react";

const Search = ({ siteData }) => {
  return (
    <>
      <div className="search-bar-container">
        <div className="search-input-wrapper">
          <input type="text" className="search-input" placeholder="Search..." />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>
    </>
  );
};

export default Search;
