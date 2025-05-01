import React from "react";
import "./contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const contact = () => {
  return (
    <>
      <section className="contact-section ">
      <h1>Contact Me</h1>
      <div className="contact-box">
        <div className="form-side">
          <h2>Get In Touch</h2>
          <p>
            Feel free to reach out if you'd like to collaborate.<br />
            You're just a few clicks away!
          </p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="6" placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="info-side">
          <img src="/images/email-image.png" alt="Contact Icon" />
          <div className="info-details">
            <p><FaEnvelope /> vivekbh919@gmail.com</p>
            <p><FaPhone /> +91 6206754508</p>
            <p><FaMapMarkerAlt /> Jamshedpur, Jharkhand</p>
            <div className="socials">
              <a href="https://www.linkedin.com/in/vivek-bharti-250aa4253"><div className="circle"><FaLinkedin /></div></a>
              <a href="https://github.com/VIVEK-1208"><div className="circle"><FaGithub /></div></a>
              <a href="https://www.instagram.com/eagl_vivek?igsh=ejYweW90MnlrZmJk&utm_source=qr"><div className="circle"><FaInstagram /></div></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default contact;
