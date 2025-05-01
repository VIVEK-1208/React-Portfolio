import React, { useEffect, useRef } from "react";
import "./home.css";

const Home = () => {
  const dynamicRoleRef = useRef(null);

  useEffect(() => {
    const roles = [
      "UI/UX Designer",
      "Front-End Engineer",
      "Web Developer",
      "Creative Coder",
    ];
    let currentRole = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const fullRole = roles[currentRole];

      if (dynamicRoleRef.current) {
        if (isDeleting) {
          dynamicRoleRef.current.textContent = fullRole.substring(
            0,
            charIndex--
          );
        } else {
          dynamicRoleRef.current.textContent = fullRole.substring(
            0,
            charIndex++
          );
        }

        if (!isDeleting && charIndex === fullRole.length) {
          setTimeout(() => (isDeleting = true), 1000);
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          currentRole = (currentRole + 1) % roles.length;
        }
      }

      setTimeout(typeEffect, isDeleting ? 80 : 150);
    }

    typeEffect();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="left">
            <h1>VIVEK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KUMAR BHARTI</h1>
            <p>
              <span className="static-text">I'm a </span>
              <span className="dynamic-role" ref={dynamicRoleRef}></span>
            </p>
          </div>

          <div className="right">
            <div className="hexagon-wrapper">
              <div className="hexagon-bg"></div>
              <img
                src="/images/vivek.png"
                alt="Profile"
                className="profile-img"
              />
            </div>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-content">
            <span className="tag">FAST LEARNER</span>
            <span className="tag">TEAM WORK</span>
            <span className="tag">EFFECTIVE-COMMUNICATION</span>
            <span className="tag">PROBLEM-SOLVING</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
