import React from "react";
import "./css/about.css";
import AboutImage from "./images/Hand coding-pana.png";
import SocialContact from "./SocialContact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />{" "}
          <span className="info-name">Swaraj Anand.</span>
          <p className="internal-text">
            A passionate Web Developer specialized in creating dynamic and
            creative websites which are fully optimized and fully responsive.
          </p>
        </div>
        <div className="about-photo">
          <img className="about-logo" src={AboutImage} alt="/"></img>
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
