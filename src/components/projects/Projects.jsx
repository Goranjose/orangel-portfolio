import React, { useState } from "react";
import Cards from "./Cards";
import "./Projects.css";
import images from "../../assets/images";

function Projects() {
  const [select, setSelect] = useState("all");
  return (
    <section id="Projects" className="projects">
      <div className="projects__title">
        <h2>Projects</h2>
      </div>

      <div className="projects__container-buttons">
        <div className="projects__types-buttons">
          <button
            onClick={() => setSelect("all")}
            className="projects__button"
            type="button"
          >
            <p>All</p>
          </button>
          <button
            onClick={() => setSelect("html and css")}
            className="projects__button"
            type="button"
          >
            <p>HTML and CSS</p>
          </button>
          <button
            onClick={() => setSelect("javascript")}
            className="projects__button"
            type="button"
          >
            <p>JavaScript</p>
          </button>

          <button
            onClick={() => setSelect("react")}
            className="projects__button"
            type="button"
          >
            <p>React</p>
          </button>
        </div>
        <div className="projects__contaners-cards">
          <div className="projects__cards">
            {images.grid_image
              .filter((item) => item.category === select || item.all === select)
              .map((image) => (
                <Cards
                  title={image.title}
                  description={image.description}
                  img={image.img}
                  url={image.url}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
