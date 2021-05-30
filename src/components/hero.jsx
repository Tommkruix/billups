import React from "react";
import Typical from "react-typical";

import ButtonPrimary from "./buttonPrimary";
import VideoGame from "../assets/images/video_game.svg";
import { Link } from "react-router-dom";

const time = 6000;

function Hero() {
  return (
    <>
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Rock Paper Scissors Spock <strong>Lizard</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6 dark:text-gray-400">
              “The Big Bang Theory” called Rock, Paper, Scissors, Lizard, Spock.
            </p>
            <div className="animate-bounce text-white-500 shadow-2xl">
              <Link to="/play">
                <ButtonPrimary className="py-4 px-6  bg-primary-100 hover:bg-primary-200 focus:ring-primary-500 focus:ring-offset-primary-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Get Started
                </ButtonPrimary>
              </Link>
            </div>
          </div>
          <div className="flex w-full">
            <div className="h-full w-full">
              <img
                src={VideoGame}
                alt="Video Game"
                quality={100}
                width={720}
                height={600}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full flex">
          <div className="dark:bg-black-500 rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-1 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
            <div className="flex items-center justify-center sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0">
              <div className="flex mx-auto w-full sm:w-auto items-center justify-center rounded-full">
                <p className="text-4xl text-black-600 text-center font-bold text-opacity-75">
                  RPSSL{" - "}
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Scissors cuts Paper",
                      time,
                      "Paper covers Rock",
                      time,
                      "Rock crushes Lizard",
                      time,
                      "Lizard poisons Spock",
                      time,
                      "Spock smashes Scissors",
                      time,
                      "Scissors decapitates Lizard",
                      time,
                      "Lizard eats Paper",
                      time,
                      "Paper disproves Spock",
                      time,
                      "Spock vaporizes Rock",
                      time,
                      "Rock crushes Scissors",
                      time,
                    ]}
                  />
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
