import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import modules correctly
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Headings from "../shared/heading";

const HomeBannerInfoLeft = ({siteData}) => {

  return (
    <>
    <Headings text="Quick News" />
    <div style={{  backgroundColor: "rgba(217, 217, 217, 0.4)", padding: "20px", height: "150px",marginBottom:'10px' }}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable auto-slide
        modules={[Navigation, Pagination, Autoplay]}
        className="my-swiper"
        style={{ height: "100%" }}
      >
        {siteData?.highlight?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                position: "relative",
                height: "100%",
                textAlign: "left",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3 style={{fontSize:'1.2rem',fontWeight:'500'}}>{slide.title}</h3>
                <p style={{fontSize:'.8rem',fontWeight:'400'}}>{slide.description}</p>
              </div>
              {/* <a
                href={slide.link}
                className="banner-swipper-button-fixed"
              >
                Know More
              </a> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
    
  );
};

export default HomeBannerInfoLeft;
