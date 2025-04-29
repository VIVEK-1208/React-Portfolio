import React, { useEffect, useRef, useState } from "react";
import "./about-me.css";

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`about-container fade-in ${isVisible ? "show" : ""}`}
    >
      <div className="about-right">
        <h2>About Me</h2>
        <p>
          Hi! I'm Vivek Kumar Bharti, a passionate Front-End Engineer and UI/UX
          Designer. I love creating beautiful, responsive websites and
          interactive user experiences.
        </p>
        <p>
          Skilled in React, JavaScript, HTML, CSS, and modern web technologies.
          Always eager to learn, grow, and bring creative ideas to life through
          code and design.
        </p>
        <div>
          <button className="project">My Projects</button>
        </div>
      </div>

      <div className="about-left">
        <div className="solid-box"></div>
        <img src="/images/about-me.jpg" alt="About Me" className="about-img" />
      </div>
    </div>
  );
};

export default About;
