import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* Background with enhanced glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black backdrop-blur-sm"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Logo and Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Image src="/logo.png" alt="Mirage Audits Logo" width={36} height={36} className="rounded-lg" />
              <span className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">Mirage Audits</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Non-EVM security specialists
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wide font-['JetBrains_Mono']">
              SERVICES
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#audits" className="text-white/70 hover:text-blue-300 transition-colors text-xs sm:text-sm">Smart Contract Audits</a></li>
              <li><a href="#process" className="text-white/70 hover:text-blue-300 transition-colors text-xs sm:text-sm">Security Reviews</a></li>
              <li><a href="#process" className="text-white/70 hover:text-blue-300 transition-colors text-xs sm:text-sm">Fix Verification</a></li>
            </ul>
          </div>

          {/* Blockchains Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wide font-['JetBrains_Mono']">
              EXPERTISE
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><span className="text-white/70 text-xs sm:text-sm">Solana (Anchor)</span></li>
              <li><span className="text-white/70 text-xs sm:text-sm">Cardano (Plutus)</span></li>
              <li><span className="text-white/70 text-xs sm:text-sm">Fuel (Sway)</span></li>
              <li><span className="text-white/70 text-xs sm:text-sm">Sui (Move)</span></li>
              <li><span className="text-white/70 text-xs sm:text-sm">Starknet (Cairo)</span></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wide font-['JetBrains_Mono']">
              CONTACT
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="mailto:security@mirageaudits.com" className="text-white/70 hover:text-blue-300 transition-colors text-xs sm:text-sm">security@mirageaudits.com</a></li>
              <li><a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-300 transition-colors text-xs sm:text-sm">Book Security Audit</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-white/50 text-xs sm:text-sm">
              © 2025 MirageAudits. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#privacy" className="text-white/50 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/50 hover:text-blue-300 transition-colors text-xs sm:text-sm">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}