import React from "react";
import FAQ from "./faq";
import QuickSurvery from "./quick-survey";
import QuickLinks from "./quick-links";
import TopResources from "./top-resources";
import UpcommingEvents from "./upcomming-events";
import HolidayCalendar from "./holiday-calendar";
import Events from "./events";
import News from "./news";
import "./../css/HomeBannerBottom.css";
import MostViewedPages from "./most-viewed-pages";
import HomeBannerInfoLeft from "./banner-left-info";
import PolicyList from "./policy-list";
import Search from "./search";
import LeadershipTeam from "./leadership-team";
import TopMenus from "./top-menu";
import CareerDevelopment from "./career-development";

const HomeBannerBottom = ({ siteData }) => {
  return (
    <>
      <div className="feeds-container">
        <div className="feeds-left">
          {/* <TopMenus siteData={siteData} /> */}
          <TopResources siteData={siteData} />
          <MostViewedPages siteData={siteData} />
          <HolidayCalendar siteData={siteData} />
          {/* <QuickSurvery siteData={siteData} /> */}
        </div>
        <div className="feeds-center">
          <QuickLinks siteData={siteData} />
          <FAQ siteData={siteData} />
          <CareerDevelopment siteData={siteData} />
          <TopMenus siteData={siteData} />
          <PolicyList siteData={siteData} />
          {/* <LeadershipTeam siteData={siteData} /> */}
        </div>
        <div className="feeds-right">
          <News siteData={siteData} />
          <Events siteData={siteData} />
          <UpcommingEvents siteData={siteData} />
        </div>
      </div>
      <LeadershipTeam siteData={siteData} />
    </>
  );
};

export default HomeBannerBottom;
