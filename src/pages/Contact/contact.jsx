import React from 'react'
import './contact.css';

const contact = () => {
  return (
    <div>
      <section className="contact-section">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="form-box">
          <h2>Get In Touch</h2>
          <p>
            Feel free to reach out if you'd like to collaborate<br />
            you are just a few clicks away!
          </p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="6" placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Contact Icon" />
          <p><FaEnvelope /> abdelrahman.qassem@gmail.com</p>
          <p><FaPhone /> +2 01000 66 24 55</p>
          <p><FaMapMarkerAlt /> Alexandria, Egypt</p>
          <div className="socials">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default contact
