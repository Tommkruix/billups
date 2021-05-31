import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

import animationData from "../assets/lotties/features.json";
import Card from "components/card";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Feature() {
  return (
    <motion.div
      key="feature"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card addClass="right-2">
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        />
      </Card>
    </motion.div>
  );
}

export default Feature;
