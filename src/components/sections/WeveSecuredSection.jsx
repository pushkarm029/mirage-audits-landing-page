'use client';

import Image from 'next/image';

export default function WeveSecuredSection() {
  return (
    <section className="relative bg-black text-white py-16 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/backgrounds/noise-bg.webp)',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat'
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 lg:max-w-[1440px] lg:mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We've <span className="text-blue-400">Secured</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
            Former blockchain developers turned elite security researchers, we're the rare breed who've built the systems we now protect. Specializing in Rust and next-gen protocols, we bring builder's insight to breaking, and making us the trusted choice for teams pushing the boundaries of what's possible on-chain.
          </p>
        </div>

        {/* Secured Projects - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">

          {/* Aquarius - Stellar */}
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
              <Image
                src="/secured/aqua.png"
                alt="Aquarius"
                width={64}
                height={64}
                className="w-auto h-auto max-h-16 object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg">Aquarius</h3>
              <p className="text-white/60 text-sm">Stellar</p>
            </div>
          </div>

          {/* Bluefin - Sui */}
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
              <Image
                src="/secured/bluefin.png"
                alt="Bluefin"
                width={64}
                height={64}
                className="w-auto h-auto max-h-16 object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg">Bluefin</h3>
              <p className="text-white/60 text-sm">Sui</p>
            </div>
          </div>

          {/* Crestal Network - DePIN */}
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
              <Image
                src="/secured/cn.jpeg"
                alt="Crestal Network"
                width={64}
                height={64}
                className="w-auto h-auto max-h-16 object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg">Crestal Network</h3>
              <p className="text-white/60 text-sm">DePIN</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
