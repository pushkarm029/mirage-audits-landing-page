
'use client';

import Image from 'next/image';
import { usePostHog } from 'posthog-js/react';
import SecurityAnimation from './SecurityAnimation';

const BENEFITS = [
  {
    title: "Non-EVM specialists",
    description: "Deep expertise in Solana, Cardano, Fuel, Sui, Starknet—not generic EVM auditors"
  },
  {
    title: "$100M+ in Exploits Prevented",
    description: "Real security that saves real money—we've stopped millions in potential losses"
  },
  {
    title: "$1K/week vs $10K+ minimums",
    description: "Professional security that doesn't consume your major development budget"
  },
];

const SUPPORTED_NETWORKS = [
  { name: "Cardano", symbol: "ADA", color: "#0033AD", image: "/images/cardano.png" },
  { name: "Fuel", symbol: "FUEL", color: "#00C896", image: "/images/fuel.png" },
  { name: "Solana", symbol: "SOL", color: "#9945FF", image: "/images/solana.png" },
  { name: "Starknet", symbol: "STRK", color: "#EC796B", image: "/images/starknet.png" },
  { name: "Sui", symbol: "SUI", color: "#4CA2FF", image: "/images/sui.png" },
];

// TODO: Add a wavy gradient background

export default function Hero() {
  const posthog = usePostHog();

  const handleCTAClick = () => {
    posthog?.capture('cta_clicked', {
      location: 'hero_section',
      cta_text: 'Book Security Audit',
      destination: 'telegram'
    });
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center hero-bg"></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Main hero content - centered vertically */}
      <div className="relative w-full py-20">
        {/* Main hero content container */}
        <div className="z-10 mx-4 lg:mx-[40px]">
          <div className="lg:mx-auto lg:px-44 print:m-0 px-0 lg:pl-10 xl:pl-20 2xl:pl-[134px] lg:pr-4 xl:pr-8 2xl:pr-[54px] lg:max-w-full">
            <div className="flex md:h-590px">
              <div className="flex md:flex-row md:h-fit md:w-full flex-col">

                {/* Left content section */}
                <div className="w-full h-fit max-w-[970px] md:w-3/5 md:my-[93px]">

                  {/* Header with main headline */}
                  <header className="flex flex-col text-blue-400 mt-[6px] md:mt-[22px] mb-[10px] lg:mb-[26px] md:max-w-[970px]">
                    <div className="flex gap-[25px] mt-2">
                      <h1 className="my-auto uppercase font-space-grotesk text-lg leading-[23px] tracking-[2px] text-white md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px] 2xl:leading-[50px] font-bold">
                        <span>Elite Security Infrastructure for Next-Gen Chains</span>
                      </h1>
                    </div>
                  </header>

                  {/* Description paragraph */}
                  <p className="text-white/80 text-base leading-5 font-light tracking-[0.16px] pr-3 md:max-w-[920px] mb-6">
                    Mirage Audits is the industry-leading blockchain solutions firm for enterprise-grade digital assets, trusted by the top financial institutions and Web3 ecosystem leaders. Experience world-class, end-to-end security, from smart contract auditing and pen testing to advisory services and beyond.
                  </p>

                  {/* SOC2 Certification Badge */}
                  <div className="flex flex-row border border-white/20 w-52 h-[58px] mt-6">
                    <div className="max-w-[66px] w-full h-14 pt-1.5">
                      <div className="mx-auto w-[45px] h-[45px] bg-blue-400/20 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-xs">SOC2</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 items-center w-full h-full p-3.5 border-l border-white/20 uppercase">
                      <span className="text-blue-300 font-jetbrains-mono text-base leading-3 tracking-[1.28px]">SOC2 TYPE2</span>
                      <span className="text-white/60 text-sm leading-[10px] tracking-[5.88px] text-center ml-[3.9px]">certified</span>
                    </div>
                  </div>

                  {/* Call-to-action button */}
                  <div className="flex justify-start gap-6 mt-6 mb-8">
                    <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer" onClick={handleCTAClick}>
                      <button type="button" className="inline-flex items-center gap-2 font-inter font-bold uppercase tracking-wider text-xs md:text-sm px-3 md:px-4 h-10 bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 rounded-full transition-colors duration-200">
                        Book An Audit
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </a>
                  </div>

                  {/* Securing Section */}
                  <div className="mt-8">
                    <h4 className="font-inter text-base font-bold text-white/60 mb-6 uppercase tracking-wider">
                      Securing
                    </h4>
                    
                    {/* Blockchain logos grid */}
                    <div className="flex items-center gap-6 md:gap-8">
                      {/* Solana */}
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                          <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4.54 7.87c.13-.15.3-.26.49-.31l17.42-3.64c.31-.07.62.11.69.42s-.11.62-.42.69L5.3 8.67c-.19.04-.35.16-.44.33L3.64 11.5c-.12.25-.4.35-.65.23s-.35-.4-.23-.65l1.22-2.5c.18-.37.35-.71.56-1.05z"/>
                            <path d="M19.46 16.13c-.13.15-.3.26-.49.31L1.55 20.08c-.31.07-.62-.11-.69-.42s.11-.62.42-.69L18.7 15.33c.19-.04.35-.16.44-.33L20.36 12.5c.12-.25.4-.35.65-.23s.35.4.23.65l-1.22 2.5c-.18.37-.35.71-.56 1.05z"/>
                            <path d="M4.54 16.13c.13.15.3.26.49.31l17.42 3.64c.31.07.43.38.36.69s-.38.43-.69.36L5.3 15.33c-.19-.04-.35-.16-.44-.33L3.64 12.5c-.12-.25-.02-.53.23-.65s.53.02.65.27l1.22 2.5c.18.37.35.71.56 1.05z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Sui */}
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                          <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Starknet */}
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-400/30">
                          <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>

                      {/* NEAR Protocol */}
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                          <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right section - Security Animation */}
                {/* <SecurityAnimation /> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}