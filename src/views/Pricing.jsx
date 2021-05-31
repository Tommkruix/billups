import React from "react";
import Card from "components/card";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

import animationData from "../assets/lotties/money.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Pricing() {
  return (
    <motion.div
      key="pricing"
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

export default Pricing;
