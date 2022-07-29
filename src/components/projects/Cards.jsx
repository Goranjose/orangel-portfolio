import React from "react";
import "./Cards.css";

function Cards({ title, description, img, url }) {
  return (
    <div className="card">
      <article className="card__article">
        <img className="card__img" src={img} alt="imagen" />
        <div className="card__info">
          <h3>{title}</h3>
          <p>{description}</p>
          <button type="button">
            <a target="blank" href={url}>
              View Demo
            </a>
          </button>
        </div>
      </article>
    </div>
  );
}

export default Cards;
