import React from "react";
import "./Project.css";

const projectData = [
  {
    title: "AI Mock-Interview ",
    subtitle: "Frontend: React + TypeScript,Build Tool: Vite, Package Manager: pnpm, Styling: Tailwind CSS, Linting: ESLint, Deployment: Firebase Hosting",
    description: "AI Mock-Interview is an AI-powered mock interview platform that simulates real-world interview experiences. It helps job seekers prepare confidently by generating questions based on job roles and analyzing user responses for improvement.",
    image: "/images/project-1.png",
    link: "https://ai-mock-interview-2f5a4.web.app/"
  },
  {
    title: "🤖 Gemini Chatbot",
    subtitle: "Frontend: React + TypeScript, Bundler: Vite, Styling: Custom CSS, AI: Google Generative AI (Gemini)",
    description: "An AI-powered chatbot built using React + TypeScript + Vite, integrated with Google Gemini API to provide real-time conversational experiences.",
    image: "/images/project-2.png",
    link: "https://aichat-assistant.netlify.app/"
  },
  {
    title: "Medical Recommendation System",
    subtitle: "Frontend: HTML, CSS, JavaScript, Backend: Flask, Machine Learning: Python (Scikit-learn, Pandas, NumPy), Database: SQLite",
    description: " the Medical Recommendation System, a user-friendly platform designed to empower individuals to take charge of their health. Leveraging machine learning models, this system predicts potential illnesses based on symptoms and provides tailored recommendations for medications, dietary advice, and workout plans.",
    image: "/images/website-img-3.jpg",
    link: ""
  },
  {
    title: "FOODIE",
    subtitle: "React",
    description: "Online ordering food",
    image: "/images/project-4.png",
    link: "https://vivek-1208.github.io/FOODIE_WEBSITE/"
  },
  {
    title: "Portfolio",
    subtitle: "HTML, CSS",
    description: "This project showcases my skills, projects, and a brief introduction about me.",
    image: "/images/project-5.png",
    link: "https://vivekbharti-portfolio.netlify.app/"
  },
  {
    title: "Zomato Landing Page Clone",
    subtitle: "HTML, CSS, and JavaScript",
    description: "A clone of the Zomato landing page - closely mimic the design and functionality of the original Zomato homepage.",
    image: "/images/project-6.png",
    link: "https://vivek-1208.github.io/Landing-Page_-Zomato-/"
  },
  {
    title: "To-Do List",
    subtitle: "HTML, CSS, and JavaScript",
    description: "A simple and elegant To-Do List web application that allows users to add, check off, and remove tasks. The app also saves the user's list in their browser's local storage, so the tasks persist even after a page reload.",
    image: "/images/project-7.png",
    link: "https://vivek-1208.github.io/To-Do-List/"
  },
  {
    title: "Age Calculator",
    subtitle: "HTML, CSS, and JavaScript",
    description: "This is a simple web-based age calculator application that allows users to enter their birth date and calculate their current age in years, months, and days. The project includes error handling for invalid dates and responsive design.",
    image: "/images/project-8.png",
    link: "https://vivek-1208.github.io/Age-Calculator/"
  }
];

const Project = () => {
  return (
    <div className="project-container">
      {/* Top banner */}
      <div className="project-banner">
        <h1 className="banner-title">Projects</h1>
      </div>

      {projectData.map((project, index) => (
        <div className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`} key={index}>
          <div className="project-image-wrapper">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-info">
            <h2>{project.title}</h2>
            <h4 className="tech-stack">{project.subtitle}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="launch-button">
              Launch Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
