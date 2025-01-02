import React, { useState } from "react";
import Headings from "../shared/heading";
// import "./../css/Events.css"; // Corrected import path
import "./../css/News.css"; // Corrected import path

const Events = ({ siteData }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Headings text="Events" />
      <div className="news-container">
        <div className="news-list-scrollable">
          {siteData?.events?.map((event) => (
            <div className="news-card" key={event.id}>
              <div className="news-image-container">
                <img
                  src={event.image}
                  alt={event.title}
                  className="news-image"
                />
                <div className="news-type">{event.type}</div>
              </div>
              <div className="news-details">
                <h3 className="news-title">{event.title}</h3>
                <h4 className="news-subtitle">{event.subtitle}</h4>
                <p className="news-date-time">{event.dateTime}</p>
                <p className="news-description">{event.description}</p>
                <a href={event.link} className="news-link">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    // <div className="news-events-container">
    //   <Headings text="Events" />
    //   <div className="events-list">
    //     {siteData?.events?.slice(0, showMore ? siteData?.events?.length : 4).map((event) => (
    //       <div className="event-card" key={event.id}>
    //         <div className="event-image-container">
    //           <img src={event.image} alt={event.title} className="event-image" />
    //           <div className="event-type">{event.type}</div>
    //         </div>
    //         <div className="event-details">
    //           <h3 className="event-title">{event.title}</h3>
    //           <p className="event-date-time">{event.dateTime}</p>
    //           <p className="event-description">{event.description}</p>
    //           <a href={event.link} className="event-link">
    //             View Details
    //           </a>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <button className="show-more-btn" onClick={toggleShowMore}>
    //     {showMore ? "Show Less" : "Show More"}
    //   </button>
    // </div>
  );
};

export default Events;
