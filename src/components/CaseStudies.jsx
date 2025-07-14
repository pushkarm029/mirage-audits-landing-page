'use client';

import Image from 'next/image';
import { usePostHog } from 'posthog-js/react';

const CASE_STUDIES = [
  {
    id: 1,
    title: "Solana DeFi Protocol Security Audit",
    client: "SolanaFi",
    description: "Comprehensive security audit for a major Solana DeFi protocol handling $50M+ in TVL. Identified critical vulnerabilities in liquidity pool mechanisms.",
    image: "/case-studies/solana-defi.jpg",
    logo: "/case-studies/logos/solana-logo.png",
    category: "DeFi",
    blockchain: "Solana",
    highlights: [
      "5 Critical vulnerabilities found",
      "48-hour turnaround time",
      "Zero post-audit incidents"
    ]
  },
  {
    id: 2,
    title: "Layer 2 Bridge Security Assessment",
    client: "CrossChain Bridge",
    description: "Security assessment of cross-chain bridge infrastructure connecting Ethereum and Polygon. Prevented potential $10M+ exploit.",
    image: "/case-studies/l2-bridge.jpg",
    logo: "/case-studies/logos/ethereum-logo.png",
    category: "Infrastructure",
    blockchain: "Ethereum",
    highlights: [
      "Multi-chain expertise",
      "Bridge security specialist",
      "Continuous monitoring setup"
    ]
  },
  {
    id: 3,
    title: "Cardano dApp Security Review",
    client: "CardanoSwap",
    description: "Security review of Cardano-based decentralized exchange. Focused on Plutus smart contract vulnerabilities and UTXO model security.",
    image: "/case-studies/cardano-dapp.jpg",
    logo: "/case-studies/logos/cardano-logo.png",
    category: "DeFi",
    blockchain: "Cardano",
    highlights: [
      "Plutus expertise",
      "UTXO model security",
      "Mainnet deployment support"
    ]
  }
];

export default function CaseStudies() {
  const posthog = usePostHog();

  const handleCaseStudyClick = (caseStudy) => {
    posthog?.capture('case_study_clicked', {
      case_study_id: caseStudy.id,
      case_study_title: caseStudy.title,
      client: caseStudy.client,
      category: caseStudy.category,
      blockchain: caseStudy.blockchain
    });
  };

  const handleViewAllClick = () => {
    posthog?.capture('view_all_case_studies_clicked', {
      location: 'case_studies_section'
    });
  };

  return (
    <section className="py-20 bg-black" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-grotesk">
            Case Studies
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-inter">
            Real-world security successes across Web3 ecosystems. From DeFi protocols to gaming platforms, 
            see how we've helped secure the future of blockchain technology.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {CASE_STUDIES.map((caseStudy) => (
            <div
              key={caseStudy.id}
              onClick={() => handleCaseStudyClick(caseStudy)}
              className="group bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              
              {/* Case Study Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl font-bold text-white font-jetbrains-mono">
                        {caseStudy.blockchain.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full font-jetbrains-mono">
                      {caseStudy.category}
                    </div>
                  </div>
                </div>
                
                {/* Blockchain Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-jetbrains-mono">
                    {caseStudy.blockchain}
                  </div>
                </div>
              </div>

              {/* Case Study Content */}
              <div className="p-6">
                
                {/* Client Name */}
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-bold text-white font-jetbrains-mono">
                      {caseStudy.client.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm text-blue-300 font-jetbrains-mono">
                    {caseStudy.client}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors font-space-grotesk">
                  {caseStudy.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm mb-4 line-clamp-3 font-inter">
                  {caseStudy.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {caseStudy.highlights.slice(0, 2).map((highlight, index) => (
                    <div key={index} className="flex items-center text-xs text-white/60">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Read More Indicator */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-blue-300 font-jetbrains-mono group-hover:text-blue-200 transition-colors">
                    Read Case Study →
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a href="/case-studies">
            <button
              onClick={handleViewAllClick}
              className="relative inline-flex items-center justify-center px-8 py-3 bg-white/5 text-white rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-inter"
            >
              <div className="absolute inset-0 rounded-lg border-2 border-blue-500/30 animate-pulse"></div>
              <span className="relative">View All Case Studies</span>
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}