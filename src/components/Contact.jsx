"use client";

export default function Contact() {
  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Ready to Audit?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Get Started Today:
          </p>
          <p className="text-lg text-blue-300 font-medium">
            <span className="font-semibold">Get instant quote:</span> Tell us about your project, get pricing in 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-blue-200">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-white/70">security@mirageaudits.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Response time</h4>
                    <p className="text-white/70">4 hours</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-8 space-y-3">
                <button className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-colors relative overflow-hidden">
                  <span className="relative z-10">Book Security Audit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-scan"></div>
                </button>
                <button className="w-full h-12 px-6 text-base font-medium border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-colors">
                  Book Quick Call
                </button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-blue-200">Rust Ecosystem Specialists</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/70">Solana</span>
                  <span className="font-jetbrains-mono text-sm text-blue-300">Rust/Anchor</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/70">Cardano</span>
                  <span className="font-jetbrains-mono text-sm text-blue-300">Haskell/Plutus</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/70">Fuel</span>
                  <span className="font-jetbrains-mono text-sm text-blue-300">Sway</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/70">Sui</span>
                  <span className="font-jetbrains-mono text-sm text-blue-300">Move</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/70">Starknet</span>
                  <span className="font-jetbrains-mono text-sm text-blue-300">Cairo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-white">Get Your Quote</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Name *
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Blockchain Ecosystem *
                </label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400">
                  <option value="">Select ecosystem</option>
                  <option value="solana">Solana (Rust/Anchor)</option>
                  <option value="cardano">Cardano (Haskell/Plutus)</option>
                  <option value="fuel">Fuel (Sway)</option>
                  <option value="sui">Sui (Move)</option>
                  <option value="starknet">Starknet (Cairo)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400">
                  <option value="">Select project type</option>
                  <option value="defi">DeFi Protocol</option>
                  <option value="nft">NFT/Gaming</option>
                  <option value="dao">DAO/Governance</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Codebase Size
                </label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400">
                  <option value="">Estimate lines of code</option>
                  <option value="small">Small (&lt;1K lines)</option>
                  <option value="medium">Medium (1K-5K lines)</option>
                  <option value="large">Large (5K+ lines)</option>
                  <option value="unknown">Not sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Specific Concerns
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none"
                  placeholder="Any specific security concerns, previous audit findings, or areas you want us to focus on..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-colors relative overflow-hidden"
              >
                <span className="relative z-10">Get Quote in 24 Hours</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-scan"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}