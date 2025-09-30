export const metadata = {
  title: "Careers - Join Next-Gen Chain Security Experts | NEAR, Sui, Solana, Rust, Stellar",
  description: "Join our specialized security team focusing on NEAR, Sui, Solana, Rust & Stellar blockchains. Help secure the next generation of blockchain technology.",
  keywords: "NEAR jobs, Sui careers, Solana security jobs, Rust developer jobs, Stellar careers, blockchain security careers, Move developer, Anchor developer, Soroban developer",
  openGraph: {
    title: "Careers - Mirage Audits",
    description: "Join our mission to make Web3 safer. Build the future of blockchain security with us.",
    type: "website",
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
          backgroundImage: 'url(/images/backgrounds/noise-bg.png)',
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
            Careers at <span className="text-blue-400">Mirage Audits</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Join our mission to make Web3 safer. We're building the next generation of blockchain security solutions.
          </p>
        </div>

        {/* Job Listings */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Security Researcher Position */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Security Researcher
                </h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs md:text-sm">
                    Full-time
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs md:text-sm">
                    Remote
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-white/60 mb-6">
              Join our security research team to identify vulnerabilities in next-generation blockchain protocols. Work with cutting-edge technology across Sui, Solana, Stellar, NEAR, and other emerging chains.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">Responsibilities</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Conduct security audits of smart contracts and blockchain protocols
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Research and identify novel attack vectors and vulnerabilities
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Develop automated security testing tools and frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Collaborate with development teams to remediate security issues
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">Requirements</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    3+ years of experience in security research or smart contract auditing
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Deep understanding of blockchain technology and cryptography
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Proficiency in Rust, Move, or Anchor framework
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Experience with static analysis and formal verification tools
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

          {/* Security Researcher Intern Position */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Security Researcher Intern
                </h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs md:text-sm">
                    Internship
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs md:text-sm">
                    Remote
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs md:text-sm">
                    3-6 months
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-white/60 mb-6">
              Kickstart your career in blockchain security. Learn from experienced auditors while working on real-world security assessments for next-gen blockchain protocols.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">Responsibilities</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Assist in smart contract security audits under senior auditor guidance
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Research blockchain vulnerabilities and document findings
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Contribute to internal security tooling and automation
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Participate in code reviews and security assessments
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">Requirements</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Currently pursuing or recently completed degree in Computer Science or related field
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Strong understanding of programming concepts and data structures
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Basic knowledge of blockchain technology and smart contracts
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Familiarity with Rust, Move, Anchor, or Soroban (preferred)
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
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Technical Writer
                </h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs md:text-sm">
                    Full-time
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs md:text-sm">
                    Remote
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-white/60 mb-6">
              Transform complex security findings into clear, actionable audit reports. Help educate the Web3 community through technical documentation, blog posts, and security guides.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">Responsibilities</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Write comprehensive security audit reports for client projects
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Create technical documentation for security best practices
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Develop educational content including blog posts and security guides
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Collaborate with security researchers to communicate findings effectively
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-3">Requirements</h3>
                <ul className="space-y-2 text-sm md:text-base text-white/60">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    2+ years of technical writing experience, preferably in blockchain or security
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Ability to explain complex technical concepts to diverse audiences
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Understanding of blockchain technology and smart contract security
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    Excellent written and verbal communication skills
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