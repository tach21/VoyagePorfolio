import React from "react";
import BioPic from "../img/BioPic.jpg";
import styled from "styled-components";

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

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default Bio;
