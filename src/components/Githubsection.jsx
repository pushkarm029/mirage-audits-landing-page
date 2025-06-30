export default function PartnersSection() {
  const developmentPartners = [
    { name: "Solana Foundation", description: "Validator & ecosystem security" },
    { name: "Sui Foundation", description: "Move language specialists" },
    { name: "Cardano Foundation", description: "Plutus smart contract experts" },
    { name: "Polygon Labs", description: "zkEVM & Layer 2 security" }
  ];

  const technologyPartners = [
    { name: "Alchemy", description: "RPC & infrastructure monitoring" },
    { name: "QuickNode", description: "Multi-chain node security" },
    { name: "Tenderly", description: "Transaction simulation & debugging" },
    { name: "OpenZeppelin", description: "Security tooling integration" }
  ];

  const acceleratorPartners = [
    { name: "Superteam", description: "(Solana) Developer ecosystem" },
    { name: "Buildspace", description: "Web3 education platform" },
    { name: "Encode Club", description: "Hackathon & bootcamp security" }
  ];

  const whyUsPoints = [
    {
      title: "Speed Over Bureaucracy",
      description: "No 10-person sales calls. Just fast, expert security."
    },
    {
      title: "Niche Chain Specialists",
      description: "We live and breathe Solana, Sui, Cardano & EVM Layer 2s while others play catch-up."
    },
    {
      title: "Builder-First Pricing",
      description: "Starting at $300/month with our Phantom Scan—less than one day of a senior dev's salary."
    },
    {
      title: "We Fix Issues, Not Just Find Them",
      description: "Complete process: scan → review → help you fix → verify fixes → final report"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-black to-black/95 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Why Us Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We're the Anti-Enterprise Security Firm
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              While others chase Fortune 500 contracts, we're laser-focused on the builders who actually ship:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUsPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-semibold text-blue-200 mb-3">{point.title}</h3>
                <p className="text-white/70">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted Infrastructure & Ecosystem Partners
          </h2>
        </div>

        {/* Development Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-200 mb-8 text-center">
            Development Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentPartners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{partner.name}</h4>
                <p className="text-white/60 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-200 mb-8 text-center">
            Technology Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyPartners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{partner.name}</h4>
                <p className="text-white/60 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accelerator Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-200 mb-8 text-center">
            Accelerator Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {acceleratorPartners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{partner.name}</h4>
                <p className="text-white/60 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/60 mb-4">
            Want to partner with us?
          </p>
          <a 
            href="mailto:partners@mirageaudits.com"
            className="text-blue-300 hover:text-blue-200 underline"
          >
            Contact our team
          </a>
        </div>

      </div>
    </div>
  );
}
