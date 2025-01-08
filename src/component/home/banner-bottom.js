import React from "react";
import FAQ from "./faq";
import QuickLinks from "./quick-links";
import TopResources from "./top-resources";
import MostViewedPages from "./most-viewed-pages";
import News from "./news";
import Events from "./events";
import LeadershipTeam from "./leadership-team";
import CareerDevelopment from "./career-development";
import "./../css/HomeBannerBottom.css";
import Divider from "../shared/divider";

const HomeBannerBottom = ({ siteData }) => {
  return (
    <>
      {/* <QuickLinks siteData={siteData} /> */}
      <Divider/>
      <div className="feeds-container">
        <div className="feeds-left">
          <TopResources siteData={siteData} />
          <MostViewedPages siteData={siteData} />
        </div>
        <div className="feeds-center">
          <div className="row">
            <div className="col-md-8">
            <QuickLinks siteData={siteData} />
            <FAQ siteData={siteData} />
            <CareerDevelopment siteData={siteData} />
              
            </div>
            <div className="col-md-4">
              <Events siteData={siteData} />
              <News siteData={siteData} />
            </div>
          </div>
        </div>
      </div>
      <Divider/>
      <LeadershipTeam siteData={siteData} />
    </>
  );
};

export default HomeBannerBottom;
