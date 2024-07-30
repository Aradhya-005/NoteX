"use client"
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main className={`transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-8'} p-4`}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
