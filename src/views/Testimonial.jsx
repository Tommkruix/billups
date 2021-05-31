import React from "react";
import { motion } from "framer-motion";

import Card from "components/card";
import Lottie from "react-lottie";

import animationData from "../assets/lotties/review.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Testimonial() {
  return (
    <motion.div
      key="testimonial"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <Lottie
          options={defaultOptions}
          height={400}
          width="100%"
          isStopped={false}
          isPaused={false}
        />
      </Card>
    </motion.div>
  );
}

export default Testimonial;
