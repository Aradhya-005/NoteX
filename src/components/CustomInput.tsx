"use client";

import React, { useRef, ChangeEvent } from 'react';
import { FiCamera, FiMic } from 'react-icons/fi';

const CustomInput: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
  
    const handleCameraClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        // Handle file selection here
        console.log(files);
      }
    };
  return (
    <div  className="bg-gray-700 rounded-full  w-full py-4 px-3 flex items-center mt-96">
      <input
        type="text"
        placeholder="Enter your prompt"
        className="bg-transparent pl-4 w-full focus:outline-none"
      />
      <button className="ml-2 focus:outline-none">
        <FiCamera size={20} color="white" onClick={handleCameraClick} />
      </button>
      <button className="ml-2 focus:outline-none">
        <FiMic size={20} color="white" />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default CustomInput;
