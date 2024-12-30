import React from "react";
import bannerImage from "./../../assert/images/banner-image.png";
import HomeBannerInfoLeft from "./banner-left-info";
import HomeBannerInfoRight from "./banner-right-info";

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <img src={bannerImage} className="banner-image" alt="Banner" />
      <div className="profile-name">Welcome Logesh Manohar</div>
      <div className="overlay-content">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-12">
            <HomeBannerInfoLeft/>
          </div>
          <div className="col-md-5 col-lg-5 col-sm-12" style={{height:'250px'}}>
            <iframe src="https://www.youtube.com/embed/04UMwHBhWPU?si=UpMgpardXCUEv4-3" style={{height:'250px'}} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12">
            <HomeBannerInfoRight/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
