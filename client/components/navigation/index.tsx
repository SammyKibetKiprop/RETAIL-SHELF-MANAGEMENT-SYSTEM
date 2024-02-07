'use client';
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const NavigationPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} />
    </>
  );
};

export default NavigationPanel;
