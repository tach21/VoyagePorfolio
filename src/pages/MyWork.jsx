import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import Products from "../components/Products";

const MyWork = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Products />
    </motion.div>
  );
};

export default MyWork;
