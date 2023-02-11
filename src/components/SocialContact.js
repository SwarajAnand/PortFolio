import React from "react";
import "./css/socialContact.css";
import { SocialData } from "./SocialMedia";

function SocialContact() {
  return (
    <div className="social-contact">
      {SocialData.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} alt="" className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
