'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import "@fontsource/inter"; 
import GradientButton from './ui/GradientButton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
      w-full sm:w-[90%] md:w-[75%] lg:w-[66rem] max-w-[66rem] 
      backdrop-blur-lg rounded-xl shadow-lg px-4 py-2 
      transition-all duration-200 flex items-center justify-between
      shadow-[0_4px_20px_rgba(200,255,100,0.4)] " // Modified shadow color here
      style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", fontFamily: "'Inter', sans-serif" }} 
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="MirageAudits Logo" width={150} height={50} className="h-10 w-auto" />
      </div>

      {/* Middle: Desktop Navigation */}
      <div className="hidden lg:flex w-auto items-center justify-center">
        <NavigationMenu.Root>
          <NavigationMenu.List className="flex space-x-7 text-sm text-white/80">
            {[
              { name: "Services", href: "#services" },
              { name: "Process", href: "#process" },
              { name: "Pricing", href: "#pricing" },
              { name: "Partners", href: "#partners" },
              { name: "Careers", href: "/careers" },
              { name: "Contact", href: "#contact" },
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

      {/* Right: Buttons */}
      <div className="hidden lg:flex gap-3">
        <a href="#join-us">
          <GradientButton className="px-4 py-1.5 text-sm font-medium">
            Get Free Scan
          </GradientButton>
        </a>
      </div>

      {/* Mobile: Hamburger Menu Button */}
      <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile: Collapsible Navigation */}
      {menuOpen && (
        <div className="absolute top-[4rem] left-0 w-full bg-black/80 backdrop-blur-lg rounded-lg shadow-lg py-4 px-6 lg:hidden">
          <ul className="flex flex-col space-y-4 text-white text-center">
            {[
              { name: "Services", href: "#services" },
              { name: "Process", href: "#process" },
              { name: "Pricing", href: "#pricing" },
              { name: "Partners", href: "#partners" },
              { name: "Careers", href: "/careers" },
              { name: "Contact", href: "#contact" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.href} className="block py-2 hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#join-us">
                <GradientButton 
                  className="w-full px-3 py-1.5 text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Free Scan
                </GradientButton>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;