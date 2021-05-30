import React from "react";

import ButtonPrimary from "./buttonPrimary";

function Cta() {
  return (
    <div className="bg-white p-28 sm:p-48 dark:bg-black-500">
      <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 shadow-2xl">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block animate-bounce text-size-">
            Hiring Frontend Engineer ?
          </span>
          <span className="block text-primary-500 my-5">
            It&#x27;s today or never.
          </span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow-xl text-white-500 animate-bounce">
            <ButtonPrimary className="py-4 px-6  bg-primary-100 hover:bg-primary-200 focus:ring-primary-500 focus:ring-offset-primary-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Get started
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
