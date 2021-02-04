import React from "react";
import BioPic from "../img/BioPic.jpg";
import { About, Description, Image, Hide } from "../style";

const Bio = () => {
  return (
    <About>
      <Description>
        <div className="tile">
          <Hide>
            <h2>Des pièces </h2>
          </Hide>
          <Hide>
            <h2>
              uniques aux <span> inspirations</span>
            </h2>
          </Hide>
          <Hide>
            <h2>
              et <span>idées</span> de voyages.
            </h2>
          </Hide>
          <p>
            Spécialiste dans le recyclage de création de vêtements,
            d'accessoires, et bijoux en petite quantité.
          </p>
          <button>Contact</button>
        </div>
      </Description>
      <Image>
        <img src={BioPic} alt="Bio picture" />
      </Image>
    </About>
  );
};

export default Bio;
