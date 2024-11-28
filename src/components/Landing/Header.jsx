import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../store/useTheme';
import { IoMdClose } from 'react-icons/io';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { toggleTheme } = useTheme();

  return (
    <header className="text-white pt-5">
      <div className="flex gap-10 justify-between md:justify-normal items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white">
            <img src='/assets/images/logo.svg' />
          </a>
        </div>

        {/* Menu Section */}
        <nav className="hidden md:flex space-x-6 flex-1">
          <a href="#" className="hover:text-gray-200">Mission</a>
          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-gray-200 flex items-center gap-1"
            >
              Courses <FaChevronDown />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Item 3</a>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-gray-200">Sterling</a>
          <a href="#" className="hover:text-gray-200">Resources</a>
        </nav>

        {/* Login Button Section */}
        <div className="hidden md:flex justify-center items-center gap-3">
          <button onClick={() => { if (localStorage.getItem("theme") == "dark") { localStorage.setItem("theme", "light") } else { localStorage.setItem("theme", "dark") } window.location.reload(); }}>
            {localStorage.getItem("theme") == "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
          <button onClick={toggleTheme} className='bg-primary text-white px-6 py-2 rounded-[10px]'>Login</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${dropdownOpen ? 'block' : 'hidden'} fixed z-50 top-0 left-0 w-full h-full dark:bg-[#110C13] bg-white text-black`}>
        <div className='p-5 flex flex-col gap-5 h-full'>
          <div>
            <button className='ms-auto me-3 mt-2 block w-[18px] text-black dark:text-white' onClick={() => { setDropdownOpen(prev => !prev) }}>
              <IoMdClose size={32} />
            </button>
          </div>
          <div>
            <a href="#" className="block text-black dark:text-white text-[32px] text-end border-b dark:border-[#2A0968] px-4 py-2">Home</a>
            <a href="#" className="block text-black dark:text-white text-[32px] text-end border-b dark:border-[#2A0968] px-4 py-2">About</a>
            <a href="#" className="block text-black dark:text-white text-[32px] text-end border-b dark:border-[#2A0968] px-4 py-2">Services</a>
            <a href="#" className="block text-black dark:text-white text-[32px] text-end border-b dark:border-[#2A0968] px-4 py-2">Contact</a>
            <a href="#" className="block text-black dark:text-white text-[32px] text-end border-b dark:border-[#2A0968] px-4 py-2">More</a>
          </div>
          <div className='flex-1 flex items-end'>
            <div className='flex flex-col justify-center items-center w-full gap-2'>
              <button className='bg-[#eee] dark:bg-[#333] dark:text-white w-full px-6 py-3 rounded-[10px] flex justify-center' onClick={() => { if (localStorage.getItem("theme") == "dark") { localStorage.setItem("theme", "light") } else { localStorage.setItem("theme", "dark") } window.location.reload(); }}>
                {localStorage.getItem("theme") == "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
              </button>
              <button onClick={toggleTheme} className='bg-primary dark:bg-[#6E13C2] w-full text-white px-6 py-3 rounded-[10px]'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}