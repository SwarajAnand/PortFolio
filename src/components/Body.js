import React from "react";
import "./css/body.css";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section>
        <Skills id="skills" />
      </section>
      <section>
        <Work id="work" />
      </section>
      <section>
        <Contact id="contact" />
      </section>
    </div>
  );
}

export default Body;
