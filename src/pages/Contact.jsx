import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Contactlinks from "../components/Contactlinks";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Contactlinks />
    </motion.div>
  );
};

export default Contact;
