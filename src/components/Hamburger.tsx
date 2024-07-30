"use client"; // Mark this component as a client component

import React, { useState } from "react";

const Hamburger: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  // Handle mouse down and up events to manage the button active state
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  return (
    <div
      className={`relative flex items-center justify-center rounded-full p-2 transition-all duration-300  ${
        isActive ? "bg-[#464646] shadow-inner" : "hover:bg-[#3a3a3a] hover:shadow-lg hover:p-2"
      }`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <button
        onClick={onClick}
        className="relative flex flex-col items-center justify-center w-6 h-6 text-white rounded transition-all duration-300"
        style={{ border: "none", outline: "none" }}
      >
        <div className="bg-white w-5 h-0.5 mb-1"></div>
        <div className="bg-white w-5 h-0.5 mb-1"></div>
        <div className="bg-white w-5 h-0.5"></div>
      </button>
    </div>
  );
};

export default Hamburger;
