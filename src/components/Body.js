import React from "react";
import "./css/body.css";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

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
        <Contact id="contact" />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Body;
