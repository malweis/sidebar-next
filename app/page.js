"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Main from '@/components/Main';
import Data from '@/components/Data';
import Info from '@/components/Info';
import Card from '@/components/Card';
import Acordeon from '@/components/Acordeon';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Mapas from '@/components/Mapas';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsButtonVisible(false);
  };

  const showButton = () => {
    setIsButtonVisible(true);
  };

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderMainComponent = () => {
    switch (selectedItem) {
      case 'Data':
        return <Data />;
      case 'Info':
        return <Info />;
      case 'Card':
        return <Card />;
      case 'Acordeon':
        return <Acordeon />;
      case 'CallToAction':
        return <CallToAction />;
      case 'Footer':
        return <Footer />;
        case 'Mapa':
          return <Mapas />;

      default:
        return <Main />;
    }
  };

  return (
    <main className={`main w-full h-full ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
  
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        showButton={showButton}
        onItemClick={handleSidebarItemClick}
      />

      {isButtonVisible && (
        <button
          className={`fixed top-4 left-4 transition-transform duration-500 ${isSidebarOpen ? '-translate-x-full' : ''
            }`}
          onClick={toggleSidebar}
        >
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
              <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
            </div>
          </div>
        </button>
      )}
      {renderMainComponent()}
    </main>
  );
}

