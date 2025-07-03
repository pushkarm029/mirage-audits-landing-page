import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* Background with enhanced glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black backdrop-blur-sm"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo and Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image src="/logo.png" alt="Mirage Audits Logo" width={36} height={36} />
              <span className="text-2xl font-bold text-white font-['Space_Grotesk']">Mirage Audits</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Non-EVM security specialists
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wide font-['JetBrains_Mono']">
              SERVICES
            </h3>
            <ul className="space-y-3">
              <li><a href="#audits" className="text-white/70 hover:text-blue-300 transition-colors text-sm">Smart Contract Audits</a></li>
              <li><a href="#process" className="text-white/70 hover:text-blue-300 transition-colors text-sm">Security Reviews</a></li>
              <li><a href="#process" className="text-white/70 hover:text-blue-300 transition-colors text-sm">Fix Verification</a></li>
            </ul>
          </div>

          {/* Blockchains Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wide font-['JetBrains_Mono']">
              EXPERTISE
            </h3>
            <ul className="space-y-3">
              <li><span className="text-white/70 text-sm">Solana (Anchor)</span></li>
              <li><span className="text-white/70 text-sm">Cardano (Plutus)</span></li>
              <li><span className="text-white/70 text-sm">Fuel (Sway)</span></li>
              <li><span className="text-white/70 text-sm">Sui (Move)</span></li>
              <li><span className="text-white/70 text-sm">Starknet (Cairo)</span></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wide font-['JetBrains_Mono']">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li><a href="mailto:security@mirageaudits.com" className="text-white/70 hover:text-blue-300 transition-colors text-sm">security@mirageaudits.com</a></li>
              <li><a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-300 transition-colors text-sm">Book Security Audit</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © 2025 MirageAudits. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-white/50 hover:text-blue-300 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/50 hover:text-blue-300 transition-colors text-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}