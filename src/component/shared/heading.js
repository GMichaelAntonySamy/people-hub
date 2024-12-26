import React from "react";

const Headings = ({text}) => {
  return (
    <div className="heading-container">
      <span className="pipe-heading">|</span>
      <span className="heading-text">{text}</span>
    </div>
  );
};

export default Headings;
