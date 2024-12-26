import React from "react";
import Headings from "../shared/heading";
import ShoutOut from "./shout-out";
import FAQ from "./faq";
import QuickSurvery from "./quick-survey";
import QuickLinks from "./quick-links";
import OurCarrerDevelopmentPhilosophy from "./our-carrer-develpment-philosophy";
import NewAndEvents from "./new-&-events";
import TopResources from "./top-resources";
import UpcommingEvents from "./upcomming-events";
import HolidayCalendar from "./holiday-calendar";

const HomeBannerBottom = () => {
  return (
    <div className="feeds-container">
      <div className="feeds-left">
        <ShoutOut/>
        <FAQ/>
        <QuickSurvery/>
      </div>
      <div className="feeds-center">
        <QuickLinks/>
        <OurCarrerDevelopmentPhilosophy/>
        <NewAndEvents/>
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
