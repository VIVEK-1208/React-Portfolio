import React from "react";
import "./skills.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () => {
  return (
    <div className="skills">
      <section className="skills-section">
  <h2 className="skills-title">My Skills</h2>
  <p className="skills-description">
    I not only work with these technologies but excel in using them with
    best practices to deliver high-quality results. I have been working
    with all these skills to build my portfolio projects.
  </p>

  <div className="skills-container">
    <img src="/images/subSkills.jpg" alt="Sub Skills" className="skills-img" />

    <div className="skills-grid">
      <div className="skill-card">
        <i className="fa-brands fa-html5"></i>
        <span>HTML</span>
      </div>
      <div className="skill-card">
        <i className="fa-brands fa-css3-alt"></i>
        <span>CSS</span>
      </div>
      <div className="skill-card">
        <i className="fa-brands fa-js"></i>
        <span>JavaScript</span>
      </div>
      <div className="skill-card">
        <i className="fa-brands fa-react"></i>
        <span>ReactJS</span>
      </div>
      <div className="skill-card">
        <i className="fa-brands fa-python"></i>
        <span>Python</span>
      </div>
      <div className="skill-card">
        <i className="fa-brands fa-github"></i>
        <span>GitHub</span>
      </div>
      <div className="skill-card">
        <i className="fa-solid fa-database"></i>
        <span>DBMS</span>
      </div>
      <div className="skill-card">
        <i className="fa-brands fa-figma"></i>
        <span>Figma</span>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Skills;
