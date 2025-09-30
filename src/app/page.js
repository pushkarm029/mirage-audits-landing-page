import Hero from "@/components/Hero";
import TrustedBySection from "@/components/TrustedBySection";
import CredibilitySection from "@/components/CredibilitySection";
import PricingSection from "@/components/PricingSection";
import Featuresection from "@/components/Featuresection";
import CaseStudies from "@/components/CaseStudies";
import BlogSection from "@/components/BlogSection";
import TwitterSection from "@/components/TwitterSection";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/NewFooter";

// Metadata is now consolidated in layout.js

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        {/* <TrustedBySection /> */}
        {/* <CredibilitySection />
        <PricingSection />
        <Featuresection /> */}
        {/* <CaseStudies /> */}
        <BlogSection />
        {/* <TwitterSection /> */}
        {/* <SupportedChains /> */}
        <Contact />
        {/* <PartnersSection /> */}
        {/* <Testimonial /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
