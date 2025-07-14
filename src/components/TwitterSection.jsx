'use client';

import { ClientTweetCard } from "@/components/magicui/client-tweet-card";

export default function TwitterSection() {
  // Featured security-related tweets and threads
  const featuredTweets = [
    {
      id: "1798388859899076877", // Example Vitalik tweet about security
      category: "Security Alert",
      description: "Critical vulnerability discovered in DeFi protocol"
    },
    {
      id: "1807824537299669397", // Another example security-related tweet
      category: "Thread", 
      description: "Deep dive into smart contract security best practices"
    },
    {
      id: "1798388859899076877", // Fallback to same ID for demo
      category: "Analysis",
      description: "Breaking down the latest blockchain exploit"
    }
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Halborn style */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Security</span> Insights from X
          </h2>
          <p className="font-inter text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Follow our real-time security analysis, threat alerts, and educational threads on X (formerly Twitter)
          </p>
        </div>

        {/* Twitter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredTweets.map((tweet, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:border-blue-400/30 transition-all duration-300 p-6"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-flex px-3 py-1 text-xs font-jetbrains-mono font-medium uppercase tracking-wider bg-blue-600/20 text-blue-300 rounded-full border border-blue-400/20">
                  {tweet.category}
                </span>
              </div>

              {/* Tweet Description */}
              <p className="font-inter text-sm text-white/70 mb-4 leading-relaxed">
                {tweet.description}
              </p>

              {/* Tweet Card */}
              <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
                <ClientTweetCard id={tweet.id} />
              </div>

              {/* X/Twitter Logo */}
              <div className="flex items-center justify-center mt-4 pt-4 border-t border-white/10">
                <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="ml-2 text-white/60 text-sm font-inter">View on X</span>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA - Halborn style */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://x.com/mirageaudits" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter font-bold uppercase tracking-wider text-sm h-12 px-8 bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 rounded-full transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Follow @MirageAudits
            </a>
            <a 
              href="https://x.com/search?q=%23BlockchainSecurity%20from%3Amirageaudits" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter font-bold uppercase tracking-wider text-sm h-12 px-8 bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/30 rounded-full transition-colors duration-200"
            >
              View All Threads
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
  );
}