import HeroSectionWithNavbar from "@/components/Hero";
// import Featuresection from "@/components/Featuresection";
// import Githubsection from "@/components/Githubsection";
// import Pricing from "@/components/Pricing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonial";

export const metadata = {
  title: "Game9 - Next Generation Cloud Gaming | Instant Access, Zero Wait",
  description: "Experience the future of cloud gaming with Game9. Instant access to a vast library, zero downtime, and no waiting queues. Join the beta today!",
  metadataBase: new URL('https://getgame9.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Game9 - Next Generation Cloud Gaming | Instant Access, Zero Wait",
    description: "Experience the future of cloud gaming with Game9. Instant access, zero downtime, no queues.",
    url: 'https://getgame9.com',
    siteName: 'Game9',
    // images: [ // Optional: Add OG image URLs
    //   {
    //     url: 'https://getgame9.com/og-image.png', 
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Game9 - Next Generation Cloud Gaming | Instant Access, Zero Wait",
    description: "Experience the future of cloud gaming with Game9. Instant access, zero downtime, no queues.",
    // images: ['https://getgame9.com/twitter-image.png'], // Optional: Add Twitter image URL
  },
  // Adding JSON-LD Structured Data
  other: {
    'script[type="application/ld+json"]': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Game9",
      "url": "https://getgame9.com",
      // "logo": "https://getgame9.com/logo.png", // Uncomment and update if you have a logo URL
      "description": "Next generation cloud gaming platform offering instant access, zero downtime, and no waiting queues.",
      // "sameAs": [ // Uncomment and add social media links if available
      //   "https://twitter.com/getgame9", 
      //   "https://facebook.com/getgame9"
      // ]
    }),
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <HeroSectionWithNavbar />
      <Testimonial />
      {/* Sections removed to keep it minimal and story-focused
      <Featuresection className="pt-20"/>
      <Githubsection/>
      <Pricing/>
      <Faq/>
      */}
      <Footer/>
    </div>
  );
}
