import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MyWork = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Work</h1>
    </motion.div>
  );
};

export default MyWork;
