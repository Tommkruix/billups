import React from "react";

function User({ username, player, computer, results, addClass }) {
  return (
    <div
      className={`bg-gradient-to-t bg-primary-500 from-black via-pink-900 to-pink-700  h-72 w-60 rounded-2xl shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 ${addClass}`}
    >
      <img
        className="rounded-full w-16 h-16 shadow-sm absolute -top-8"
        src="https://media-exp1.licdn.com/dms/image/D4E35AQEiFPGVkjixbw/profile-framedphoto-shrink_400_400/0/1622105530116?e=1622469600&v=beta&t=zFMfAf_UrfZlVFeMdR9f2NiGR4C38zMMWYvEZob8nCo"
        alt=""
      />
      <div className="transform text-white-500 text-2xl align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8">
        {username}
      </div>
      <ul className="text-lg text-white-500 font-light md:block">
        <li>Player: {player}</li>
        <li>Computer: {computer}</li>
        <li>Result: {results}</li>
      </ul>
    </div>
  );
}

export default User;
