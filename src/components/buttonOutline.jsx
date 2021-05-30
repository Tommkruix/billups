import React from "react";

const ButtonOutline = ({ children, addClass, ...otherProps }) => {
  return (
    <button
      className={
        "animate-none font-medium tracking-wide py-2 px-5 sm:px-8 border border-primary-500 text-primary-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-primary-500 hover:text-white-500 transition-all hover:shadow-primary " +
        addClass
      }
      {...otherProps}
    >
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
