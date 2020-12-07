import React from "react";
import "./assets/styles/components/carousel.scss";

export default function Carousel({ children }) {
  return <div className="carousel">{children}</div>;
}

function Card({ link, title, logo, description }) {
  return (
    <a
      href={link}
      className="carousel--card"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className={"topcard " + title}></div>
      <div className="carousel--b">
        <h2 className={"carousel--title"}>{title}</h2>
        <img className="carousel--logo" src={logo}></img>
      </div>
      <p className="carousel--c">{description}</p>
    </a>
  );
}

export { Card };
