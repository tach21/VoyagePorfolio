import React from "react";
import BioPic from "../img/BioPic.jpg";

const Bio = () => {
  return (
    <div className="description">
      <div className="tile">
        <div className="hide">
          <h2>Spécialiste dans le recyclage de création de vêtements,</h2>
        </div>
        <div className="hide">
          <h2>
            d'accessoires, <span> et bijoux</span>
          </h2>
        </div>
        <div className="hide">
          <h2>en petite quantité.</h2>
        </div>
        <p>
          Des pièces uniques aux inspirations, et idées de voyages. C'est dans
          mes découvertes et rencontres où je puise mon inspiration pour ce qui
          est du choix de mes créations. Je vous propose des collections
          éphémères avec des tissus en séries limitées.
        </p>
        <button>Contact</button>
      </div>
      <div className="image">
        <img src={BioPic} alt="Bio picture" />
      </div>
    </div>
  );
};

export default Bio;
