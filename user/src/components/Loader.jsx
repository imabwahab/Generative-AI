import React from "react";
import { RiGeminiFill } from "react-icons/ri";

function Loader() {
  return (
    <div className="grid grid-cols-[48px_1fr] gap-5">
      {/* Spinning user icon */}
      <RiGeminiFill className="w-9 h-9 mt-1 rounded-full bg-gradient-to-tr from-[#ff4e50] to-[#5b5ddf] text-white flex items-center justify-center animate-pulse" />

      {/* Loading bars */}
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-5 w-11/12 rounded-sm bg-gradient-to-r from-red-600 via-blue-500 to-blue-50 bg-[length:200%] animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

export default Loader;
