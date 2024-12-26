import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../component/shared/navbar";
import HomeBanner from "../component/home/banner";
import HomeBannerBottom from "../component/home/banner-bottom";

const Home = () => {
  
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
        <NavBar/>
        <HomeBanner/>
        <HomeBannerBottom/>
    </div>
  );
};

export default Home;
