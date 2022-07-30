import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <>
        <Navbar scrolling={scrollY} />
        <Hero />
        <About />
        <Projects />
        <Contact />
    </>
  );
}

export default App;
