import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { useTheme } from '../../store/useTheme';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Add the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <div className="hidden md:block">
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
      <div className={`md:hidden ${dropdownOpen ? 'block' : 'hidden'} mt-5 bg-white text-black`}>
        <a href="#" className="block text-black px-4 py-2">Home</a>
        <a href="#" className="block text-black px-4 py-2">About</a>
        <a href="#" className="block text-black px-4 py-2">Services</a>
        <a href="#" className="block text-black px-4 py-2">Contact</a>
        <a href="#" className="block text-black px-4 py-2">More</a>
        <button onClick={toggleTheme} className='bg-primary w-full text-white px-6 py-2 rounded-[10px]'>Login</button>
      </div>
    </header>
  )
}