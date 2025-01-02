import React from "react";
import Headings from "../shared/heading";
import "./../css/HolidayCalendar.css"; // Import the external CSS file

const HolidayCalendar = ({siteData}) => {
  return (
    <>
    <Headings text={"Holiday Calendar"} />
    
    <div className="holiday-calendar-container">
      <div className="holiday-list">
        {siteData?.holidayCalendar?.map((holiday, index) => (
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
    </>
  );
};

export default HolidayCalendar;
