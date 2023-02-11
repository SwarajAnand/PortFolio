import React from "react";
import CommonSeperator from "./CommonSeperator";
import "./css/projects.css";
import { ProjectData } from "./ProjectData";

function Projects() {
  const data = ProjectData;

  return (
    <div className="projects">
      <CommonSeperator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((Project) => {
          return (
            <div className="project-card">
              <div className="project-info">
                <label className="project-title">{Project.title}</label>
                <div className="project-links">
                  {Project.demo && (
                    <a className="project-link" href={Project.demo}>
                      <div className="link-button">
                        <i class="fi fi-rr-globe"></i>Demo
                      </div>
                    </a>
                  )}
                  {Project.github && (
                    <a className="project-link" href={Project.github}>
                      <div className="link-button">
                        <i class="devicon-github-original colored"></i>Github
                      </div>
                    </a>
                  )}
                </div>
                <p>{Project.about}</p>
                <div className="project-tags">
                  {Project.tags.map((tag) => {
                    return <label className="tag">{tag}</label>;
                  })}
                </div>
              </div>
              <img src={Project.image} alt="" className="project-photo" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
