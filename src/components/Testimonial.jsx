import React from 'react';
import GradientButton from "./ui/GradientButton";

export default function Testimonial() {
  const testimonials = [
    {
      initial: "D",
      name: "Dev Team",
      role: "Solana DeFi Project",
      text: "Finally, security that doesn't break our runway or timeline. Got our Solana DEX audited and live in 2 weeks instead of 2 months.",
      rating: 5,
      gradient: "from-blue-400 to-purple-500"
    },
    {
      initial: "F",
      name: "Founder",
      role: "Sui NFT Marketplace",
      text: "The only firm that actually understands Move and Sui's unique architecture. Saved us from 3 critical bugs before mainnet.",
      rating: 5,
      gradient: "from-green-400 to-blue-500"
    },
    {
      initial: "T",
      name: "Tech Lead",
      role: "Cardano Protocol",
      text: "Their continuous monitoring caught a vulnerability that would have cost us millions. The $1000/month is nothing compared to the peace of mind.",
      rating: 5,
      gradient: "from-yellow-400 to-red-500"
    }
  ];

  return (
    <div id="testimonials" className="w-full py-20 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-6xl mx-auto px-4">
        <div 
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Trusted by Builders Who Ship Fast
          </h2>
          <p 
            className="text-white/70 max-w-2xl mx-auto"
          >
            Real teams building on Solana, Sui, and Cardano trust us with their security.
            Here&apos;s what they have to say about working with us.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-xl`}>
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium">{testimonial.name}</h3>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-5 h-5 ${star <= testimonial.rating ? 'text-yellow-500' : 'text-white/30'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-6">
            Join 150+ projects building safer Web3 on niche chains
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GradientButton className="px-8 py-4 text-lg font-bold"> 
                Get Free Scan
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </GradientButton>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 text-lg font-bold bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 transition-all duration-300">
                Book 15-min Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 