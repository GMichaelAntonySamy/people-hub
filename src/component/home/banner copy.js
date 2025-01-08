import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./../css/HomeBanner.css";

const HomeBanner = ({ siteData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  // Fallback if siteData or highlight is undefined
  if (!siteData || !siteData.highlight || siteData.highlight.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="banner-container">
      {/* <div className="search-container" style={{ alignItems: "center" }}>
        <div className="welcome-message">
          Welcome to People Hub, Logesh Manohar!
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder='Search "Powered by Glean"'
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div> */}

      {/* New Swiper and Text Section */}
      <div className="content-container">
        {/* Swiper on the left */}
        <div className="swiper-wrapper">
          <Swiper
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            // autoplay={{ delay: 3000 }}
            // key={currentSlide} 
            // modules={[Autoplay]}
            // loop
            className="background-swiper"
            ref={swiperRef}
          >
            {siteData.highlight.map((item, index) => (
              <SwiperSlide key={index} className="banner-slide">
                <img
                  src={item.image}
                  alt={item.title}
                  className="swiper-image"
                  style={{width:"100% !important"}}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="text-wrapper">
          {siteData.highlight[currentSlide] ? (
            <>
              <h3>{siteData.highlight[currentSlide].title}</h3>
              <p>{siteData.highlight[currentSlide].description}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default HomeBanner;
