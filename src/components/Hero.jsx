import GradientButton from "./ui/GradientButton";
import Link from "next/link";

export default function HeroSectionWithNavbar() {
  const benefits = [
    {
      title: "Ship in Days, Not Months",
      description: "24-48 hour security reviews vs 8+ week enterprise backlogs"
    },
    {
      title: "Pay What You Can Afford",
      description: "$1K-3K/month subscriptions vs $50K+ one-time fees"
    },
    {
      title: "Niche Chain Experts",
      description: "Deep expertise in Solana, Sui, Cardano & EVM Layer 2s—not just another Ethereum shop"
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
          WEB3 SECURITY FOR SMALL PROJECTS THAT CAN'T WAIT
        </span>
        
        <h1 
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Ship Secure. 
          <span className="text-blue-200"> Ship Fast.</span>
        </h1>
        
        <p 
          className="text-white/70 mt-4 text-base md:text-xl max-w-2xl leading-relaxed"
        >
          Professional security for Solana, Sui, Cardano & L2 projects—without the enterprise price tag. 
          Stop choosing between security and speed. Get expert monitoring and rapid reviews for $1K-3K/month instead of $50K+ one-time audits.
        </p>

        {/* Benefits Section */}
        <div 
          id="what-we-offer"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12"
        >
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-semibold text-blue-200 mb-2">{benefit.title}</h3>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          id="join-us"
          className="mt-12 md:mt-16"
        >
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <GradientButton className="h-14 px-8 text-lg font-bold">
              Start Free Security Scan
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
