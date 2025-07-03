import { Marquee } from "@/components/magicui/marquee";

const chains = [
  {
    name: "Solana",
    description: "High-performance blockchain",
  },
  {
    name: "Sui", 
    description: "Move-based smart contracts",
  },
  {
    name: "Cardano",
    description: "Research-driven blockchain",
  },
  {
    name: "Ethereum",
    description: "Leading smart contract platform",
  },
  {
    name: "Optimism",
    description: "Ethereum Layer 2",
  },
  {
    name: "Avalanche",
    description: "Fast consensus protocol",
  },
  {
    name: "Arbitrum",
    description: "Ethereum scaling solution",
  },
  {
    name: "Base",
    description: "Coinbase Layer 2",
  },
  {
    name: "Polygon",
    description: "Ethereum scaling platform",
  },
  {
    name: "BNB Chain",
    description: "Binance ecosystem",
  },
  {
    name: "NEAR",
    description: "Carbon-neutral blockchain",
  },
  {
    name: "Aptos",
    description: "Move-based blockchain",
  }
];

const firstRow = chains.slice(0, chains.length / 2);
const secondRow = chains.slice(chains.length / 2);

const ChainCard = ({
  name,
  description,
}) => {
  return (
    <figure
      className="relative h-full w-48 sm:w-56 md:w-64 cursor-pointer overflow-hidden rounded-xl border p-3 sm:p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    >
      <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-base sm:text-lg">{name.charAt(0)}</span>
        </div>
        <div className="flex flex-col">
          <figcaption className="text-base sm:text-lg font-semibold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs sm:text-sm text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function SupportedChains() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Securing the Multi-Chain Future
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            <strong>We audit across the entire Web3 ecosystem:</strong>
          </p>
        </div>
        
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((chain) => (
              <ChainCard key={chain.name} {...chain} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((chain) => (
              <ChainCard key={chain.name} {...chain} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>
      </div>
    </section>
  );
}