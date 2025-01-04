import React from "react";
import bannerImage from "./../../assert/images/banner-image.png";
import HomeBannerInfoLeft from "./banner-left-info";
import './../css/HomeBanner.css'
import PolicyList from "./policy-list";

const HomeBanner = ({ siteData }) => {
  return (
    <>
    <div className="profile-name">Welcome Logesh Manohar</div>
      <div className="home-banner">
        <div className="banner-image" style={{ backgroundImage: `url(${bannerImage})` }}></div>
        <div className="overlay-content">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <HomeBannerInfoLeft siteData={siteData} />
            </div>
            <div className="col-md-5 col-lg-5 col-sm-12" style={{ height: '250px' }}>
              <iframe
                src="https://www.youtube.com/embed/04UMwHBhWPU?si=UpMgpardXCUEv4-3"
                style={{ height: '250px' }}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12">
              <PolicyList siteData={siteData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;