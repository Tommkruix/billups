import React from "react";

function Choice({ label, select, ...otherProps }) {
  return (
    <div
      className={`shadow-lg rounded-2xl w-64 p-4 py-6 ${
        select ? "bg-primary-500" : "bg-white"
      }`}
      {...otherProps}
    >
      <div className="flex flex-col items-center justify-center">
        <div
          className={`w-24 h-24 rounded-full relative ${
            select ? "bg-white-500" : "bg-green-200"
          }`}
        >
          <i
            width="20"
            height="20"
            className="fa fa-dot-circle-o w-8 h-8 text-green-700 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
          ></i>
        </div>
        <p
          className={`text-xl font-medium mb-4 mt-4 ${
            select ? "text-white-500" : "text-primary-500"
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export default Choice;
