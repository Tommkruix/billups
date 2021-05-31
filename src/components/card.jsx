import React from "react";

function Card({ addClass, children }) {
  return (
    <div
      className={`bg-white py-28 my-1 sm:p-48 dark:bg-black-500 ${addClass}`}
    >
      <div className=" lg:flex lg:items-center lg:justify-center w-full mx-auto py-12 px-4 lg:py-16 z-20 shadow-2xl">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          {children}
        </h2>
      </div>
    </div>
  );
}

export default Card;
