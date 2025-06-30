import GradientButton from "./ui/GradientButton";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import Image from "next/image";
import "@fontsource/inter"; 

export default function HeroFooterSection() {
  const ctaPoints = [
    {
      title: "No Credit Card",
      description: "Get your free security scan without any payment information."
    },
    {
      title: "No Sales Calls",
      description: "Just instant insights into your smart contract risks."
    },
    {
      title: "10 Minutes",
      description: "Get your security scan results in minutes, not weeks."
    }
  ];

  return (
    <>
      {/* Wrapper for Full Hero + Footer Section with Background */}
      <div className="relative bg-black bg-[url('/cta.png')] bg-no-repeat bg-center bg-cover w-full">
        
        {/* Super Smooth Gradient Fade Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent"></div>

        {/* Join the Journey Section */}
        <div 
          className="relative w-full py-24 px-4 flex items-center justify-center z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Ready to Ship Secure?
            </h1>
            
            <p 
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Get your free security scan in 10 minutes
            </p>
            
            {/* Benefits Section */}
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-14"
            >
              {ctaPoints.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div 
              className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <GradientButton className="h-14 px-8 text-lg font-bold">
                  Get Free Scan
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 9"
                    className="h-[9px] w-[17px] ml-2"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                      clipRule="evenodd"
                    />
                  </svg>
                </GradientButton>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="h-14 px-8 text-lg font-bold bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20">
                  Book 15-min Demo
                </button>
              </a>
            </div>
            <p className="text-white/60 text-sm">
              Join 150+ projects building safer Web3 on niche chains
            </p>
          </div>
        </div>

        {/* Footer Section - Simplified */}
        <footer className="relative py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center md:items-start w-full z-10 border-t border-white/10 space-y-8 md:space-y-0">
          {/* Left Section (Logo, Desc, Links, Social) */}
          <div className="flex flex-col space-y-4 items-center md:items-start text-center md:text-left">
            {/* Logo & Name */}
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="MirageAudits Logo" width={24} height={24} />
              <span className="text-lg text-white font-bold">MirageAudits</span>
            </div>
            {/* Description */}
            <p className="text-white/60 text-sm max-w-xs">
              The security partner for builders who can't wait. Specializing in Solana • Sui • Cardano • Arbitrum • Base • Polygon
            </p>
            {/* Links (Visible on Mobile, Hidden on MD+) */}
            <ul className="space-y-1 text-white/80 md:hidden">
              <li><a href="#services" className="hover:text-white hover:underline py-1">Services</a></li>
              <li><a href="#process" className="hover:text-white hover:underline py-1">Process</a></li>
              <li><a href="#pricing" className="hover:text-white hover:underline py-1">Pricing</a></li>
              <li><a href="#partners" className="hover:text-white hover:underline py-1">Partners</a></li>
              <li><a href="/careers" className="hover:text-white hover:underline py-1">Careers</a></li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4 text-white/60 text-xl pt-2">
              <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter className="cursor-pointer transition-colors" /></a>
              <a href="#" aria-label="Discord" className="hover:text-white"><FaDiscord className="cursor-pointer transition-colors" /></a>
              <a href="#" aria-label="Github" className="hover:text-white"><FaGithub className="cursor-pointer transition-colors" /></a>
            </div>
          </div>

          {/* Right Section (Links - Hidden on Mobile, Visible on MD+) */}
          <div className="text-white/60 hidden md:flex flex-col items-end">
            <h3 className="text-white font-medium mb-2">Quick Links</h3>
            <ul className="space-y-1 text-right">
              <li><a href="#services" className="hover:text-white hover:underline py-1">Services</a></li>
              <li><a href="#process" className="hover:text-white hover:underline py-1">Process</a></li>
              <li><a href="#pricing" className="hover:text-white hover:underline py-1">Pricing</a></li>
              <li><a href="#partners" className="hover:text-white hover:underline py-1">Partners</a></li>
              <li><a href="/careers" className="hover:text-white hover:underline py-1">Careers</a></li>
              <li><a href="mailto:contact@mirageaudits.com" className="hover:text-white hover:underline py-1">Contact</a></li>
            </ul>
          </div>
        </footer>

      </div>
    </>
  );
}
