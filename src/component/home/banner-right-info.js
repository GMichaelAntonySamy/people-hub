import React from "react";

const HomeBannerInfoRight = ({siteData}) => {


  return (
    <div className="scrollable-container" style={{height:'250px'}}>
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
              <p className="desc">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBannerInfoRight;

