import React from "react";
import Alert from "./alert";

function Select({ name, label, options, error, ...otherProps }) {
  return (
    <>
      <div className="relative flex w-full relative mb-3 inline-flex">
        <svg
          className="w-2 h-2 absolute top-0 right-0 m-7 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#0c9c81"
            fill-rule="nonzero"
          />
        </svg>
        <select
          name={name}
          id={name}
          className="border py-4 px-3 placeholder-primary-200 text-primary-500 bg-white text-base border-primary-200 outline-none focus:outline-none focus:ring flex w-full flex-wrap items-stretch border-gray-300 rounded text-gray-600 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          {...otherProps}
        >
          <option value="">{label}</option>
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      {error && <Alert message={error} type="error" />}
    </>
  );
}

export default Select;
