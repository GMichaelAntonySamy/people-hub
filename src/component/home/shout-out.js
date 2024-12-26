import React from "react";
import Headings from "../shared/heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import modules correctly
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ShoutOut = () => {
  const slides = [
    {
      title: "HR ShoutOut: Employee of the Month",
      description:
        "Congratulations to John Doe for being recognized as Employee of the Month. John’s dedication and hard work have truly stood out.",
      link: "/know-more-1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6NFzmMhwnWDYtfaXoQiVdey_0l8QIchD7Q&s", // Path to the image
    },
    {
      title: "Manager ShoutOut: Outstanding Leadership",
      description:
        "Kudos to Sarah Smith for her exceptional leadership. Sarah has led her team to achieve record-breaking results this quarter.",
      link: "/know-more-2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6NFzmMhwnWDYtfaXoQiVdey_0l8QIchD7Q&s", // Path to the image
    },
    {
      title: "Team ShoutOut: Successful Project Completion",
      description:
        "A big shoutout to the Development Team for successfully completing the new feature rollout ahead of schedule. Great teamwork!",
      link: "/know-more-3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6NFzmMhwnWDYtfaXoQiVdey_0l8QIchD7Q&s", // Path to the image
    },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <Headings text={"SHOUT-OUTS"} />
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable auto-slide
        modules={[Navigation, Pagination, Autoplay]}
        className="my-swiper"
        style={{
          height: "100%",
          borderRadius: "12px", // Add rounded corners for a smoother look
          overflow: "hidden", // Prevent content overflow
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                position: "relative",
                height: "100%",
                textAlign: "center",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Vertically center content
                alignItems: "center",
                // background: "#fff", // White background for better contrast
                // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for depth
                borderRadius: "12px", // Rounded corners for the slides
              }}
            >
              {/* Image section */}
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover", // Make sure the image fills the container properly
                  borderRadius: "8px", // Smooth corners for images
                  marginBottom: "15px", // Space between the image and content
                }}
              />
              <div
                style={{
                  padding: "10px",
                  // backgroundColor: "#f7f7f7", // Light gray background for description area
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for description area
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#333", // Dark color for title
                    marginBottom: "10px", // Space between title and description
                  }}
                >
                  {slide.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666", // Softer color for description text
                    lineHeight: "1.5", // Improve readability
                    marginBottom: "15px", // Add space after description
                  }}
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShoutOut;
