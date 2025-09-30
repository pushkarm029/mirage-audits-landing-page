'use client';

import { useEffect, useRef } from 'react';

export default function TrustedBySection() {
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);

  // Trusted client logos - you can replace these with your actual client logos
  const trustedClients = [
    { name: "Solana Foundation", logo: "🔵" },
    { name: "Ava Labs", logo: "🔴" },
    { name: "Ripple", logo: "🟡" },
    { name: "Sui Foundation", logo: "🔵" },
    { name: "Fuel Labs", logo: "🟢" },
    { name: "Cardano Foundation", logo: "🔵" },
    { name: "Starknet", logo: "🟠" },
    { name: "Circle", logo: "🔵" },
    { name: "LayerZero", logo: "🟣" },
    { name: "zkSync", logo: "⚫" },
    { name: "Uniswap", logo: "🩷" },
    { name: "Major Banks", logo: "🏦" }
  ];

  // Featured media outlets - using same logos as Halborn for credibility
  const featuredMedia = [
    { name: "Fortune", src: "/media/featured-in/featured-in-fortune.svg" },
    { name: "TechCrunch", src: "/media/featured-in/featured-in-techcrunch.svg" },
    { name: "CNBC", src: "/media/featured-in/featured-in-cnbc.svg" },
    { name: "CoinDesk", src: "/media/featured-in/featured-in-coindesk.svg" },
    { name: "Yahoo Finance", src: "/media/featured-in/featured-in-yahoo-finance.svg" },
    { name: "Forbes", src: "/media/featured-in/featured-in-forbes.svg" },
    { name: "Blockworks", src: "/media/featured-in/featured-in-blockworks.svg" },
    { name: "The New York Times", src: "/media/featured-in/featured-in-nyt.svg" },
    { name: "CoinTelegraph", src: "/media/featured-in/featured-in-cointelegraph.svg" },
    { name: "Bloomberg", src: "/media/featured-in/featured-in-bloomberg.svg" },
    { name: "BeInCrypto", src: "/media/featured-in/featured-in-beincrypto.svg" },
    { name: "Decrypt", src: "/media/featured-in/featured-in-decrypt.svg" }
  ];

  useEffect(() => {
    // Animate the marquees with pause/resume effect
    const animateMarquee = (ref, direction = 1, duration = 20000) => {
      if (!ref.current) return;
      
      const marquee = ref.current;
      let start = null;
      let isPaused = false;
      let pausedAt = 0;
      
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        
        const elapsed = timestamp - start;
        
        // Pause every 8 seconds for 2 seconds
        if (!isPaused && elapsed % 10000 > 8000) {
          isPaused = true;
          pausedAt = elapsed;
        } else if (isPaused && elapsed - pausedAt > 2000) {
          isPaused = false;
          start = timestamp - (pausedAt % 10000);
        }
        
        if (!isPaused) {
          const progress = ((elapsed % duration) / duration) * 100;
          marquee.style.transform = `translateX(${direction * (progress - 100)}%)`;
        }
        
        requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    };

    // Start both marquees in opposite directions
    animateMarquee(marqueeRef1, 1, 25000);  // Right to left
    animateMarquee(marqueeRef2, -1, 30000); // Left to right (opposite)
  }, []);

  return (
    <section className="relative bg-black text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Trusted by Section - exact Halborn structure */}
        <div className="mt-0 sm:mt-[-2rem] mb-16">
          <h4 className="flex justify-center text-base font-bold text-white/60 mb-6 md:mb-8 uppercase tracking-wider">
            Trusted by
          </h4>
          
          {/* Animated marquee container - exact Halborn style */}
          <div className="rounded-md flex flex-col antialiased relative overflow-hidden gap-7 md:gap-0">
            
            {/* First marquee row - moving right to left */}
            <div className="w-full overflow-hidden">
              <div 
                ref={marqueeRef1}
                className="flex whitespace-nowrap"
                style={{ width: '200%' }}
              >
                {[...trustedClients, ...trustedClients].map((client, index) => (
                  <div key={index} className="flex-shrink-0 mx-2 lg:mx-8 2xl:mx-12">
                    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-lg px-4 py-3 rounded-lg border border-white/10 w-fit">
                      <span className="text-2xl">{client.logo}</span>
                      <span className="font-inter text-sm md:text-base text-white/80 whitespace-nowrap">
                        {client.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second marquee row - moving left to right */}
            <div className="w-full overflow-hidden">
              <div 
                ref={marqueeRef2}
                className="flex whitespace-nowrap"
                style={{ width: '200%' }}
              >
                {[...trustedClients.slice().reverse(), ...trustedClients.slice().reverse()].map((client, index) => (
                  <div key={index} className="flex-shrink-0 mx-2 lg:mx-8 2xl:mx-12">
                    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-lg px-4 py-3 rounded-lg border border-white/10 w-fit">
                      <span className="text-2xl">{client.logo}</span>
                      <span className="font-inter text-sm md:text-base text-white/80 whitespace-nowrap">
                        {client.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>

        {/* Featured In Section - exact Halborn structure */}
        <div className="flex">
          <div className="mx-auto text-center flex flex-col gap-10">
            <h4 className="font-inter text-2xl md:text-3xl font-bold text-center text-white">
              Featured In
            </h4>
            
            <div className="flex shrink-0 gap-3 md:gap-10 w-full mx-auto flex-wrap justify-center max-w-[1260px]">
              {featuredMedia.map((media, index) => (
                <div key={index} className="m-auto px-2 mx-0">
                  <img 
                    alt={media.name}
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    className="icons-filter h-[100px] max-h-[42px] max-w-36 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity duration-300"
                    style={{color: 'transparent'}}
                    src={media.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}