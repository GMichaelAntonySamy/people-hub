import React, { useState } from "react";
import "./../css/News.css"; // Corrected import path

const News = ({siteData}) => {
  return (
    <div className="news-container">
      <div className="news-list-scrollable">
        {siteData?.news?.map((event) => (
          <div className="news-card" key={event.id}>
            <div className="news-image-container">
              <img src={event.image} alt={event.title} className="news-image" />
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
  );
};

export default News;
