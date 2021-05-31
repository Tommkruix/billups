import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import ButtonOutline from "./buttonOutline";
import Logo from "../assets/images/logo.svg";
import useDarkMode from "hooks/useDarkMode";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [colorTheme, setTheme] = useDarkMode();

  const handleDarkTheme = () => {
    setTheme(colorTheme);

    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  function renderThemeModeButton() {
    return (
      <button
        onClick={() => handleDarkTheme()}
        className="inline-flex items-center bg-transparent border-0 sm:-my-1 my-3 py-1 px-3 focus:outline-none hover:bg-white-100 rounded text-base mt-4 md:mt-0"
      >
        {isDarkMode ? (
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </button>
    );
  }

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white-500 transition-all dark:bg-black-500 " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link to="/">
              <img src={Logo} alt="logo" className="h-8 w-auto" />
            </Link>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
            <Link
              activeClass="active"
              to="/about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative dark:text-gray-400" +
                (activeLink === "about"
                  ? " text-primary-500 animation-active "
                  : " text-black-500 hover:text-primary-500 a")
              }
            >
              About
            </Link>
            <LinkScroll
              activeClass="active"
              to="/feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative dark:text-gray-400" +
                (activeLink === "feature"
                  ? " text-primary-500 animation-active "
                  : " text-black-500 hover:text-primary-500 ")
              }
            >
              Feature
            </LinkScroll>
            <Link
              activeClass="active"
              to="/pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative dark:text-gray-400" +
                (activeLink === "pricing"
                  ? " text-primary-500 animation-active "
                  : " text-black-500 hover:text-primary-500 ")
              }
            >
              Pricing
            </Link>
            <Link
              activeClass="active"
              to="/testimonial"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonial");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative dark:text-gray-400" +
                (activeLink === "testimonial"
                  ? " text-primary-500 animation-active "
                  : " text-black-500 hover:text-primary-500 ")
              }
            >
              Testimonial
            </Link>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            {renderThemeModeButton()}
            <ButtonOutline>Sign Up</ButtonOutline>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Started */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3 dark:bg-black-100">
          <ul className="flex w-full justify-between items-center text-black-500">
            <Link
              activeClass="active"
              to="/about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-primary-500 text-primary-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </Link>
            <Link
              activeClass="active"
              to="/feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-primary-500 text-primary-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Feature
            </Link>
            <Link
              activeClass="active"
              to="/pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-primary-500 text-primary-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Pricing
            </Link>
            <Link
              activeClass="active"
              to="/testimonial"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonial");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimonial"
                  ? "  border-primary-500 text-primary-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Testimonial
            </Link>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
