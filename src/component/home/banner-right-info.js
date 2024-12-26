import React from "react";

const HomeBannerInfoRight = () => {
  const slides = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-7wS-a-wWYfkfJ1s8pBj1pWcBdfrQlfa4A&s",
      title: "Slide 1",
      description: "Description for slide 1 goes here.",
      link: "/know-more-1",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-7wS-a-wWYfkfJ1s8pBj1pWcBdfrQlfa4A&s",
      title: "Slide 2",
      description: "Description for slide 2 goes here.",
      link: "/know-more-2",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-7wS-a-wWYfkfJ1s8pBj1pWcBdfrQlfa4A&s",
      title: "Slide 3",
      description: "Description for slide 3 goes here.",
      link: "/know-more-3",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-7wS-a-wWYfkfJ1s8pBj1pWcBdfrQlfa4A&s",
      title: "Slide 4",
      description: "Description for slide 4 goes here.",
      link: "/know-more-4",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-7wS-a-wWYfkfJ1s8pBj1pWcBdfrQlfa4A&s",
      title: "Slide 5",
      description: "Description for slide 5 goes here.",
      link: "/know-more-5",
    }
  ];

  return (
    <div className="scrollable-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="banner-right-policy-scroll "
        >
          <div className="row">
            <div className="col-12 col-md-4">
              <img src={slide.img} alt={slide.title} style={{ width: "100%"}} />
            </div>
            <div className="col-12 col-md-8">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBannerInfoRight;

