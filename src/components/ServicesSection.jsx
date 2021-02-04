import React from "react";
import Section from "../img/Section.jpg";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description"></div>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <h3>Créations uniques</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card">
          <div className="icon">
            <h3>Qualité</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card">
          <div className="icon">
            <h3>Upcycling</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card">
          <div className="icon">
            <h3>Made in France</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="image">
        <img src={Section} alt="Section image" />
      </div>
    </div>
  );
};

export default ServicesSection;
