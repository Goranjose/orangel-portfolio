import React from "react";
import "./About.css";
import profilePicture from "../../assets/img/profile-picture.jpg";
import pdf from "../../assets/documents/cv-orangel.pdf";

function About() {
  return (
    <section id="About" className="about">
      <div className="about__description">
        <h2>Let me tell you something about me</h2>
        <p>
          I am a frontend developer, I like to learn a lot about new technologies and I like to do things in the best way, with dedication, commitment.
        </p>
        <div className="container">
          <a className="container__button" href={pdf} download>
            Download CV
          </a>
        </div>
      </div>
      <figure className="about__figure">
        <img className="about__img" src={profilePicture} alt="profile" />
      </figure>
    </section>
  );
}

export default About;
