
"use client";

import { Clock, DollarSign, Shield, AlertTriangle } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { useEffect, useState } from "react";

const FeatureSection = () => {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, []);

  const problems = [
    {
      title: "$10K+ minimums",
      description: "30% of your seed funding gone",
      icon: DollarSign
    },
    {
      title: "Competitors launch while you wait",
      description: "8+ week backlogs kill momentum",
      icon: Clock
    },
    {
      title: "Generic EVM focus",
      description: "miss critical non-EVM vulnerabilities",
      icon: Shield
    },
    {
      title: "PDF + goodbye",
      description: "no support fixing what they found",
      icon: AlertTriangle
    }
  ];



  return (
    <section id="audits" className="relative bg-black text-white py-20">

      {/* Problem Section */}
      <div className="relative max-w-6xl mx-auto px-6 mb-20">
        {/* Particles Background */}
        <Particles
          className="absolute inset-0 z-0"
          quantity={60}
          ease={80}
          color={color}
          refresh
        />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-6">
              Why Enterprise Audits Fail{" "}
              <span className="text-red-400">Early-Stage Builders</span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-white/70">
              Your grant should build product, not pay audit premiums
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-red-900/10 backdrop-blur-lg p-6 rounded-xl border border-red-500/30 text-center"
              >
                <h3 className="font-space-grotesk text-lg font-semibold text-red-200 mb-2">
                  {problem.title}
                </h3>
                <p className="font-inter text-sm text-white/70">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Process Section */}
      <div id="process" className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-6">
            Streamlined Security{" "}
            <span className="text-blue-200">Methodology</span>
          </h2>
          <p className="font-inter text-lg md:text-xl text-white/70">
            Transparent process, predictable timeline
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="font-jetbrains-mono text-sm font-bold text-green-300">1</span>
              </div>
              <h3 className="font-space-grotesk text-lg font-semibold text-green-200">Discovery (Free)</h3>
            </div>
            <ul className="font-inter text-sm text-white/70 space-y-1">
              <li>• Quick project assessment</li>
              <li>• Fixed-price quote in 24hrs</li>
              <li>• No sales calls or pressure</li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="font-jetbrains-mono text-sm font-bold text-blue-300">2</span>
              </div>
              <h3 className="font-space-grotesk text-lg font-semibold text-blue-200">Security Review</h3>
            </div>
            <ul className="font-inter text-sm text-white/70 space-y-1">
              <li>• Architecture & business logic review</li>
              <li>• Manual code analysis</li>
              <li>• Automated testing & fuzzing</li>
              <li>• Live collaboration via Telegram</li>
              <li>• Draft report for your review</li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="font-jetbrains-mono text-sm font-bold text-purple-300">3</span>
              </div>
              <h3 className="font-space-grotesk text-lg font-semibold text-purple-200">Ship Secure</h3>
            </div>
            <ul className="font-inter text-sm text-white/70 space-y-1">
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
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-8">
          Ready to Secure{" "}
          <span className="text-blue-200">Your Project?</span>
        </h2>
        
        <div className="mb-8">
          <a href="https://t.me/mirageaudits" target="_blank" rel="noopener noreferrer">
            <button className="relative h-12 px-6 text-base font-semibold bg-white text-black rounded-md border border-white/20 shadow-lg flex items-center gap-2 transition-all duration-300 mx-auto">
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
        
        <div className="space-y-4">
          <p className="font-inter text-lg text-white/70">
            <span className="font-semibold">Contact:</span> security@mirageaudits.com
          </p>
          <p className="font-inter text-base text-blue-200">
            <span className="font-semibold">Response time:</span> 4 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
