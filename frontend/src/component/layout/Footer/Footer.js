import React from "react";
import digitaltrack from "../../../images/edigital track footer logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="midFooter">
        <img src={digitaltrack} alt="playstore" />
        <p>Website managed by edigitaltrack</p>
      </div>
    </footer>
  );
};

export default Footer;
