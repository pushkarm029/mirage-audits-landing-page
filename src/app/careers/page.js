export const metadata = {
  title: "Careers - Mirage Audits | Join Our Web3 Security Team",
  description: "Join the Mirage Audits team and help secure the future of Web3. We're building the next generation of blockchain security solutions.",
  keywords: "careers, jobs, Web3 security, blockchain security, smart contract auditing, remote work, crypto jobs",
  openGraph: {
    title: "Careers - Mirage Audits",
    description: "Join our mission to make Web3 safer. Build the future of blockchain security with us.",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white" style={{backgroundImage: 'url(/noise-bg.png)', backgroundSize: 'cover', backgroundRepeat: 'repeat'}}>
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-grotesk">
              Careers at <span className="text-blue-400">Mirage Audits</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-inter">
              Join our mission to make Web3 safer. We're building the next generation of blockchain security solutions.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 md:p-12 text-center">
            
            {/* Icon */}
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-white mb-4 font-space-grotesk">
              No Open Positions
            </h2>

            {/* Description */}
            <p className="text-lg text-white/70 mb-6 font-inter max-w-2xl mx-auto">
              We're currently not hiring, but we're always looking for exceptional talent to join our team. 
              If you're passionate about Web3 security and want to help shape the future of blockchain auditing, 
              we'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <p className="text-white/60 font-inter">
                Interested in future opportunities? Send us your resume at:
              </p>
              <a 
                href="mailto:careers@mirageaudits.com" 
                className="inline-block text-blue-400 hover:text-blue-300 font-jetbrains-mono text-lg transition-colors"
              >
                careers@mirageaudits.com
              </a>
            </div>

            {/* Future Roles */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 font-space-grotesk">
                Roles We Typically Hire For:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center text-white/70">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Security Auditors
                </div>
                <div className="flex items-center text-white/70">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Blockchain Developers
                </div>
                <div className="flex items-center text-white/70">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Security Researchers
                </div>
                <div className="flex items-center text-white/70">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Technical Writers
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}