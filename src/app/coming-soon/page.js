'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/NewFooter';

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to October 15, 2025
    const targetDate = new Date('2025-10-15T23:59:59');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <section className="relative min-h-[calc(100vh-80px)] text-white overflow-hidden flex items-center">
          {/* Background image - same as hero */}
          <div className="absolute inset-0 bg-cover bg-no-repeat bg-center hero-bg"></div>

          {/* Noise overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/backgrounds/noise-bg.png)',
              backgroundRepeat: 'repeat',
              opacity: 0.3
            }}
          ></div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 w-full py-20 pt-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Coming Soon
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-3">
                We're cooking something special
              </p>

              {/* Countdown Timer */}
              <div className="flex justify-center gap-4 md:gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                    Days
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                    Hours
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                    Minutes
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                    Seconds
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-6">
                Want early access? Reach out to us
              </p>

              {/* CTA Button */}
              <div className="flex justify-center gap-4">
                <a
                  href="https://t.me/mirageaudits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm px-6 h-12 bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 rounded-full transition-colors duration-200"
                >
                  Contact Us
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
