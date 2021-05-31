import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import animationData from "../assets/lotties/congratulations.json";
import ButtonPrimary from "components/buttonPrimary";
import Card from "components/card";
import Choice from "components/choice";
import logger from "services/logService";
import { getChoices, playGame, getRandomNumber } from "../services/gameService";
import { getCurrentUser } from "services/authService";
import { saveGame } from "services/systemService";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function InPlay() {
  const [choices, setChoices] = useState([]);
  const [playerSelection, setPlayerSelection] = useState(null);
  const [randomNumber, setRandomNumber] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    populateChoices();
  }, []);

  useEffect(() => {
    getRandomValue();
  }, [clicked]);

  const populateChoices = async () => {
    try {
      const { data: choices } = await getChoices();
      setChoices(choices);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast(ex.response.data);
        logger.log(ex.response.data);
      }
    }
  };

  const getRandomValue = async () => {
    try {
      const { data: number } = await getRandomNumber();
      setRandomNumber(number.random_number);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast(ex.response.data);
        logger.log(ex.response.data);
      }
    }
  };

  const handlePlay = async () => {
    setClicked(true);

    try {
      if (playerSelection != null) {
        let { data: game } = await playGame(playerSelection);

        game = { id: randomNumber, username: getCurrentUser(), ...game };
        saveGame(game);

        if (game.results === "win") toast(`You Won! while Computer Lose!`);
        if (game.results === "tie") toast(`You and Computer both Tie!`);
        if (game.results === "lose") toast(`You Lose! while Computer Won!`);

        setIsWin(game.results === "win" ? true : false);
      } else {
        toast.info(`You haven't made your selection yet!`);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast(ex.response.data);
        logger.log(ex.response.data);
      }
    }

    setClicked(false);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (choices.length === 0) return <Card>Loading...</Card>;

  return (
    <motion.div
      key="inPlay"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        {isWin ? (
          <>
            <span className="block text-center text-size- animate-bounce">
              Congratulations {capitalizeFirstLetter(getCurrentUser())},
              <br />
              <br />
              You Won 🎉
            </span>
            <span className="block text-center my-10 text-base animate-bounce">
              <Link to="/logout">
                <ButtonPrimary>Play Again</ButtonPrimary>
              </Link>
            </span>
            <div>
              <Lottie
                options={defaultOptions}
                height={400}
                width="100%"
                isStopped={false}
                isPaused={false}
              />
            </div>
          </>
        ) : (
          <>
            <span className="block text-center text-size- animate-bounce">
              It's time to play! {capitalizeFirstLetter(getCurrentUser())}
            </span>
            <div className="flex flex-wrap flex-row">
              {choices.map((choice) => (
                <div key={choice.id} className="my-10 m-auto">
                  <Choice
                    onClick={() => setPlayerSelection(choice.id)}
                    select={choice.id === playerSelection ? true : false}
                    label={capitalizeFirstLetter(choice.name)}
                  />
                </div>
              ))}
            </div>
            <span className="block text-center my-10 text-base animate-bounce">
              <ButtonPrimary disabled={clicked} onClick={() => handlePlay()}>
                {clicked ? "Checking Who Wins..." : "Play"}
              </ButtonPrimary>
            </span>
          </>
        )}
      </Card>
    </motion.div>
  );
}

export default InPlay;
