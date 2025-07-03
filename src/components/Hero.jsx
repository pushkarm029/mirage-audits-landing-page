
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
  { name: "Solana", symbol: "SOL", color: "#9945FF" },
  { name: "Cardano", symbol: "ADA", color: "#0033AD" },
  { name: "Fuel", symbol: "FUEL", color: "#00C896" },
  { name: "Sui", symbol: "SUI", color: "#4CA2FF" },
  { name: "Starknet", symbol: "STRK", color: "#EC796B" },
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
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 md:px-12">
        <div className="mx-auto max-w-4xl pt-20 sm:pt-24 md:pt-32">

          {/* Badge */}
          <div className="mb-4 sm:mb-6 text-center">
            <span className="font-jetbrains-mono text-sm sm:text-base font-medium tracking-widest text-blue-300 md:text-lg uppercase">
              Building a Web3 project? Security audit is step #1
            </span>
          </div>

          {/* Main Headlines */}
          <div className="mb-6 sm:mb-8 text-center">
            <h1 className="font-space-grotesk mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Security Audits for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Early-Stage Builders</span>
            </h1>
            {/* <h2 className="font-space-grotesk mb-6 text-2xl font-medium leading-tight md:text-3xl lg:text-4xl text-white/90">
              <span className="text-red-400 font-bold">Don't blow your grant money on $50K audits.</span>
            </h2> */}
            {/* <p className="font-inter text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-4">
              Professional security for Rust ecosystems at <span className="font-bold text-green-400">$1K/week</span>.
            </p> */}
            {/* <p className="font-inter text-base md:text-lg text-blue-200 font-medium">
              <span className="font-bold">Rust specialists:</span> Solana • Cardano • Fuel • Sui • Starknet
            </p> */}

            {/* Supported Networks */}
            <div className="mt-6 sm:mt-8 mb-4">
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-2xl mx-auto">
                {SUPPORTED_NETWORKS.map((network, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group cursor-pointer"
                    title={network.name}
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-xs font-jetbrains-mono font-bold text-white/80 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: network.color + '20',
                        borderColor: network.color + '40'
                      }}
                    >
                      {network.symbol}
                    </div>
                    <span className="text-sm text-white/50 mt-1 font-inter">
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/10 border-dashed flex items-center justify-center">
                      <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                    </div>
                    <span className="text-sm text-white/30 mt-1 font-inter">
                      Soon
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-12 sm:mb-16 grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 mt-8 sm:mt-12 max-w-6xl mx-auto">
            {BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-sm"
              >
                <h3 className="font-space-grotesk mb-2 text-base sm:text-lg md:text-xl font-semibold text-blue-200">
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
            <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer">
              <button className="relative h-11 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-semibold bg-white text-black rounded-md border border-white/20 shadow-lg flex items-center gap-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-md opacity-0 animate-scan"></div>
                <span className="relative z-10">Book Security Audit</span>
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
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}