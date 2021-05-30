import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import Choice from "components/choice";
import Card from "components/card";
import {
  getChoice,
  getChoices,
  playGame,
  getRandomNumber,
} from "../services/gameService";
import ButtonPrimary from "components/buttonPrimary";
import logger from "services/logService";
import animationData from "../assets/lotties/congratulations.json";
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
      const { data: selected } = await getChoice();
      if (selected) {
        let { data: game } = await playGame(selected);

        game = { id: randomNumber, username: getCurrentUser(), ...game };
        saveGame(game);

        setIsWin(game.results === "win" ? true : false);
        toast(`You ${capitalizeFirstLetter(game.results)}`);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast(ex.response.data);
        //logger.log(ex.response.data);
      }
    }

    setClicked(false);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
                width={400}
                isStopped={false}
                isPaused={false}
              />
            </div>
          </>
        ) : (
          <>
            <span className="block text-center text-size- animate-bounce">
              Guess Now! {capitalizeFirstLetter(getCurrentUser())}
            </span>
            <div className="flex flex-wrap flex-row">
              {choices.map((choice) => (
                <div key={choice.id} className="m-10">
                  <Choice label={capitalizeFirstLetter(choice.name)} />
                </div>
              ))}
            </div>
            <span className="block text-center my-10 text-base animate-bounce">
              <ButtonPrimary disabled={clicked} onClick={() => handlePlay()}>
                {clicked ? "Checking Your Guess" : "Play"}
              </ButtonPrimary>
            </span>
          </>
        )}
      </Card>
    </motion.div>
  );
}

export default InPlay;
