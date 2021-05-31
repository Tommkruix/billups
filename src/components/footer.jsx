import React from "react";
import { Link } from "react-router-dom";

import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import Logo from "../assets/images/logo.svg";
import Twitter from "../assets/images/twitter.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 dark:bg-black-500 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-8 w-auto mb-6" />
          </Link>
          <p className="mb-4 dark:text-gray-400">
            <strong className="font-medium">“The Big Bang Theory”</strong>{" "}
            called Rock, Paper, Scissors, Lizard, Spock.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img alt="facebook" src={Facebook} className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img alt="twitter" src={Twitter} className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <img alt="instagram" src={Instagram} className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">&copy; 2021 Billups</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Services</p>
          <ul className="text-black-500 dark:text-gray-400">
            <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
              Managed Services{" "}
            </li>
            <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
              OOH Platform{" "}
            </li>
            <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
              Data Science{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Solutions</p>
          <ul className="text-black-500 dark:text-gray-400">
            <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
              Customized Targeting{" "}
            </li>
            <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
              Automated Buying{" "}
            </li>
            <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
              Actionable Reporting{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Library</p>
          <ul className="text-black-500 dark:text-gray-400">
            <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
              The Work{" "}
            </li>
            <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
              Articles{" "}
            </li>
            <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
              Press{" "}
            </li>
            <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
              Podcast{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
