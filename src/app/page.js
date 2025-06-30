import HeroSectionWithNavbar from "@/components/Hero";
import Featuresection from "@/components/Featuresection";
import PartnersSection from "@/components/Githubsection";
import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonial";

export const metadata = {
  title: "Mirage Audits - Ship Secure. Ship Fast. | Web3 Security for Small Projects",
  description: "Professional security for Solana, Sui, Cardano & L2 projects—without the enterprise price tag. Get expert monitoring and rapid reviews for $500-2000/month instead of $50K+ one-time audits.",
  metadataBase: new URL('https://mirageaudits.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mirage Audits - Ship Secure. Ship Fast. | Web3 Security for Small Projects",
    description: "Professional security for Solana, Sui, Cardano & L2 projects—without the enterprise price tag. Stop choosing between security and speed.",
    url: 'https://mirageaudits.com',
    siteName: 'Mirage Audits',
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
    title: "Mirage Audits - Ship Secure. Ship Fast. | Web3 Security for Small Projects",
    description: "Professional security for Solana, Sui, Cardano & L2 projects—without the enterprise price tag. Stop choosing between security and speed.",
    // images: ['https://mirageaudits.com/twitter-image.png'], // Optional: Add Twitter image URL
  },
  // Adding JSON-LD Structured Data
  other: {
    'script[type="application/ld+json"]': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Mirage Audits",
      "url": "https://mirageaudits.com",
      // "logo": "https://mirageaudits.com/logo.png", // Uncomment and update if you have a logo URL
      "description": "Web3 security firm specializing in Solana, Sui, Cardano & L2 projects. Professional security audits and monitoring without enterprise pricing.",
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
      <HeroSectionWithNavbar />
      <Featuresection />
      <Pricing/>
      <PartnersSection />
      <Testimonial />
      <Footer/>
    </div>
  );
}
