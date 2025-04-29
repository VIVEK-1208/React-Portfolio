import React from "react";
import "./skills.css";

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

      <div className="skills-grid">
        <div className="skill-card">
          <img src="/icons/html5.png" alt="HTML" />
          <span>HTML</span>
        </div>
        <div className="skill-card">
          <img src="/icons/css3.png" alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="skill-card">
          <img src="/icons/js.png" alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="skill-card">
          <img src="/icons/typescript.png" alt="TypeScript" />
          <span>TypeScript</span>
        </div>
        <div className="skill-card">
          <img src="/icons/react.png" alt="ReactJS" />
          <span>ReactJS</span>
        </div>
        <div className="skill-card">
          <img src="/icons/redux.png" alt="Redux" />
          <span>Redux</span>
        </div>
        <div className="skill-card">
          <img src="/icons/nextjs.png" alt="NextJS" />
          <span>NextJS</span>
        </div>
        <div className="skill-card">
          <img src="/icons/tailwind.png" alt="TailwindCSS" />
          <span>TailwindCSS</span>
        </div>
      </div>

      <img src="/images/subSkills.jpg" alt="Sub Skills" className="skills-img" />
    </section>
    </div>
    
  );
};

export default Skills;
