import React from "react";
import "./about.css";
import logo from "./logo.png";
import ballon from "./ballon.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={logo} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">A propos de nous</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        L’activité principale de Elite Sport Sousse est l’organisation de sessions d’entrainements 
        annuels ou mensuelle selon votre choix. Le programme technique appliqué est un programme fourni
         par nos entraineurs qui le mettent en place sont formés par les meilleurs formateurs du club. 
         Le programme de la base est constitué de trois séances d’entrainements.
        </p>
        <div className="a-award">
          <img src={ballon} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Let your dream become true</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
