import React from "react";
import "./css/skills.css";
import CommonSeperator from "./CommonSeperator";
import { SkillData } from "./SkillsData";

function Skills() {
  const data = SkillData;

  return (
    <div className="skills">
      <CommonSeperator />
      <label className="section-title">Skills</label>
      {/* <div className="social-contact"> */}
      <div className="skill-main">
        {data.map((item) => {
          return (
            <div className="skillDiv">
              <span className="skill-icon">{item.icon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
