import React from "react";
import Headings from "../shared/heading";

const UpcomingEvents = () => {
  const events = [
    {
      date: "2024-01-10",
      title: "Annual Tech Conference",
      timeSlot: "10:00 AM - 4:00 PM",
      label: "Conference",
    },
    {
      date: "2024-02-15",
      title: "Employee Wellness Workshop",
      timeSlot: "2:00 PM - 5:00 PM",
      label: "Workshop",
    },
    {
      date: "2024-03-20",
      title: "Product Launch Event",
      timeSlot: "6:00 PM - 9:00 PM",
      label: "Launch",
    },
    {
      date: "2024-04-05",
      title: "Leadership Training Session",
      timeSlot: "9:00 AM - 1:00 PM",
      label: "Training",
    },
    {
      date: "2024-05-30",
      title: "Quarterly Business Review",
      timeSlot: "3:00 PM - 6:00 PM",
      label: "Meeting",
    },
  ];

  return (
    <div className="top-resources-container">
      <Headings text={"Upcoming Events"} />
      <div
        className="scrollable-container"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2px",
          maxHeight: "500px",
          overflow: "auto",
          width: "100%",
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px",
              borderRadius: "10px",
              // boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              borderRight: "3px solid #77a1d6",
              borderBottom: "3px solid #77a1d6",
              cursor:'pointer',
              width: "100%",
            }}
          >
            {/* Date Section */}
            <div
              style={{
                maxWidth: "25%",
                minWidth: "25%",
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
                borderRight: "1px solid black",
              }}
            >
              <div style={{ fontSize: "1.3rem" }}>
                {new Date(event.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                })}
              </div>
              <div style={{ fontSize: "1.3rem" }}>
                {new Date(event.date).toLocaleDateString("en-US", {
                  month: "short",
                })}
              </div>
            </div>

            {/* Event Details */}
            <div
              style={{
                marginLeft: "15px",
                flex: 1,
                maxWidth: "75%",
                minWidth: "75%",
                padding:'10px'
              }}
            >
              <h3
                style={{ margin: "0 0 5px", color: "black", fontSize: "1rem" }}
              >
                {event.title}
              </h3>
              <p style={{ margin: "0", fontSize: ".8rem", color: "black" }}>
                {event.timeSlot}
              </p>
              <span
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  backgroundColor: "#7864ac",
                  color: "#fff",
                  fontSize: ".7rem",
                }}
              >
                {event.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
