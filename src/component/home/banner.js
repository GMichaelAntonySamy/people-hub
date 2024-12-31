import React from "react";
import bannerImage from "./../../assert/images/banner-image.png";
import HomeBannerInfoLeft from "./banner-left-info";
import HomeBannerInfoRight from "./banner-right-info";
import './../css/HomeBanner.css';

const HomeBanner = () => {
  return (
    <div className="home-banner">
      {/* Background Image */}
      <img src={bannerImage} className="banner-image" alt="Banner" />

      {/* Overlay Content */}
      <div className="overlay-content">
        <div className="row align-items-center">
          {/* Left Information Section */}
          <div className="col-md-4 col-lg-4 col-sm-12">
            <HomeBannerInfoLeft />
          </div>

          {/* Video Section */}
          <div className="col-md-5 col-lg-5 col-sm-12 video-section">
            <iframe
              src="https://www.youtube.com/embed/04UMwHBhWPU?si=UpMgpardXCUEv4-3"
              className="video-player"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Information Section */}
          <div className="col-md-3 col-lg-3 col-sm-12">
            <HomeBannerInfoRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
