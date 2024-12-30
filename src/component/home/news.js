import React, { useState } from "react";
import Headings from "../shared/heading";
import "./../css/News.css"; // Corrected import path

const newsData = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Annual Town Hall",
    subtitle: "Company-wide Updates and Celebrations",
    dateTime: "June 30, 2024 | 10:00 AM - 12:00 PM",
    description: "Join us for the annual town hall meeting to discuss key updates and celebrate our achievements.",
    link: "/event/1",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Cybersecurity Webinar",
    subtitle: "Protect Your Organization",
    dateTime: "July 5, 2024 | 3:00 PM - 4:00 PM",
    description: "Learn about the latest cybersecurity trends and gain insights to secure your organization's data.",
    link: "/event/2",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Employee Wellness Workshop",
    subtitle: "Prioritize Your Well-being",
    dateTime: "July 12, 2024 | 9:00 AM - 11:00 AM",
    description: "Hands-on activities to promote physical and mental health for employees.",
    link: "/event/3",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Leadership Summit",
    subtitle: "Fostering Leadership Growth",
    dateTime: "July 20, 2024 | 2:00 PM - 4:00 PM",
    description: "A platform to discuss strategies, growth opportunities, and leadership challenges.",
    link: "/event/4",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    title: "Marketing Strategies Webinar",
    subtitle: "Boost Your Business",
    dateTime: "July 25, 2024 | 5:00 PM - 6:00 PM",
    description: "Effective marketing strategies to enhance your brand visibility and revenue.",
    link: "/event/5",
  },
];

const News = () => {
  return (
    <div className="news-container">
      <Headings text="News" />
      <div className="news-list-scrollable">
        {newsData.map((event) => (
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
