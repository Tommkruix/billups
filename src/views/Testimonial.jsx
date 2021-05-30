import React from "react";
import { motion } from "framer-motion";

import Cta from "components/cta";

function Testimonial() {
  return (
    <motion.div
      key="testimonial"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Cta />
    </motion.div>
  );
}

export default Testimonial;
