import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../component/shared/navbar";

const Home = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
        <NavBar/>
    </div>
  );
};

export default Home;
