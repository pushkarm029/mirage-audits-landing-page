'use client';

import Image from "next/image";
import { usePostHog } from 'posthog-js/react';
import { Mail, Github, MessageCircle } from 'lucide-react';

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
    <footer className="relative bg-black text-white" role="contentinfo" style={{backgroundImage: 'url(/images/backgrounds/noise-bg.png)', backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
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
                  href="mailto:contact@mirageaudits.com"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => handleSocialClick('email')}
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/mirageaudits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => handleSocialClick('github')}
                >
                  <Github className="w-5 h-5" strokeWidth={2.5} />
                </a>
                <a
                  href="https://t.me/mirageaudits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => handleSocialClick('telegram')}
                >
                  <MessageCircle className="w-5 h-5" fill="currentColor" />
                </a>
                <a
                  href="https://twitter.com/mirageaudits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={() => handleSocialClick('x')}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links and CTA */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">

              {/* Navigation Links - 2x2 grid on mobile */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 md:gap-6 lg:gap-8 w-full sm:w-auto">
                <a href="https://github.com/MirageAudits#contacts-and-profiles" target="_blank" rel="noopener noreferrer" onClick={() => handleNavClick('Portfolio')} className="font-inter text-white/70 hover:text-white transition ease-in-out text-sm leading-6 uppercase font-light tracking-[0.7px] whitespace-nowrap">
                  Portfolio
                </a>
                <a href="/case-studies" onClick={() => handleNavClick('Case Studies')} className="font-inter text-white/70 hover:text-white transition ease-in-out text-sm leading-6 uppercase font-light tracking-[0.7px] whitespace-nowrap">
                  Case Studies
                </a>
                <a href="/blog" onClick={() => handleNavClick('Blog')} className="font-inter text-white/70 hover:text-white transition ease-in-out text-sm leading-6 uppercase font-light tracking-[0.7px] whitespace-nowrap">
                  Blog
                </a>
                <a href="/careers" onClick={() => handleNavClick('Careers')} className="font-inter text-white/70 hover:text-white transition ease-in-out text-sm leading-6 uppercase font-light tracking-[0.7px] whitespace-nowrap">
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
          <div className="text-center lg:text-left pb-4 text-white/50 text-sm">
            © Mirage Audits 2025. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}