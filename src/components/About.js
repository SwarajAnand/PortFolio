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
          <span className="info-name">Swaraj Anand.</span> <br /> I love
          experimenting with the web
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
