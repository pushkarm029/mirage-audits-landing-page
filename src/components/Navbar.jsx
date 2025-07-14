'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { usePostHog } from 'posthog-js/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const posthog = usePostHog();

  const handleCTAClick = () => {
    posthog?.capture('cta_clicked', {
      location: 'navbar',
      cta_text: 'Book An Audit',
      destination: 'telegram'
    });
  };

  const handleNavClick = (itemName) => {
    posthog?.capture('navigation_clicked', {
      location: 'navbar',
      nav_item: itemName
    });
  };

  return (
    <header className="print:hidden fixed top-0 z-50 w-full mb-0 transition-colors duration-500 bg-black/90 backdrop-blur-lg py-4">
      <div className="relative flex justify-between items-center px-6">
        
        {/* Left: Logo */}
        <div className="w-[150px] grid my-auto">
          <a href="/" className="">
            <Image 
              src="/logo.png" 
              alt="Mirage Audits - Smart Contract Security Audits" 
              width={150} 
              height={32} 
              className="mx-2 w-auto h-8"
            />
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="z-50 absolute right-1/2 transform translate-x-1/2">
          <div className="relative w-fit print:hidden my-auto mx-0 lg:block hidden">
            <div className="top-0 right-0 absolute h-12 w-full bg-transparent"></div>
            <nav className="z-50 relative rounded-full bg-white/10 text-white/70 text-sm shadow-lg flex justify-center space-x-6 px-4 py-2">
              
              <div className="">
                <p className="font-inter text-opacity-50 cursor-pointer text-white/70 transition ease-in-out hover:text-white uppercase font-light tracking-[0.7px]">
                  Solutions
                </p>
              </div>
              
              <div className="">
                <p className="font-inter text-opacity-50 cursor-pointer text-white/70 transition ease-in-out hover:text-white uppercase font-light tracking-[0.7px]">
                  Company
                </p>
              </div>
              
              <div className="">
                <p className="font-inter text-opacity-50 cursor-pointer text-white/70 transition ease-in-out hover:text-white uppercase font-light tracking-[0.7px]">
                  Resources
                </p>
              </div>
              
              <a href="#blog" onClick={() => handleNavClick('Blog')}>
                <p className="font-inter text-opacity-50 cursor-pointer text-white/70 transition ease-in-out hover:text-white uppercase font-light tracking-[0.7px]">
                  Blog
                </p>
              </a>
              
              <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer" onClick={handleCTAClick}>
                <p className="font-inter text-opacity-50 cursor-pointer text-white/70 transition ease-in-out hover:text-white uppercase font-light tracking-[0.7px]">
                  Contact
                </p>
              </a>
              
            </nav>
          </div>
        </div>

        {/* Right: Theme Toggle & CTA Buttons */}
        <div className="flex flex-row items-center gap-3">
          
          {/* Theme Toggle */}
          <div className="bg-white/10 rounded-full">
            <button 
              className="p-[6px] rounded-md focus:outline-none transition-colors duration-300 text-opacity-50 flex text-white/70 hover:text-white hover:text-opacity-100" 
              aria-label="Toggle Theme"
            >
              <Sun className="w-6 h-6" />
            </button>
          </div>
          
          {/* CTA Buttons - Always Visible */}
          <div className="relative w-fit print:hidden mx-0 hidden sm:block">
            <nav className="z-50 relative rounded-full bg-white/10 text-white/70 text-sm shadow-lg flex justify-center space-x-2 md:space-x-4 px-3 md:px-4 py-2">
              <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer" onClick={handleCTAClick}>
                <p className="font-inter text-opacity-50 cursor-pointer text-white/70 transition ease-in-out hover:text-white uppercase font-light tracking-[0.7px] text-xs md:text-sm">
                  Book An Audit
                </p>
              </a>
              <a href="#portfolio" onClick={() => handleNavClick('Portfolio')}>
                <p className="font-inter text-opacity-50 cursor-pointer text-white/70 transition ease-in-out hover:text-white uppercase font-light tracking-[0.7px] text-xs md:text-sm">
                  Portfolio
                </p>
              </a>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden grid w-[28.54px] cursor-pointer" 
            tabIndex="0"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>

          {/* Mobile Navigation */}
          <nav className={`z-50 p-6 pr-0 h-full fixed bg-white/10 backdrop-blur-lg drop-shadow-lg top-0 overflow-auto lg:hidden block transition-all duration-300 ease-linear ${menuOpen ? 'right-0 w-64' : '-right-full w-0'}`}>
            <div className="flex w-full justify-end cursor-pointer pb-4">
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-white mr-4" />
              </button>
            </div>
            
            <ul className="w-full gap-2 flex flex-col">
              
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <button className="uppercase flex justify-between w-full" onClick={() => handleNavClick('Solutions')}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Solutions
                    </p>
                  </button>
                </div>
              </li>
              
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <button className="uppercase flex justify-between w-full" onClick={() => handleNavClick('Company')}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Company
                    </p>
                  </button>
                </div>
              </li>
              
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <button className="uppercase flex justify-between w-full" onClick={() => handleNavClick('Resources')}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Resources
                    </p>
                  </button>
                </div>
              </li>
              
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <a href="#blog" onClick={() => {handleNavClick('Blog'); setMenuOpen(false);}}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Blog
                    </p>
                  </a>
                </div>
              </li>
              
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer" onClick={() => {handleCTAClick(); setMenuOpen(false);}}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Contact
                    </p>
                  </a>
                </div>
              </li>
              
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer" onClick={() => {handleCTAClick(); setMenuOpen(false);}}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Book An Audit
                    </p>
                  </a>
                </div>
              </li>
              
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <a href="#portfolio" onClick={() => {handleNavClick('Portfolio'); setMenuOpen(false);}}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Portfolio
                    </p>
                  </a>
                </div>
              </li>
              
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Navbar;