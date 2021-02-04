import React from "react";
import creation from "../img/creation.jpg";
import { About, Description, Hide } from "../style";
import styled from "styled-components";
import handmade from "../img/handmade.svg";
import quality from "../img/quality.svg";
import upcycling from "../img/upcycling.svg";
import unique from "../img/unique.svg";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={unique} alt="icon" />
              <h3>Créations uniques</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={quality} alt="icon" />
              <h3>Qualité</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={upcycling} alt="icon" />
              <h3>Upcycling</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={handmade} alt="icon" />
              <h3>Made in France</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
    color: #000;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    flex-wrap: wrap;
  }

  h3 {
    margin-left: 1rem;
    background: #d2abab;
    color: black;
    padding: 1rem;
  }
`;

export default ServicesSection;
