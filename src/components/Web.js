import React from "react";
import "./css/web.css";
import skillImage from "./images/settings.png";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>

      <div className="web-option">
        <a href="#skills">
          <img
            className="skillImage option-icon"
            src={skillImage}
            alt="skill"
          ></img>
          Skills
        </a>
      </div>

      <div className="web-option">
        <a href="#work">
          <i class="fi fi-rr-briefcase option-icon"></i>Work
        </a>
      </div>

      <div className="web-option">
        <a href="#contact">
          <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
