import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientButton from "@/components/ui/GradientButton";

export const metadata = {
  title: "Careers - Mirage Audits | Join the Security Revolution",
  description: "Join our team building the future of Web3 security for fast-moving teams. We're hiring security engineers, researchers, and more.",
  metadataBase: new URL('https://mirageaudits.com'),
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: "Careers - Mirage Audits | Join the Security Revolution",
    description: "Join our team building the future of Web3 security for fast-moving teams. We're hiring security engineers, researchers, and more.",
    url: 'https://mirageaudits.com/careers',
    siteName: 'Mirage Audits',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Careers - Mirage Audits | Join the Security Revolution",
    description: "Join our team building the future of Web3 security for fast-moving teams. We're hiring security engineers, researchers, and more.",
  },
};

export default function CareersPage() {
  const positions = [
    "Senior Security Engineer (Solana/Sui)",
    "Web3 Security Researcher", 
    "DevOps Engineer (Multi-chain)",
    "Customer Success Manager"
  ];

  const benefits = [
    "Competitive salary + equity",
    "Remote-first culture",
    "Latest security tools & training",
    "Work with cutting-edge protocols"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Careers
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-8">
              Join the Security Revolution
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We're building the future of Web3 security for fast-moving teams. If you're passionate about protecting the next generation of decentralized applications, we want to hear from you.
            </p>
          </div>

          {/* Current Openings */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Current Openings:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {positions.map((position, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                >
                  <h4 className="text-lg font-medium text-blue-200">
                    {position}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8">
              What We Offer:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                >
                  <p className="text-white/80">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <GradientButton className="px-8 py-4 text-lg font-bold">
                  View Open Positions
                </GradientButton>
              </a>
              <a href="mailto:careers@mirageaudits.com">
                <button className="px-8 py-4 text-lg font-bold bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20">
                  Submit Resume
                </button>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}