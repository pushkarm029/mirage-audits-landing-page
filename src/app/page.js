import Hero from "@/components/sections/Hero";
import WeveSecuredSection from "@/components/sections/WeveSecuredSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import CredibilitySection from "@/components/sections/CredibilitySection";
import PricingSection from "@/components/sections/PricingSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CaseStudies from "@/components/sections/CaseStudies";
import BlogSection from "@/components/sections/BlogSection";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Metadata is now consolidated in layout.js

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <WeveSecuredSection />
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
