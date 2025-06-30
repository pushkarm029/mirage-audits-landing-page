import React from 'react';

export default function Vision() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Community Building",
      description: "Gathering feedback and ideas from players like you to shape our foundation.",
      status: "current",
      icon: "🔍"
    },
    {
      phase: "Phase 2",
      title: "Prototype Development",
      description: "Building the first playable version based on your feedback.",
      status: "upcoming",
      icon: "🛠️"
    },
    {
      phase: "Phase 3",
      title: "Beta Testing",
      description: "Early supporters get exclusive access to test and refine the experience.",
      status: "upcoming",
      icon: "🧪"
    },
    {
      phase: "Phase 4",
      title: "Official Launch",
      description: "The full Game9 experience goes live, with special rewards for early supporters.",
      status: "upcoming",
      icon: "🚀"
    }
  ];

  return (
    <div id="the-vision" className="w-full py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Game9 is more than just a gaming platform. It&apos;s a journey we&apos;re taking together.
            Here&apos;s where we&apos;re headed.
          </p>
        </div>
        
        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {/* Timeline Items */}
          <div className="space-y-24">
            {roadmapItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } md:flex-row md:even:flex-row-reverse`}
              >
                {/* Content Box */}
                <div className="w-full md:w-5/12">
                  <div 
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      item.status === 'current' 
                        ? 'border-blue-400 bg-blue-900/20' 
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">{item.icon}</span>
                      <div>
                        <span className="text-blue-300 text-sm uppercase">{item.phase}</span>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/80">{item.description}</p>
                    
                    {item.status === 'current' && (
                      <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                        Currently Active
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center">
                  <div 
                    className={`w-4 h-4 rounded-full ${
                      item.status === 'current' 
                        ? 'bg-blue-400 animate-pulse' 
                        : 'bg-white/30'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-white/70 mb-6">
            Want to be part of our journey from the beginning?
          </p>
          <a 
            href="https://form.typeform.com/to/H2ifLY5y" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full transition-all duration-300"
          >
            Help Shape Our Future
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 