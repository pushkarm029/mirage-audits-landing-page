
const FeatureSection = () => {
  const problems = [
    {
      title: "Wait 8+ weeks",
      description: "for audit slots from top firms"
    },
    {
      title: "Pay $50K-150K",
      description: "for enterprise audits (30% of your entire seed round)"
    },
    {
      title: "Ship without security",
      description: "and pray nothing breaks"
    },
    {
      title: "Use budget tools",
      description: "that miss critical vulnerabilities"
    }
  ];

  const solutions = [
    {
      title: "Ship in Days, Not Months",
      description: "24-48 hour security reviews vs 8+ week enterprise backlogs"
    },
    {
      title: "Pay What You Can Afford",
      description: "$1K-3K/month subscriptions vs $50K+ one-time fees"
    },
    {
      title: "Niche Chain Experts",
      description: "Deep expertise in Solana, Sui, Cardano & EVM Layer 2s—not just another Ethereum shop"
    },
    {
      title: "Continuous Protection",
      description: "Real-time monitoring and alerts vs \"good luck after your audit\""
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Initial Quote & Free Assessment",
      description: "Upload your code. Get instant AI analysis + pricing quote in 10 minutes."
    },
    {
      step: "2",
      title: "Rigorous Expert Audit",
      description: "Our security engineers dive deep into your smart contracts, finding critical vulnerabilities others miss."
    },
    {
      step: "3",
      title: "Hands-On Issue Resolution",
      description: "We don't just point out problems—we help you fix them. Code reviews, pair programming sessions, architecture guidance."
    },
    {
      step: "4",
      title: "Fix Verification & Re-Review",
      description: "Every fix gets verified. No guessing if you've actually solved the problem."
    },
    {
      step: "5",
      title: "Final Audit Report & Certification",
      description: "Ship with confidence. Get a report that actually means something to investors and users."
    }
  ];

  return (
    <section className="relative bg-black text-white py-20">
      {/* About Us Section */}
      <div id="services" className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Security Experts Who Actually Ship
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            <strong>Battle-tested team of security engineers</strong> with deep expertise across emerging chains. In just the past 6 months, we've:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-blue-200 mb-3">Audited 20+ protocols</h3>
            <p className="text-white/70">across Solana, Sui, and Cardano ecosystems</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-blue-200 mb-3">Discovered 40+ critical vulnerabilities</h3>
            <p className="text-white/70">before they reached production</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-blue-200 mb-3">Saved millions in potential exploits</h3>
            <p className="text-white/70">for fast-moving teams</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-blue-200 mb-3">Helped projects ship securely</h3>
            <p className="text-white/70">without breaking timelines or budgets</p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-blue-200 font-medium">
            We're not enterprise consultants—we're builders who secure builders.
          </p>
        </div>
      </div>

      {/* Problem Section */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            While Big Projects Get Big Security...
          </h2>
          <p className="text-xl text-white/70 mb-8">
            <strong>Small teams get stuck with impossible choices:</strong>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-red-900/20 backdrop-blur-sm p-6 rounded-xl border border-red-500/20"
            >
              <h3 className="text-lg font-semibold text-red-300 mb-2">{problem.title}</h3>
              <p className="text-white/70 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Section */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built Different. Priced Right.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-semibold text-blue-200 mb-3">{solution.title}</h3>
              <p className="text-white/70">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div id="process" className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Only Security Process That Actually Helps You Ship
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl text-white/70 mb-4">
              <strong>Most firms:</strong> Find bugs → Hand you a PDF → Good luck fixing it yourself
            </p>
            <p className="text-xl text-blue-200 font-medium">
              <strong>We do:</strong> Find bugs → Guide you through fixes → Verify solutions → Certify completion
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {howItWorks.map((step, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-blue-200 mb-4">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
