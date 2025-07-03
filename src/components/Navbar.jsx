'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
      w-full sm:w-[90%] md:w-[75%] lg:w-[66rem] max-w-[66rem] 
      backdrop-blur-lg rounded-xl shadow-lg px-4 sm:px-5 py-2 sm:py-3 
      transition-all duration-200 flex items-center justify-between
      shadow-[0_4px_20px_rgba(59,130,246,0.2)]"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }} 
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="MirageAudits Logo" width={150} height={50} className="h-8 sm:h-10 w-auto rounded-lg" />
      </div>

      {/* Middle: Desktop Navigation */}
      <div className="hidden lg:flex w-auto items-center justify-center">
        <NavigationMenu.Root>
          <NavigationMenu.List className="font-inter flex space-x-5 lg:space-x-7 text-sm lg:text-base text-white/80">
            {[
              { name: "Pricing", href: "#pricing" },
              { name: "Audits", href: "#audits" },
              { name: "Process", href: "#process" },
              { name: "About", href: "#about" },
              { name: "Blog", href: "/#" },
            ].map((item, index) => (
              <NavigationMenu.Item key={index}>
                <NavigationMenu.Link href={item.href} className="hover:text-white hover:brightness-200 transition-colors">
                  {item.name}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>

      {/* Right: CTA Buttons */}
      <div className="hidden lg:flex gap-3">
        <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer">
          <button className="relative h-9 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm font-semibold bg-white text-black rounded-md border border-white/20 shadow-md flex items-center gap-2 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-md opacity-0 animate-scan"></div>
            <span className="relative z-10 font-inter">Book Security Audit</span>
          </button>
        </a>
      </div>

      {/* Mobile: Hamburger Menu Button */}
      <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile: Collapsible Navigation */}
      {menuOpen && (
        <div className="absolute top-[3.5rem] sm:top-[4rem] left-0 w-full bg-black/80 backdrop-blur-lg rounded-lg shadow-lg py-3 sm:py-4 px-4 sm:px-6 lg:hidden">
          <ul className="font-inter flex flex-col space-y-3 sm:space-y-4 text-white text-center">
            {[
              { name: "Pricing", href: "#pricing" },
              { name: "Audits", href: "#audits" },
              { name: "Process", href: "#process" },
              { name: "About", href: "#about" },
              { name: "Blog", href: "/#" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.href} className="block py-2 text-sm sm:text-base hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
            <li className="space-y-3">
              <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer">
                <button 
                  className="relative w-full h-9 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm font-semibold bg-white text-black rounded-md border border-white/20 shadow-md flex items-center justify-center gap-2 transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-md opacity-0 animate-scan"></div>
                  <span className="relative z-10 font-inter">Book Security Audit</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;