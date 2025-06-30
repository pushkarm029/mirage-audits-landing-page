"use client";

import { useEffect, useState } from "react";
import { Particles } from "@/components/magicui/particles";
import Featuresection from "@/components/Featuresection";
import PartnersSection from "@/components/Githubsection";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import { SupportedChains } from "@/components/SupportedChains";

export default function MainContent() {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor("#ffffff");
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Global Particles Background */}
      <Particles
        className="fixed inset-0 z-0"
        quantity={80}
        ease={80}
        color={color}
        refresh
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Featuresection />
        <SupportedChains />
        <Pricing/>
        <PartnersSection />
        <Testimonial />
      </div>
    </div>
  );
}