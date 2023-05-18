import React from "react";
import Project from "./Project.js";

const styles= {
  heading:{
    fontSize: "2.5rem",
    fontWeight: "bold",
    fontFamily :"'Times New Roman', Times, serif",
    color:"#00539C"
  }
}

const projects = [
  {
    title: "Travel Forecast - Project 1",
    imagePath: "/najiba-portfolio/images/travel-forecast.png",
    imageUrl: " https://paulddncn.github.io/Travel-Forecast/",
    alt: "Travel Forecast",
    language: "Server-Side APIs and Javascript",
  },
  {
    title: "Popular Times - Project 2",
    imagePath: "/najiba-portfolio/images/popular-times.jpeg",
    imageUrl: "https://the-popular-times.herokuapp.com/",
    alt: "Popular Times",
    language: "MVC, Node, Handlebars, SQL, Bulma, Javascript",
  },
  {
    title: "Weather Dashboard",
    imagePath: "/najiba-portfolio/images/weather-dashboard.jpeg",
    imageUrl: "https://github.com/Najiba-Haidari/week6-weather-dashboard",
    alt: "Weather Dashboard",
    language: "Javascript, Server-Side APIs",
  },
  {
    title: "Work Day Scheduler",
    imagePath: "/najiba-portfolio/images/scheduler.png",
    imageUrl: "https://github.com/Najiba-Haidari/week5-daily-scheduler",
    alt: "Work Day Scheduler",
    language: "Javascript, Third Party APIs",
  },
  {
    title: "Password Generator",
    imagePath: "/najiba-portfolio/images/password-generator.png",
    imageUrl: "https://github.com/Najiba-Haidari/week3-challenge-password-generator",
    alt: "Password Generator",
    language: "Javascript",
  },
];

export default function Porfolio() {

  return (
    <div>
      <h1 className="text-center  my-5 " style={styles.heading}>My Porfolio</h1>
      <div className="container">
        <div className="row">
          <Project 
          project={projects} 
          // title={projects.title} 
          // imagePath={projects.imagePath}
          // imageUrl={projects.imageUrl}
          // alt={projects.alt}
          // language={projects.language}
           />
        </div>
      </div>
    </div>
  );
}

