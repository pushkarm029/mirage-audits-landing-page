"use client";
import GradientButton from "./ui/GradientButton";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import "@fontsource/inter"; 

export default function HeroFooterSection() {
  const incentives = [
    {
      icon: "🎮",
      title: "Early Access",
      description: "Be the first to try Game9 features before anyone else."
    },
    {
      icon: "🏆",
      title: "Exclusive Rewards",
      description: "Earn special in-game items only available to early supporters."
    },
    {
      icon: "👥",
      title: "Community Voice",
      description: "Your ideas directly influence what we build next."
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
              Join Our Journey
            </h1>
            
            <p 
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Help shape the future of Game9 with your feedback and ideas.
            </p>
            
            {/* Incentives Section */}
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-14"
            >
              {incentives.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-blue-300/30 hover:-translate-y-1"
                  whileHover={{ scale: 1.03, borderColor: "rgba(147, 197, 253, 0.3)" }}
                >
                  <div className="text-blue-300 text-2xl font-bold mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div 
              className="mt-8 items-center justify-center flex mb-16"
            >
              <a href="https://forms.example.com/game9-feedback" target="_blank" rel="noopener noreferrer">
                <GradientButton className="h-14 px-8 text-lg font-bold">
                  Join Beta Access
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
            </div>
          </div>
        </div>

        {/* Footer Section - Simplified */}
        <footer className="relative py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center md:items-start w-full z-10 border-t border-white/10 space-y-8 md:space-y-0">
          {/* Left Section (Logo, Desc, Links, Social) */}
          <div className="flex flex-col space-y-4 items-center md:items-start text-center md:text-left">
            {/* Logo & Name */}
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Game9 Logo" width={24} height={24} />
              <span className="text-lg text-white font-bold">Game9</span>
            </div>
            {/* Description */}
            <p className="text-white/60 text-sm max-w-xs">
              The next generation cloud gaming platform built for gamers.
            </p>
            {/* Links (Visible on Mobile, Hidden on MD+) */}
            <ul className="space-y-1 text-white/80 md:hidden">
              <li><a href="#what-we-offer" className="hover:text-white hover:underline py-1">What We Offer</a></li>
              <li><a href="#testimonials" className="hover:text-white hover:underline py-1">Testimonials</a></li>
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
              <li><a href="#what-we-offer" className="hover:text-white hover:underline py-1">What We Offer</a></li>
              <li><a href="#testimonials" className="hover:text-white hover:underline py-1">Testimonials</a></li>
              {/* Add other relevant links here if needed */}
            </ul>
          </div>
        </footer>

      </div>
    </>
  );
}
