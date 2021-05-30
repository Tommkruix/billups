import React from "react";

const ButtonPrimary = ({ children, addClass, ...otherProps }) => {
  return (
    <button
      className={
        " py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-primary-500 hover:shadow-primary-md transition-all outline-none " +
        addClass
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
