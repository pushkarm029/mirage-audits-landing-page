
"use client";

import { Clock, DollarSign, Shield, AlertTriangle } from "lucide-react";
import { usePostHog } from 'posthog-js/react';

const FeatureSection = () => {
  const posthog = usePostHog();

  const handleCTAClick = () => {
    posthog?.capture('cta_clicked', {
      location: 'features_section',
      cta_text: 'Book Security Audit',
      destination: 'telegram'
    });
  };

  const handleEmailClick = () => {
    posthog?.capture('email_clicked', {
      location: 'features_section',
      email: 'security@mirageaudits.com'
    });
  };

  const problems = [
    {
      title: "Skipping security entirely",
      description: "Building without audits = guaranteed exploits",
      icon: AlertTriangle
    },
    {
      title: "Waiting until mainnet",
      description: "Post-launch audits can't prevent user fund loss",
      icon: Clock
    },
    {
      title: "Wrong audit firm choice", 
      description: "EVM-only auditors miss non-EVM vulnerabilities",
      icon: Shield
    },
    {
      title: "Budget-breaking minimums",
      description: "$10K+ audit fees consume your entire runway",
      icon: DollarSign
    }
  ];



  return (
    <section id="audits" className="relative bg-black text-white py-12 sm:py-16 lg:py-20">

      {/* Problem Section */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 lg:mb-20">
        {/* Content */}
        <div className="relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Building a Project? Avoid These{" "}
              <span className="text-red-400">Security Mistakes</span>
            </h2>
            <p className="font-inter text-base sm:text-lg md:text-xl text-white/70">
              Don&apos;t let expensive, slow audits derail your development timeline
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-red-900/10 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-red-500/30 text-center"
              >
                <div className="flex justify-center mb-3">
                  <problem.icon className="w-6 h-6 text-red-300" />
                </div>
                <h4 className="font-inter text-base sm:text-lg font-semibold text-red-200 mb-2">
                  {problem.title}
                </h4>
                <p className="font-inter text-sm text-white/70">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Process Section */}
      <div id="process" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Security Process for{" "}
            <span className="text-blue-200">Building Projects</span>
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-white/70">
            Integrate security into your development workflow. No delays, no surprises
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white/5 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="font-inter text-xs sm:text-sm font-bold text-green-300">1</span>
              </div>
              <h4 className="font-inter text-base sm:text-lg font-semibold text-green-200">Discovery (Free)</h4>
            </div>
            <ul className="font-inter text-xs sm:text-sm text-white/70 space-y-1">
              <li>• Quick project assessment</li>
              <li>• Fixed-price quote in 24hrs</li>
              <li>• No sales calls or pressure</li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="font-inter text-xs sm:text-sm font-bold text-blue-300">2</span>
              </div>
              <h4 className="font-inter text-base sm:text-lg font-semibold text-blue-200">Security Review</h4>
            </div>
            <ul className="font-inter text-xs sm:text-sm text-white/70 space-y-1">
              <li>• Architecture & business logic review</li>
              <li>• Manual code analysis</li>
              <li>• Automated testing & fuzzing</li>
              <li>• Live collaboration via Telegram</li>
              <li>• Draft report for your review</li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="font-inter text-xs sm:text-sm font-bold text-purple-300">3</span>
              </div>
              <h4 className="font-inter text-base sm:text-lg font-semibold text-purple-200">Ship Secure</h4>
            </div>
            <ul className="font-inter text-xs sm:text-sm text-white/70 space-y-1">
              <li>• Help you fix every issue</li>
              <li>• Quick verification review</li>
              <li>• Public report for credibility</li>
              <li>• Ongoing security guidance</li>
            </ul>
          </div>
        </div>
        
        {/* <div className="text-center">
          <div className="bg-green-500/10 backdrop-blur-lg p-6 rounded-xl border border-green-500/30 max-w-md mx-auto">
            <p className="font-inter text-lg text-green-300 font-bold mb-2">
              $1K/week • No hidden fees
            </p>
            <p className="font-inter text-sm text-white/70">
              Most audits: 1-3 weeks • Pay only for time used
            </p>
          </div>
        </div> */}
      </div>

      {/* Final CTA Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center">
        <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          Ready to Secure{" "}
          <span className="text-blue-200">Your Project?</span>
        </h2>
        
        <div className="mb-6 sm:mb-8">
          <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer" onClick={handleCTAClick}>
            <button className="relative h-11 sm:h-12 px-4 sm:px-6 text-sm sm:text-base font-semibold bg-white text-black rounded-md border border-white/20 shadow-lg flex items-center gap-2 transition-all duration-300 mx-auto">
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
        
        <div className="space-y-3 sm:space-y-4">
          <p className="font-inter text-base sm:text-lg text-white/70">
            <span className="font-semibold">Contact:</span> <a href="mailto:security@mirageaudits.com" className="text-blue-300 hover:text-blue-200 transition-colors" onClick={handleEmailClick}>security@mirageaudits.com</a>
          </p>
          <p className="font-inter text-sm sm:text-base text-blue-200">
            <span className="font-semibold">Response time:</span> 4 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
