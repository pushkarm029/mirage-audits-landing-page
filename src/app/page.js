import Hero from "@/components/Hero";
import CredibilitySection from "@/components/CredibilitySection";
import PricingSection from "@/components/PricingSection";
import Featuresection from "@/components/Featuresection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/NewFooter";

export const metadata = {
  title: "MirageAudits - Professional Security Audits for Early-Stage Builders | Rust Ecosystem Specialists",
  description: "Don't blow your grant money on $50K audits. Professional security for Rust ecosystems at $1K/week. Specialists in Solana, Cardano, Fuel, Sui, and Starknet.",
  metadataBase: new URL('https://mirageaudits.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MirageAudits - Professional Security Audits for Early-Stage Builders",
    description: "Don't blow your grant money on $50K audits. Professional security for Rust ecosystems at $1K/week. Specialists in Solana, Cardano, Fuel, Sui, and Starknet.",
    url: 'https://mirageaudits.com',
    siteName: 'MirageAudits',
    // images: [ // Optional: Add OG image URLs
    //   {
    //     url: 'https://mirageaudits.com/og-image.png', 
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MirageAudits - Professional Security Audits for Early-Stage Builders",
    description: "Don't blow your grant money on $50K audits. Professional security for Rust ecosystems at $1K/week. Specialists in Solana, Cardano, Fuel, Sui, and Starknet.",
    // images: ['https://mirageaudits.com/twitter-image.png'], // Optional: Add Twitter image URL
  },
  // Adding JSON-LD Structured Data
  other: {
    'script[type="application/ld+json"]': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MirageAudits",
      "url": "https://mirageaudits.com",
      // "logo": "https://mirageaudits.com/logo.png", // Uncomment and update if you have a logo URL
      "description": "Rust ecosystem security specialists. Professional security audits for Solana, Cardano, Fuel, Sui, and Starknet at $1K/week.",
      // "sameAs": [ // Uncomment and add social media links if available
      //   "https://twitter.com/mirageaudits", 
      //   "https://linkedin.com/company/mirageaudits"
      // ]
    }),
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Hero />
      <CredibilitySection />
      <PricingSection />
      <Featuresection />
      {/* <SupportedChains /> */}
      {/* <Contact/> */}
      {/* <PartnersSection /> */}
      {/* <Testimonial /> */}
      <Footer/>
    </div>
  );
}
