import React from "react";
import Alert from "./alert";

function Input({ name, label, icon, error, ...otherProps }) {
  return (
    <>
      <div className="relative flex w-full flex-wrap items-stretch mb-3">
        <input
          name={name}
          id={name}
          placeholder={label}
          className="px-3 py-4 placeholder-primary-200 text-primary-500 relative bg-white rounded text-base border border-primary-200 outline-none focus:outline-none focus:ring w-full pr-10"
          {...otherProps}
        />
        <span className="z-10 h-full leading-normal font-normal absolute text-center text-primary-200 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-4">
          <i className={icon}></i>
        </span>
      </div>
      {error && <Alert message={error} type="error" />}
    </>
  );
}

export default Input;
