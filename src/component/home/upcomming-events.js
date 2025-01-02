import React from "react";
import Headings from "../shared/heading";
import "./../css/HolidayCalendar.css";

const UpcomingEvents = ({ siteData }) => {
  return (
    <div className="top-resources-container">
      <Headings text={"Upcoming Events"} />
      <div className="holiday-calendar-container">
        <div className="holiday-list">
          {siteData?.upcomingEvents?.map((holiday, index) => (
            <div key={index} className="holiday-card">
              {/* Date Section */}
              <div className="holiday-date">
                <div className="holiday-day">
                  {new Date(holiday.date).toLocaleDateString("en-US", {
                    day: "2-digit",
                  })}
                </div>
                <div className="holiday-month">
                  {new Date(holiday.date).toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </div>
              </div>

              {/* Details Section */}
              <div className="holiday-details">
                <h3 className="holiday-title">{holiday.title}</h3>
                {/* <p className="holiday-description">{holiday.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div
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
        {siteData?.upcomingEvents?.map((event, index) => (
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
      </div> */}
    </div>
  );
};

export default UpcomingEvents;
