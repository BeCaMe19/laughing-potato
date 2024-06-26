"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { FaAccusoft,FaAdversal,FaAirFreshener } from 'react-icons/fa';
import { CiLogin } from "react-icons/ci";
import AccountMenu from '@/components/AccountMenu';

import NavbarItem from '@/components/NavbarItem';

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);



  return (
    <nav className="w-full fixed z-40 bg-orange-400">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
        <img src="/next.svg" className="h-4 lg:h-7" alt="Logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Главная" active />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          {/* <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <FaAdversal className="w-6" />
          </div> */}
          {/* <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <FaAirFreshener className="w-6" />
          </div> */}
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <CiLogin size={26} className={` text-black fill-black transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
