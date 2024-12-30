import React, { useState } from "react";
import Headings from "../shared/heading";
import "./../css/Events.css"; // Corrected import path

const eventsData = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Annual Town Hall",
    dateTime: "June 30, 2024 | 10:00 AM - 12:00 PM",
    type: "In-person",
    description: "Join us for the annual town hall meeting to discuss key updates and achievements.",
    link: "/event/1",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Cybersecurity Webinar",
    dateTime: "July 5, 2024 | 3:00 PM - 4:00 PM",
    type: "Virtual",
    description: "Learn about the latest cybersecurity trends and how to protect your organization.",
    link: "/event/2",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Employee Wellness Workshop",
    dateTime: "July 12, 2024 | 9:00 AM - 11:00 AM",
    type: "In-person",
    description: "A hands-on workshop focused on physical and mental well-being.",
    link: "/event/3",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Leadership Summit",
    dateTime: "July 20, 2024 | 2:00 PM - 4:00 PM",
    type: "In-person",
    description: "A summit to discuss leadership strategies and growth opportunities.",
    link: "/event/4",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    title: "Marketing Strategies Webinar",
    dateTime: "July 25, 2024 | 5:00 PM - 6:00 PM",
    type: "Virtual",
    description: "Learn effective marketing strategies to enhance your business.",
    link: "/event/5",
  },
];

const Events = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="news-events-container">
      <Headings text="Events" />
      <div className="events-list">
        {eventsData.slice(0, showMore ? eventsData.length : 4).map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-image-container">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-type">{event.type}</div>
            </div>
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date-time">{event.dateTime}</p>
              <p className="event-description">{event.description}</p>
              <a href={event.link} className="event-link">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className="show-more-btn" onClick={toggleShowMore}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Events;
