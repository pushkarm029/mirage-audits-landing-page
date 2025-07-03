'use client';

import { usePostHog } from 'posthog-js/react';

export default function CredibilitySection() {
  const posthog = usePostHog();

  const handleCTAClick = () => {
    posthog?.capture('cta_clicked', {
      location: 'credibility_section',
      cta_text: 'Book Security Audit',
      destination: 'telegram'
    });
  };
  const credibilityStats = [
    {
      title: "Focused on Niche Ecosystems",
      description: "Solana, Cardano, Fuel, Sui, Starknet",
      highlight: "🎯"
    },
    {
      title: "Vulnerabilities Disclosed",
      description: "Across major protocols",
      highlight: "40+"
    },
    {
      title: "Exploits Prevented",
      description: "Real security that saves real money for builders",
      highlight: "$100M+"
    },

    {
      title: "Builders Securing Builders",
      description: "We understand the startup journey—security shouldn't break your budget",
      highlight: "🤝"
    }
  ];

  const expertiseAreas = [
    {
      ecosystem: "Solana",
      language: "Anchor",
      color: "#9945FF"
    },
    {
      ecosystem: "Cardano",
      language: "Plutus",
      color: "#0033AD"
    },
    {
      ecosystem: "Fuel",
      language: "Sway",
      color: "#00C896"
    },
    {
      ecosystem: "Sui",
      language: "Move",
      color: "#4CA2FF"
    },
    {
      ecosystem: "Starknet",
      language: "Cairo",
      color: "#EC796B"
    }
  ];

  return (
    <section id="about" className="relative bg-black text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Security Specialists for{" "}
            <span className="text-blue-200">Early-Stage Builders</span>
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-white/70">
            When you&apos;re building your project, security should be a priority—not an afterthought
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {credibilityStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 text-center group"
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-200 mb-2 font-space-grotesk">
                {stat.highlight}
              </div>
              <h4 className="font-space-grotesk text-base sm:text-lg font-semibold text-white mb-2">
                {stat.title}
              </h4>
              <p className="font-inter text-sm text-white/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Expertise Section */}
        <div className="bg-gray-900/60 backdrop-blur-lg p-6 sm:p-8 rounded-xl border border-white/20 mb-6 sm:mb-8">
          <h3 className="font-space-grotesk text-lg sm:text-xl font-semibold text-blue-200 mb-4 sm:mb-6 text-center">
            Deep Ecosystem Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: area.color }}
                ></div>
                <span className="font-jetbrains-mono text-sm font-medium text-white">
                  {area.ecosystem}
                </span>
                <span className="text-white/50 text-sm">
                  /
                </span>
                <span className="font-jetbrains-mono text-sm text-white/70">
                  {area.language}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer" onClick={handleCTAClick}>
            <button className="relative h-11 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-semibold bg-white text-black rounded-md border border-white/20 shadow-lg flex items-center gap-2 transition-all duration-300 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-md opacity-0 animate-scan"></div>
              <span className="relative z-10">Book Security Audit</span>
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}