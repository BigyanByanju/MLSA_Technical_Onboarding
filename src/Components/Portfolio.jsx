/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "desktop with a diary, pen and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "BattleShip Game",
    description:
      "BattleShip is a multiplayer game where you try to sink your opponent's ships before they sink yours.",
    url: "https://github.com/BigyanByanju/Battleship",
  },
  {
    title: "Car Rental Managment System",
    description:
      "Car Rental Management System is a desktop application developed using C++. It is a system that manages the car rental business.",
    url: "https://github.com/BigyanByanju/Car_Rental",
  },
  {
    title: "My Portfolio Website",
    description:
      "Repository for my portfolio website.",
    url: "https://github.com/BigyanByanju/Portfolio-Website",
  },
  {
    title: "Trek Diaries",
    description:
      "Trek Diareis is a website where you can share your trekking experiences.",
    url: "https://github.com/Re-Dei-s-Organization/Trek-Diaries",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
