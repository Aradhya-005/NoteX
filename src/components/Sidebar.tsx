"use client"; // Mark this component as a client component

import React from 'react';
import { FaPlus, FaRegQuestionCircle, FaHistory, FaCog } from 'react-icons/fa';
import Hamburger from './Hamburger';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full transition-all duration-300 bg-[#191919] text-white ${isOpen ? 'w-64' : 'w-8'}`}
      style={{ width: isOpen ? '16rem' : '3.5rem' }} // 16rem = 64px, 3.5rem = 56px
    >
      {/* Toggle Button */}
      <div className="p-4 flex justify-between items-center">
        <Hamburger onClick={toggleSidebar} />
      </div>

      {/* Sidebar Content */}
      <div className={`p-4 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="mb-6">
          <div className="flex items-center gap-3 p-2 rounded-3xl bg-[#222222] text-center font-semibold w-36">
            <FaPlus className="text-[#747272] w-4 h-3" />
            <p className="text-[#585656]">New Chat</p>
          </div>
        </div>

        <div className="recent text-sm">
          <p className="text-[#e3e3e3] tracking-wide font-semibold pl-2 mb-3 mt-7">Recent</p>
          <div className="recent-message items-center gap-3 flex flex-row text-[#686868] font-semibold hover:bg-[#3a3a3a] hover:text-[#e3e3e3] hover:shadow-lg rounded-3xl p-2 cursor-pointer">
            <FaRegQuestionCircle className="w-4 h-4" />
            <p>DDA line Drawing</p>
          </div>
          <div className="recent-message items-center gap-3 flex flex-row text-[#686868] font-semibold hover:bg-[#3a3a3a] hover:text-[#e3e3e3] hover:shadow-lg rounded-3xl p-2 cursor-pointer">
            <FaRegQuestionCircle className="w-4 h-4" />
            <p>Social media app using...</p>
          </div>
          <div className="recent-message items-center gap-3 flex flex-row text-[#686868] font-semibold hover:bg-[#3a3a3a] hover:text-[#e3e3e3] hover:shadow-lg rounded-3xl p-2 cursor-pointer">
            <FaRegQuestionCircle className="w-4 h-4" />
            <p>Php backend signup...</p>
          </div>
        </div>

        <div className="bottom  text-white font-semibold mt-60 gap-3">
          <div className="bottom-items items-center flex flex-row gap-3 leading-8 text-sm hover:bg-[#3a3a3a] hover:shadow-lg rounded-3xl pl-3 cursor-pointer">
            <FaRegQuestionCircle className="w-4 h-4" />
            <p className="tracking-wider">Help</p>
          </div>
          <div className="bottom-items items-center flex flex-row gap-3 leading-8 text-sm hover:bg-[#3a3a3a] hover:shadow-lg rounded-3xl pl-3 cursor-pointer">
            <FaHistory className="w-4 h-4" />
            <p className="tracking-wider">Activity</p>
          </div>
          <div className="bottom-items items-center flex flex-row gap-3 leading-8 text-sm hover:bg-[#3a3a3a] hover:shadow-lg rounded-3xl pl-3 cursor-pointer">
            <FaCog className="w-4 h-4" />
            <p className="tracking-wider">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
