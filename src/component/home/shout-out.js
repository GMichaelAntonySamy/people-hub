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
    <div>
      <Headings text={"Shout Outs"} />
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
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #f8f9fa, #ffffff)", // Gradient background
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth animation
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)"; // Slight zoom on hover
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(0, 0, 0, 0.2)"; // Enhance shadow on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "15px",
                  transition: "transform 0.3s ease", // Smooth animation for image
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                } // Slight zoom on hover
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <div
                style={{
                  width: "100%",
                  transition: "transform 0.3s ease", // Smooth animation for hover
                }}
              >
                <h3
                  style={{
                    fontSize: "22px", // Slightly larger font for title
                    fontWeight: "700",
                    color: "#333", // Consistent color for dark mode
                    marginBottom: "10px",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden", // Handle long text
                  }}
                >
                  {slide.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666", // Softer color for description text
                    lineHeight: "1.6", // Improve readability
                    marginBottom: "20px",
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
