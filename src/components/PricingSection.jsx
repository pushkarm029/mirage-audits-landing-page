'use client';

import { usePostHog } from 'posthog-js/react';

export default function PricingSection() {
  const posthog = usePostHog();

  const handleCTAClick = () => {
    posthog?.capture('cta_clicked', {
      location: 'pricing_section',
      cta_text: 'Book Security Audit',
      destination: 'telegram'
    });
  };
  return (
    <section id="pricing" className="relative bg-black text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Transparent{" "}
            <span className="text-green-300">Pricing</span>
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-white/70">
            No sales calls, no hidden fees, no surprises
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-lg p-6 sm:p-8 rounded-xl border border-green-400/30 mb-6 sm:mb-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-300 mb-2">
              $1K/week
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-3 sm:p-4 rounded-lg border border-white/10">
              <p className="font-inter text-sm sm:text-base text-white/80">
                <span className="font-semibold text-white">Timeline:</span> 1-4 weeks<br/>
                <span className="font-semibold text-white">Typical cost:</span> $1K-4K total
              </p>
            </div>
          </div>
        </div>

        {/* Quick Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-red-500/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-red-500/30">
            <h4 className="font-inter text-base sm:text-lg font-semibold text-red-200 mb-3">
              Traditional Audits
            </h4>
            <ul className="font-inter text-sm text-white/70 space-y-2">
              <li>• $10K+ minimums</li>
              <li>• 8+ week backlogs</li>
              <li>• Hidden fees & scope creep</li>
              <li>• Enterprise sales process</li>
            </ul>
          </div>
          
          <div className="bg-green-500/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-green-500/30">
            <h4 className="font-inter text-base sm:text-lg font-semibold text-green-200 mb-3">
              Mirage Audits
            </h4>
            <ul className="font-inter text-sm text-white/70 space-y-2">
              <li>• $1K weekly rate</li>
              <li>• Start within days</li>
              <li>• Fixed weekly pricing</li>
              <li>• Direct builder contact</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer" onClick={handleCTAClick}>
            <button className="relative h-11 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-semibold bg-white text-black rounded-md border border-white/20 shadow-lg flex items-center gap-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-md opacity-0 animate-scan"></div>
              <span className="relative z-10">Book Security Audit</span>
            </button>
          </a>
          
          <div className="text-sm text-white/70">
            <span className="font-semibold">Response time:</span> 4 hours
          </div>
        </div>

      </div>
    </section>
  );
}