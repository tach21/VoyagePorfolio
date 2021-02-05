import React from "react";
import BioPic from "../img/BioPic.jpg";
import { About, Description, Image, Hide } from "../style";
import { motion } from "framer-motion";
import { titleAnimation, fade, imageAnimation } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const Bio = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>Des pièces </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              uniques aux <span> inspirations</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              et <span>idées</span> de voyages.
            </motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Spécialiste dans le recyclage de création de vêtements,
            d'accessoires et bijoux Éditions limité.
          </motion.p>
          <Link to="/contact">
            <motion.button variants={fade}>Contact</motion.button>
          </Link>
        </motion.div>
      </Description>
      <Image>
        <motion.img variants={imageAnimation} src={BioPic} alt="Bio picture" />
      </Image>
      <Wave />
    </About>
  );
};

export default Bio;
