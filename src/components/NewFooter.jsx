'use client';

import Image from "next/image";
import { usePostHog } from 'posthog-js/react';

export default function Footer() {
  const posthog = usePostHog();

  const handleSocialClick = (platform) => {
    posthog?.capture('social_clicked', {
      location: 'footer',
      platform: platform
    });
  };

  const handleNavClick = (itemName) => {
    posthog?.capture('navigation_clicked', {
      location: 'footer',
      nav_item: itemName
    });
  };

  const handleCTAClick = () => {
    posthog?.capture('cta_clicked', {
      location: 'footer',
      cta_text: 'Book An Audit',
      destination: 'telegram'
    });
  };

  return (
    <footer className="relative bg-black text-white" role="contentinfo" style={{backgroundImage: 'url(/noise-bg.png)', backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="lg:max-w-[1440px] lg:mx-auto px-3 lg:px-16">
          <div className="bg-white/10 rounded-lg p-6 lg:p-8 mb-4">
            
            {/* Logo and Social Icons - Same Line */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <Image 
                  src="/logo.png" 
                  alt="Mirage Audits - Smart Contract Security Audits" 
                  width={150} 
                  height={32} 
                  className="w-auto h-8"
                />
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/mirageaudits" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => handleSocialClick('twitter')}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/mirageaudits" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => handleSocialClick('linkedin')}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/mirageaudits" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => handleSocialClick('github')}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@mirageaudits" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => handleSocialClick('youtube')}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links and CTA */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
              
              {/* Navigation Links */}
              <div className="flex flex-wrap gap-8">
                <a href="https://github.com/MirageAudits#contacts-and-profiles" target="_blank" rel="noopener noreferrer" onClick={() => handleNavClick('Portfolio')} className="font-inter text-white/70 hover:text-white transition ease-in-out text-sm leading-6 uppercase font-light tracking-[0.7px]">
                  Portfolio
                </a>
                <a href="/case-studies" onClick={() => handleNavClick('Case Studies')} className="font-inter text-white/70 hover:text-white transition ease-in-out text-sm leading-6 uppercase font-light tracking-[0.7px]">
                  Case Studies
                </a>
                <a href="/blog" onClick={() => handleNavClick('Blog')} className="font-inter text-white/70 hover:text-white transition ease-in-out text-sm leading-6 uppercase font-light tracking-[0.7px]">
                  Blog
                </a>
                <a href="/careers" onClick={() => handleNavClick('Careers')} className="font-inter text-white/70 hover:text-white transition ease-in-out text-sm leading-6 uppercase font-light tracking-[0.7px]">
                  Careers
                </a>
              </div>

              {/* CTA Button */}
              <div className="relative">
                <a 
                  href="https://t.me/mirageaudits" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={handleCTAClick}
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm px-4 h-10 bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 rounded-full transition-colors duration-200"
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

            </div>

          </div>
        </div>

        {/* Copyright Section */}
        <div className="lg:max-w-[1440px] lg:mx-auto px-3 lg:px-16">
          <div className="text-left pb-4 text-white/50 text-sm">
            © Mirage Audits 2025. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}