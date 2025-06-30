import Link from "next/link";
import GradientButton from "./ui/GradientButton";

const BENEFITS = [
  {
    title: "Elite Security Researchers",
    description: "20+ protocols audited, 40+ critical vulnerabilities found by our team of expert builders"
  },
  {
    title: "Security That Fits Your Budget", 
    description: "$1K-3K/month gets you enterprise-grade protection without the enterprise timeline"
  },
  {
    title: "$10M+ in Exploits Prevented",
    description: "Real security that saves real money—we've stopped millions in potential losses"
  }
];

const SUPPORTED_NETWORKS = [
  { name: "Solana", symbol: "SOL", color: "#9945FF" },
  { name: "Sui", symbol: "SUI", color: "#4CA2FF" },
  { name: "Cardano", symbol: "ADA", color: "#0033AD" },
  { name: "Ethereum", symbol: "ETH", color: "#627EEA" },
  { name: "Arbitrum", symbol: "ARB", color: "#28A0F0" },
  { name: "Base", symbol: "BASE", color: "#0052FF" },
  { name: "Polygon", symbol: "MATIC", color: "#8247E5" },
  { name: "Optimism", symbol: "OP", color: "#FF0420" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Space Background */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(/new-bg.jpg)',
          backgroundPosition: 'center 30%'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 md:px-12">
        <div className="mx-auto max-w-4xl pt-16 md:pt-24">
          
          {/* Badge */}
          <div className="mb-6 text-center">
            <span className="font-jetbrains-mono text-sm font-medium tracking-widest text-blue-300 md:text-base">
              WEB3 SECURITY FOR SMALL PROJECTS THAT CAN'T WAIT
            </span>
          </div>

          {/* Main Headlines */}
          <div className="mb-8 text-center">
            <h1 className="font-space-grotesk mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-7xl">
              Ship Secure.{" "}
              <span className="text-blue-200">Ship Fast.</span>
            </h1>
            
            {/* Supported Networks */}
            <div className="mt-8 mb-4">
              {/* <p className="font-inter text-sm text-white/60 mb-6 text-center">
                Securing the multi-chain ecosystem
              </p> */}
              <div className="flex flex-wrap justify-center items-center gap-4 max-w-2xl mx-auto">
                {SUPPORTED_NETWORKS.map((network, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center group cursor-pointer"
                    title={network.name}
                  >
                    <div 
                      className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-xs font-jetbrains-mono font-bold text-white/80 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: network.color + '20',
                        borderColor: network.color + '40'
                      }}
                    >
                      {network.symbol}
                    </div>
                    <span className="text-xs text-white/50 mt-1 font-inter">
                      {network.name}
                    </span>
                  </div>
                ))}
                
                {/* Empty placeholder circles */}
                {[1, 2].map((i) => (
                  <div 
                    key={`empty-${i}`}
                    className="flex flex-col items-center"
                    title="More networks coming soon"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-white/10 border-dashed flex items-center justify-center">
                      <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                    </div>
                    <span className="text-xs text-white/30 mt-1 font-inter">
                      Soon
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-16 grid w-full grid-cols-1 gap-6 md:grid-cols-3 mt-12 max-w-6xl mx-auto">
            {BENEFITS.map((benefit, index) => (
              <div 
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="font-space-grotesk mb-2 text-xl font-semibold text-blue-200">
                  {benefit.title}
                </h3>
                <p className="font-inter text-sm text-white/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#pricing">
              <button className="relative h-12 px-6 text-base font-semibold bg-white text-black rounded-md border border-white/20 shadow-lg flex items-center gap-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-md opacity-0 animate-scan"></div>
                <span className="relative z-10">Start Free Security Scan</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 9"
                  className="relative z-10 h-[8px] w-[15px]"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
            
            <Link href="#contact">
              <button className="h-12 px-6 text-base font-medium border border-white/20 rounded-md bg-white/5 backdrop-blur-sm text-white">
                Book 15-min Demo
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}