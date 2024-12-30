import React from "react";
import Headings from "../shared/heading";
import "./../css/HolidayCalendar.css"; // Import the external CSS file

const HolidayCalendar = () => {
  const holidays = [
    {
      date: "2024-01-01",
      title: "New Year's Day",
      description:
        "Celebrate the start of the new year with joy and resolutions.",
    },
    {
      date: "2024-01-26",
      title: "Republic Day",
      description: "Commemorating the adoption of the Constitution of India.",
    },
    {
      date: "2024-08-15",
      title: "Independence Day",
      description: "Honoring India's independence and freedom fighters.",
    },
    {
      date: "2024-10-02",
      title: "Gandhi Jayanti",
      description: "Celebrating the birth anniversary of Mahatma Gandhi.",
    },
    {
      date: "2024-12-25",
      title: "Christmas Day",
      description: "A joyous celebration of the birth of Jesus Christ.",
    },
  ];

  return (
    <div className="holiday-calendar-container">
      <Headings text={"Holiday Calendar"} />
      <div className="holiday-list">
        {holidays.map((holiday, index) => (
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
  );
};

export default HolidayCalendar;
