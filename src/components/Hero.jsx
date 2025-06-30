"use client";

import GradientButton from "./ui/GradientButton";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSectionWithNavbar() {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  const benefits = [
    {
      icon: "⚡",
      title: "Zero Downtime",
      description: "Our platform is engineered for 99.99% uptime. Game without interruptions, always."
    },
    {
      icon: "🚀",
      title: "No Waiting Queue",
      description: "Instant access when you want to play. No more waiting in line after paying."
    },
    {
      icon: "🎮",
      title: "Play Any Game",
      description: "From AAA titles to indie gems, access our vast library without restrictions."
    }
  ];

  return (
    <div className="relative bg-black bg-[url('/bg-gradient.png')] bg-no-repeat bg-center bg-cover min-h-screen w-full flex flex-col text-white items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Hero Section */}
      <div 
        className="flex flex-col items-center text-center w-full max-w-4xl mt-24 md:mt-36"
      >
        <span 
          className="text-blue-300 font-mono text-sm md:text-base tracking-widest mb-4"
        >
          NEXT GENERATION CLOUD GAMING PLATFORM
        </span>
        
        <h1 
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Welcome to 
          <span className="text-blue-200"> Game9</span>
        </h1>
        
        <p 
          className="text-white/70 mt-4 text-base md:text-xl max-w-2xl leading-relaxed"
        >
          This isn&apos;t just another cloud gaming platform charging hefty fees while making you wait. 
          Game9 is built by gamers who believe in instant access, zero compromises, and putting players first.
        </p>

        {/* Benefits Section */}
        <div 
          id="what-we-offer"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-blue-300/30 hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-blue-200 mb-2">{benefit.title}</h3>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          id="join-us"
          className="mt-12 md:mt-16"
        >
          <Link href="https://form.typeform.com/to/H2ifLY5y" target="_blank" rel="noopener noreferrer">
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
          </Link>
        </div>
      </div>
    </div>
  );
}
