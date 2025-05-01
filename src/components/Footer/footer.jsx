import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© &nbsp; {new Date().getFullYear()} &nbsp; VIVEK BHARTI. &nbsp; All &nbsp; rights &nbsp; reserved.</p>
    </footer>
  );
};

export default Footer;