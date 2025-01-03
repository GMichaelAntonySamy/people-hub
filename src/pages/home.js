import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../component/shared/navbar";
import HomeBanner from "../component/home/banner";
import HomeBannerBottom from "../component/home/banner-bottom";

const Home = () => {
  const [siteData, setSiteData] = useState({}); // State to hold siteData

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSiteDataChange = (data) => {
    setSiteData(data); // Update siteData when NavBar sends new data
  };

  return (
    <div>
      <NavBar onSiteDataChange={handleSiteDataChange} />
      <HomeBanner siteData={siteData} />
      <HomeBannerBottom siteData={siteData} />
    </div>
  );
};

export default Home;
