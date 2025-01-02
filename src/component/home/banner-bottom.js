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

const HomeBannerBottom = ({ siteData }) => {
  return (
    <div className="feeds-container">
      <div className="feeds-left">
      <iframe
          src="https://www.youtube.com/embed/04UMwHBhWPU?si=UpMgpardXCUEv4-3"
          style={{ height: "250px" }}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        
        <TopResources siteData={siteData} />
        <MostViewedPages siteData={siteData} />
        <FAQ siteData={siteData} />
        <QuickSurvery siteData={siteData} />
      </div>
      <div className="feeds-center">
        <Search siteData={siteData}/>
        <HomeBannerInfoLeft siteData={siteData} />
        <Events siteData={siteData} />
        <News siteData={siteData} />
      </div>
      <div className="feeds-right">
      <QuickLinks siteData={siteData} />
        
        <PolicyList siteData={siteData} />
        <UpcommingEvents siteData={siteData} />
        <HolidayCalendar siteData={siteData} />
      </div>
    </div>
  );
};

export default HomeBannerBottom;
