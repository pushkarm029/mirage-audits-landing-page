'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePostHog } from 'posthog-js/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const posthog = usePostHog();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`print:hidden fixed top-0 z-50 w-full mb-0 transition-colors duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'} py-4`}>
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
            <nav className="z-50 relative rounded-full bg-white/10 text-white/70 text-sm shadow-lg flex justify-center items-center space-x-6 px-4 h-10">
              
              <a href="https://github.com/MirageAudits#contacts-and-profiles" target="_blank" rel="noopener noreferrer" onClick={() => handleNavClick('Portfolio')}>
                <p className="font-inter text-opacity-50 cursor-pointer text-white/70 transition ease-in-out hover:text-white uppercase font-light tracking-[0.7px]">
                  Portfolio
                </p>
              </a>
              
              <a href="/case-studies" onClick={() => handleNavClick('Case Studies')}>
                <p className="font-inter text-opacity-50 cursor-pointer text-white/70 transition ease-in-out hover:text-white uppercase font-light tracking-[0.7px]">
                  Case Studies
                </p>
              </a>
              
              <a href="/blog" onClick={() => handleNavClick('Blog')}>
                <p className="font-inter text-opacity-50 cursor-pointer text-white/70 transition ease-in-out hover:text-white uppercase font-light tracking-[0.7px]">
                  Blog
                </p>
              </a>
              
              <a href="/careers" onClick={() => handleNavClick('Careers')}>
                <p className="font-inter text-opacity-50 cursor-pointer text-white/70 transition ease-in-out hover:text-white uppercase font-light tracking-[0.7px]">
                  Careers
                </p>
              </a>
              
            </nav>
          </div>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex flex-row items-center gap-3">
          
          {/* Flag Icon Button */}
          <div className="relative hidden sm:block">
            <a 
              href="/coming-soon" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/20 hover:border-white/40"
              aria-label="Coming Soon"
            >
              <svg className="w-5 h-5 text-white/70 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
              </svg>
            </a>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-black"></div>
          </div>
          
          {/* CTA Buttons - Always Visible */}
          <div className="relative w-fit print:hidden mx-0 hidden sm:block">
            <a 
              href="https://t.me/mirageaudits" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={handleCTAClick}
              className="inline-flex items-center gap-2 font-inter font-bold uppercase tracking-wider text-xs md:text-sm px-3 md:px-4 h-10 bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 rounded-full transition-colors duration-200"
            >
              Book An Audit
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
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
                  <a href="https://github.com/MirageAudits#contacts-and-profiles" target="_blank" rel="noopener noreferrer" onClick={() => {handleNavClick('Portfolio'); setMenuOpen(false);}}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Portfolio
                    </p>
                  </a>
                </div>
              </li>
              
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <a href="/case-studies" onClick={() => {handleNavClick('Case Studies'); setMenuOpen(false);}}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Case Studies
                    </p>
                  </a>
                </div>
              </li>
              
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <a href="/blog" onClick={() => {handleNavClick('Blog'); setMenuOpen(false);}}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Blog
                    </p>
                  </a>
                </div>
              </li>
              
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <a href="/careers" onClick={() => {handleNavClick('Careers'); setMenuOpen(false);}}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Careers
                    </p>
                  </a>
                </div>
              </li>
{/*               
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <a href="/damn-vulnerable-solana" onClick={() => setMenuOpen(false)}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Damn Vulnerable Solana
                    </p>
                  </a>
                </div>
              </li> */}
              
              <li className="flex justify-between">
                <div className="flex flex-col w-full">
                  <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer" onClick={() => {handleCTAClick(); setMenuOpen(false);}}>
                    <p className="font-inter cursor-pointer text-white transition ease-in-out uppercase font-light tracking-[0.7px]">
                      Book An Audit
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