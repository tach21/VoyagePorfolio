import React from "react";
import { motion } from "framer-motion";
import { titleAnimation } from "../animation";
import styled from "styled-components";
import fblogo from "../img/facebook.svg";
import instalogo from "../img/instagram.svg";
import maillogo from "../img/mail.svg";

const Contactlinks = () => {
  return (
    <ContactStyle>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <>
        <div className="icon">
          <Hide>
            <Social variants={titleAnimation}>
              <img src={maillogo} alt="mail logo" />
              <a href="couturiere-voyage@outlook.fr">
                couturiere-voyage@outlook.fr
              </a>
            </Social>
          </Hide>
        </div>
        <div className="icon">
          <Hide>
            <Social variants={titleAnimation}>
              <img src={instalogo} alt="instagram logo" />
              <a href="https://www.instagram.com/voyage.couturiere/">
                instagram
              </a>
            </Social>
          </Hide>
        </div>
        <div className="icon">
          <Hide>
            <Social variants={titleAnimation}>
              <img src={fblogo} alt="facebook logo" />
              <a href="https://www.facebook.com/voyage.couturiere">facebook</a>
            </Social>
          </Hide>
        </div>
      </>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  a {
    margin: 2rem;
    text-decoration: none;
    color: #000;
  }
`;

export default Contactlinks;
