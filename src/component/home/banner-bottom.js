import React from "react";
import ShoutOut from "./shout-out";
import FAQ from "./faq";
import QuickSurvery from "./quick-survey";
import QuickLinks from "./quick-links";
import OurCarrerDevelopmentPhilosophy from "./our-carrer-develpment-philosophy";
import TopResources from "./top-resources";
import UpcommingEvents from "./upcomming-events";
import HolidayCalendar from "./holiday-calendar";
import Events from "./events";
import News from "./news";

const HomeBannerBottom = () => {
  return (
    <div className="feeds-container" style={{ marginTop: "-50px" }}>
      <div className="feeds-left">
        <ShoutOut/>
        <FAQ/>
        <QuickSurvery/>
      </div>
      <div className="feeds-center">
        <QuickLinks/>
        {/* <OurCarrerDevelopmentPhilosophy/> */}
        <Events/>
        <News/>
      </div>
      <div className="feeds-right">
        <TopResources/>
        <UpcommingEvents/>
        <HolidayCalendar/>
      </div>
    </div>
  );
};

export default HomeBannerBottom;
