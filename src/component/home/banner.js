import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./../css/HomeBanner.css";

const HomeBanner = ({ siteData }) => {
  const swiperRef = useRef(null);

  return (
    <div className="banner-container">
      <div className="search-input-wrapper">
        {/* <div className="welcome-message" style={{marginTop:'-100px'}}>
          Welcome to People Hub, Logesh Manohar!
        </div> */}
        <input
          type="text"
          placeholder='Search "Powered by Glean"'
          className="search-input"
        />
        <i className="fas fa-search search-icon"></i>
      </div>
      <Swiper
        autoplay={{ delay: 3000 }}
        loop
        modules={[Autoplay]}
        className="background-swiper"
        ref={swiperRef}
      >
        {siteData?.highlight?.map((item, index) => (
          <SwiperSlide key={index} className="banner-slide">
            <div className="image-container">
              <img
                src={item.image}
                alt={item.title}
                className="swiper-image"
              />
              <div className="overlay">
                <h2 className="banner-title">{item.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
