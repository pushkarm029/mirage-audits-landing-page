export const metadata = {
  title: "Careers - Join Next-Gen Chain Security Experts | NEAR, Sui, Solana, Rust, Stellar",
  description: "Join our specialized security team focusing on NEAR, Sui, Solana, Rust & Stellar blockchains. Help secure the next generation of blockchain technology.",
  keywords: "NEAR jobs, Sui careers, Solana security jobs, Rust developer jobs, Stellar careers, blockchain security careers, Move developer, Anchor developer, Soroban developer",
  alternates: {
    canonical: 'https://mirageaudits.com/careers',
  },
  openGraph: {
    title: "Careers - Mirage Audits",
    description: "Join our mission to make Web3 safer. Build the future of blockchain security with us.",
    type: "website",
    url: 'https://mirageaudits.com/careers',
    images: [
      {
        url: 'https://mirageaudits.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Careers at Mirage Audits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Careers - Mirage Audits",
    description: "Join our mission to make Web3 safer.",
    images: ['https://mirageaudits.com/logo.png'],
    creator: '@mirageaudits',
    site: '@mirageaudits',
  },
};

export default function CareersPage() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background image - same as hero */}
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center hero-bg"></div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/backgrounds/noise-bg.webp)',
          backgroundRepeat: 'repeat',
          opacity: 0.3
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 py-20 pt-32">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hack the Future with <span className="text-blue-400">Mirage</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-6">
            We're auditors hunting bugs in next-gen chains. Remote-first, async, no BS. We need talent who finds vulnerabilities. Degrees optional, skills required.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-white/70">
            <span className="px-3 py-1 bg-white/5 rounded-full">Global Remote</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">Async by Default</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">Impact &gt; Hours</span>
          </div>
        </div>

        {/* Job Listings */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Security Auditor Position */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Blockchain Security Auditor
                </h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs md:text-sm">
                    Remote
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-white/60 mb-6">
              Hunt bugs in Rust, Move, Anchor & Soroban. Audit protocols on Solana, Sui, Stellar, NEAR. Ship reports that save millions.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">You'll Do</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Conduct thorough security assessments of smart contracts, DeFi protocols, and blockchain infrastructure across next-gen chains
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Identify critical vulnerabilities in consensus mechanisms, cryptographic implementations, and protocol logic
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Collaborate with protocol teams to provide actionable remediation strategies and best practices
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Develop and maintain internal security tooling, fuzzing frameworks, and automated analysis systems
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Stay current with emerging threats, attack vectors, and security research in the Web3 ecosystem
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Serve as a technical expert, educating clients on security best practices and risk mitigation
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">You Have</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    3+ years breaking or building blockchain systems
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Expert-level proficiency in Rust, Move, or Anchor framework
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Deep crypto & consensus knowledge
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Proven track record: Top audit contest placements, strong private audit history, or experience at a leading security firm
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="https://t.me/mirageaudits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm px-6 h-12 bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 rounded-full transition-colors duration-200"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Security Auditor Intern Position */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Security Auditor Intern
                </h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs md:text-sm">
                    3-6 months
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs md:text-sm">
                    Remote
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-white/60 mb-6">
              Learn from senior auditors on real protocol audits. Paid internship, remote work, hands-on security research.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">You'll Do</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Assist senior auditors in conducting security assessments of smart contracts and blockchain protocols
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Identify and document potential vulnerabilities in testnet and production codebases
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Collaborate with the team to research emerging attack vectors and security patterns
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Contribute to internal tooling and automation for security testing workflows
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Stay up-to-date with industry trends and security developments in the Web3 space
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">You Have</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Solid programming fundamentals (any language)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Curiosity about security & blockchain
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Some experience with Rust, Move, Anchor, or Soroban
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Track record: Top audit contest finishes, bug bounty programs, or prior security research
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="https://t.me/mirageaudits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm px-6 h-12 bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 rounded-full transition-colors duration-200"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Technical Writer Position */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Security Technical Writer
                </h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs md:text-sm">
                    Remote
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-white/60 mb-6">
              Create technical content that educates the Web3 community about security. Write blog posts, research papers, and guides that builders actually read.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">You'll Do</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Publish in-depth security research articles and vulnerability analysis for the Web3 community
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Create educational blog posts covering security best practices, common pitfalls, and emerging threats
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Develop comprehensive technical guides and documentation for blockchain security topics
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Collaborate with security researchers to translate complex findings into accessible content
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Stay current with Web3 security trends and contribute thought leadership to the ecosystem
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Engage with the developer community through technical content and educational initiatives
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">You Have</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    2+ years writing about security, crypto, or dev tools
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Can read Rust/Move code and understand what it does
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Portfolio of technical writing (blog, docs, reports)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Understand blockchain fundamentals & common vulnerabilities
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="https://t.me/mirageaudits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm px-6 h-12 bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 rounded-full transition-colors duration-200"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
