import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import ButtonPrimary from "components/buttonPrimary";
import Card from "components/card";
import Hero from "components/hero";
import User from "components/user";
import { getGames, resetGames } from "services/systemService";

function Home() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    populateScores();
  }, []);

  async function populateScores() {
    const data = await getGames();

    setScores(data);
  }

  function handleReset() {
    resetGames();
    toast("Games cleared!");
    populateScores();
  }

  function renderScores() {
    const users = (
      <div className="flex flex-wrap flex-row mx-6">
        {scores ? (
          scores.map((item) => (
            <div className="m-10">
              <User
                username={item.username}
                player={item.player}
                computer={item.computer}
                results={item.results}
              />
            </div>
          ))
        ) : (
          <div className="m-10">
            <span className="block text-center my-4 text-base">
              There are no recent games!
            </span>
          </div>
        )}
      </div>
    );

    return users;
  }

  return (
    <motion.div
      key="home"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Card>
        <span className="block text-center my-4 text-size-">Scoreboard</span>
        <span className="block text-center my-4 text-base">
          10 Most Recent Games
        </span>
        <span className="block text-center my-4 text-base animate-bounce">
          <ButtonPrimary
            onClick={() => {
              handleReset();
            }}
            className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-red-500 hover:shadow-primary-md transition-all outline-none"
          >
            Reset
          </ButtonPrimary>
        </span>
        {renderScores()}
      </Card>
    </motion.div>
  );
}

export default Home;
