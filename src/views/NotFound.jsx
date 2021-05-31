import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

import animationData from "../assets/lotties/error-404.json";
import Card from "components/card";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function NotFound() {
  return (
    <motion.div
      key="notFound"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
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

export default NotFound;
