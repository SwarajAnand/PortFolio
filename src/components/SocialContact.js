import React from "react";
import "./css/socialContact.css";

function SocialContact() {
  const socialData = [
    {
      platform: "Instagram",
      link: "",
      icon: require("./images/instagram.png").default,
    },
  ];

  return (
    <div>
      {socialData.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} alt="/" className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
