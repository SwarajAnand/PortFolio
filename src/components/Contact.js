import React from "react";
import CommonSeperator from "./CommonSeperator";
import "./css/contact.css";
import SocialContact from "./SocialContact";

function Contact() {
  return (
    <div className="contact">
      <CommonSeperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("./Resume/resume.pdf")}>
            Download Resume &nbsp;
            {/* <i class="fi fi-tr-down-to-line" /> */}
            <img
              className="download-icon"
              src={
                "https://www.flaticon.com/svg/vstatic/svg/9253/9253362.svg?token=exp=1676135569~hmac=78f732ef467969147a4960494a1a8c9a"
              }
              alt=""
              href=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
