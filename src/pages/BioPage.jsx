import React from "react";
import Bio from "../components/Bio";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const BioPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Bio />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default BioPage;
