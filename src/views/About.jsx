import React from "react";
import { motion } from "framer-motion";

import Card from "components/card";

function About() {
  return (
    <motion.div
      key="about"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <span className="block animate-bounce text-size-">
          Hiring Frontend Engineer ?
        </span>
        <span className="block text-primary-500 my-5">Happy Coding!</span>
        <span className="block text-base my-5">
          <p className="text-black-200 dark:text-gray-100">
            <b className="text-primary-500">Billups</b> Using art and science
            with advanced technology, we’re revolutionizing the out-of-home
            industry by offering leading scientific targeting, accurate
            out-of-home measurement, and an innovative AI-powered recommendation
            engine.
            <br />
            <br />
            With offices across the US, Billups uses the largest independent
            managed service team in the nation to inspire brands and agencies to
            build and measure intelligent campaigns by connecting advertisers to
            their audiences.
          </p>
        </span>
      </Card>
    </motion.div>
  );
}

export default About;
