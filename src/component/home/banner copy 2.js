import React, { useState, useRef, useEffect } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./../css/HomeBanner.css";

const HomeBanner = ({ siteData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  

  return (
    <div className="banner-container">
      {/* Main Swiper for background */}
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="background-swiper"
      >
        {siteData?.highlight?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="banner-slide">
              {/* <div
                className="background-gradient"
                style={{
                  backgroundImage: "linear-gradient(to right, #4facfe, #00f2fe)",
                }}
              ></div> */}
              <div className="corner-image">
                <img src={slide.image} alt={`Slide ${index}`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay content */}
      <div className="banner-overlay">
        {/* Welcome and Search */}
        <div className="search-container">
          <div className="welcome-message">Welcome Logesh Manohar</div>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search in People Hub"
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>

        {/* Slider Text */}
        <div
          className="slider-text"
          //  style={{backgroundImage:`url('${siteData?.highlight?.[currentSlide]?.image}')`}}
        >
          <h3>{siteData?.highlight?.[currentSlide]?.title}</h3>
          <p>{siteData?.highlight?.[currentSlide]?.description}</p>
        </div>

        {/* Thumbnails Section */}
        <div className="thumbnail-section">
          <div className="thumbnail-grid">
            {siteData?.highlight?.map((slide, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => swiperRef.current.slideTo(index)}
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
