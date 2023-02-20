import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import AxiosCall from "../Request/AxiosCall";
import "./Home.scss";
const Home = () => {
  const [showSider, setShowSider] = useState(false);

  return (
    <div className="Home">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
