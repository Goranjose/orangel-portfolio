import React from "react";
import "./Contact.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <footer id="Contact" className="contact">
      <div className="contact-container">
        <div className="contact__title">
          <h2>Orangel Jose Gonzalez</h2>
        </div>
      </div>
      <div className="contact__links">
        <ul className="social-media">
          <li>
            <a target="blank" href="https://github.com/Goranjose">
              <FaGithubSquare />
            </a>
          </li>
          <li>
          <a target="blank" href="https://www.linkedin.com/in/orangel-jose-gonzalez-urbina-88a335237/">
            <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Contact;
