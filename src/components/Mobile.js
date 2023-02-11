import React from "react";
import "./css/mobile.css";
import skillImage from "./images/settings.png";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rr-menu-burger menu-icon"></i>
      </div>

      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i class="fi fi-rr-edit-alt option-icon"></i>Projects
          </a>
        </div>

        <div className="mobile-option">
          <a href="#skills">
            <img
              className="skillImage option-icon"
              src={skillImage}
              alt="skill"
            ></img>
            Skills
          </a>
        </div>

        <div className="mobile-option">
          <a href="#work">
            <i class="fi fi-rr-briefcase option-icon"></i>Work
          </a>
        </div>

        <div className="mobile-option">
          <a href="#contact">
            <i class="fi fi-rr-user option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
