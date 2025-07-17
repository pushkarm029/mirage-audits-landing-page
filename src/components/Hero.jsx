
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
              <div className="flex md:flex-row md:h-fit md:w-full flex-col items-center md:items-start">

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
                  <p className="text-white/80 text-base leading-5 font-light tracking-[0.16px] pr-3 md:max-w-[920px] mb-10">
                    Mirage Audits is the industry-leading blockchain solutions firm for enterprise-grade digital assets, trusted by the top financial institutions and Web3 ecosystem leaders. Experience world-class, end-to-end security, from smart contract auditing and pen testing to advisory services and beyond.
                  </p>

                  {/* Blockchain logos - Simple placement */}
                  <div className="flex items-center gap-6 md:gap-8 mb-10">
                    <div className="group relative">
                      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src="/near.png"
                          alt="NEAR Protocol"
                          width={80}
                          height={40}
                          className="h-6 w-auto"
                        />
                      </div>
                      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-blue-300 text-xs font-jetbrains-mono whitespace-nowrap">NEAR</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="flex items-center justify-center w-10 h-10 bg-orange-300 rounded-full transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src="/rust.png"
                          alt="Rust"
                          width={80}
                          height={40}
                          className="h-8 w-auto"
                        />
                      </div>
                      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-blue-300 text-xs font-jetbrains-mono whitespace-nowrap">Rust</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <Image
                        src="/solana.png"
                        alt="Solana"
                        width={60}
                        height={30}
                        className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-blue-300 text-xs font-jetbrains-mono whitespace-nowrap">Solana</span>
                      </div>
                    </div>
                    {/* <div className="group relative">
                      <Image
                        src="/starknet.png"
                        alt="Starknet"
                        width={80}
                        height={40}
                        className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-blue-300 text-xs font-jetbrains-mono whitespace-nowrap">Starknet</span>
                      </div>
                    </div> */}
                    <div className="group relative">
                      <Image
                        src="/sui.png"
                        alt="Sui"
                        width={80}
                        height={40}
                        className="h-9 w-auto transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-blue-300 text-xs font-jetbrains-mono whitespace-nowrap">Sui</span>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src="/xlm.png"
                          alt="Stellar"
                          width={80}
                          height={40}
                          className="h-7 w-auto"
                        />
                      </div>
                      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-blue-300 text-xs font-jetbrains-mono whitespace-nowrap">Stellar</span>
                      </div>
                    </div>
                  </div>

                  {/* Call-to-action button */}
                  <div className="flex justify-start gap-6">
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
                </div>
                {/* Right section - Hero 3D Image */}
                <div className="w-full md:w-2/5 flex items-center justify-center md:justify-end mt-8 md:mt-8 lg:mt-4">
                  <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <Image
                      src="/hero3d.png"
                      alt="Mirage Audits Security Infrastructure"
                      width={600}
                      height={600}
                      className="w-full h-auto object-contain filter drop-shadow-2xl brightness-105 contrast-110 saturate-155"
                      priority
                    />
                    {/* Enhanced glow effect for security vibe */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg blur-2xl -z-10"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}