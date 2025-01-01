import React from "react";
import FAQ from "./faq";
import QuickSurvery from "./quick-survey";
import QuickLinks from "./quick-links";
import TopResources from "./top-resources";
import UpcommingEvents from "./upcomming-events";
import HolidayCalendar from "./holiday-calendar";
import Events from "./events";
import News from "./news";
import './../css/HomeBannerBottom.css'
import TopLinks from "./top-links";
import EventNews from "./events-&-news";

const HomeBannerBottom = ({siteData}) => {
  return (
    <div className="feeds-container">
      <div className="feeds-left">
        <FAQ siteData={siteData} />
        <QuickSurvery siteData={siteData} />
      </div>
      <div className="feeds-center">
        <TopLinks siteData={siteData} />
        <EventNews siteData={siteData} />
      </div>
      <div className="feeds-right">
        <UpcommingEvents siteData={siteData} />
        <HolidayCalendar siteData={siteData} />
      </div>
    </div>
  );
};

export default HomeBannerBottom;
