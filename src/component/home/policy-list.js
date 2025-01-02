import React from "react";
import Headings from "../shared/heading";

const PolicyList = ({siteData}) => {


  return (
    <>
      <Headings text="Policy" />
      <div className="scrollable-container">
      {siteData?.policy?.map((slide, index) => (
        <div
          key={index}
          className="banner-right-policy-scroll "
        >
          <div className="row">
            {/* <div className="col-sm-12 col-md-3">
              <img src={slide.img} alt={slide.title} style={{ width: "100%"}} />
            </div> */}
            <div className="col-sm-12 col-md-12">
              <h3 className="title">{slide.title}</h3>
              {/* <p className="desc">{slide.description}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default PolicyList;

