"use client"; // This is a client component

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';

const ConditionalNavbar: React.FC = () => {
  const pathname = usePathname();

  // Define routes where Navbar should not be displayed
  const noNavbarRoutes = ['/dashboard'];

  return !noNavbarRoutes.includes(pathname) ? <Navbar /> : null;
};

export default ConditionalNavbar;
