import React, { useState } from "react";
import "../../assets/css/header.css";

import AppLogo from "../../assets/images/app_img.png";
import MoonLogo from "../../assets/images/moon.svg";
import SunLogo from "../../assets/images/sun.svg";
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const ModeLogo = darkMode ? MoonLogo : SunLogo;
  function switchMode() {
    const body = document.getElementById("body");
    body.classList.toggle("dark");
    setDarkMode((prevState) => !prevState);
  }

  return (
    <header className="app_header">
      <div className="container">
        <div className="flexBox flex-csb">
          <div className="app_title flexBox flex-c">
            <div className="app_imgBox">
              <img className="img-fluid" src={AppLogo} alt="Corona Virus" />
            </div>
            <span className="brand">Corona Tracker</span>
          </div>
          <div onClick={() => switchMode()} className="switch_icons">
            <img className="img-fluid" src={ModeLogo} alt="icons" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
