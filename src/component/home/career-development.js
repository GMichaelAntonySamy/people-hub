import React, { useState } from "react";
import Headings from "../shared/heading";
import carrer from "./../../assert/images/career.png"

const CareerDevelopment = ({ siteData }) => {
  return (
    <>
      <Headings text="Career Development at Western Digital​" />
      <div className="faq-container">
      <img src={carrer} alt="Logo" className="logo" style={{width:'100%',height:'auto'}}/>
      </div>
    </>
  );
};

export default CareerDevelopment;
