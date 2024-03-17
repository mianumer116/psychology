import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-gray-600 body-font navm" >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="" fill="" stroke="" strokeLinecap="round" strokeLinejoin="" strokeWidth="2" className="" viewBox="0 0 24 24">
            <path d=""></path>
          </svg>
          <span className="ml-3 text-xl fd">PsychHelp</span>
        </a>
        <button onClick={toggleMobileMenu} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav className={`md:ml-auto md:mr-4 md:flex md:items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <Link to="/home"  href="#" className="mr-5 hover:text-gray-900 navc">Home</Link>
          <a href="#" className="mr-5 hover:text-gray-900 navc">About</a>
          <div className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <button className="mr-5 hover:text-gray-900 navc">Service</button>
            <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-white w-32 mt-2 shadow-md rounded-md`} >
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 navc">Service 1</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 navc">Service 2</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 navc">Service 3</a>
            </div>
          </div>
          <a href="#" className="mr-5 hover:text-gray-900 navc">Contact</a>
        </nav>
        
      </div>
    </header>
  );
}

export default Nav;
