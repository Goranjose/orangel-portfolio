import React from "react";
import "./Hero.css";
import HeroVideo from "../../assets/videos/hero-video.mp4";

function Hero() {
  return (
    <section id="Hero" className="hero">
      <video className="hero__video" src={HeroVideo} autoPlay loop muted />
      <h1>Orangel Jose Gonzalez</h1>
      <h2>Frontend Developer</h2>
    </section>
  );
}

export default Hero;
