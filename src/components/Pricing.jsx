"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Tab } from "../components/ui/tab";
import NumberFlow from "@number-flow/react";

export default function PricingTable() {
  const [selectedFrequency, setSelectedFrequency] = useState("monthly");

  useEffect(() => {
    document.querySelectorAll(".pricing-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        let x = ((e.clientX - left) / width) * 100 + "%";
        let y = ((e.clientY - top) / height) * 100 + "%";

        card.style.setProperty("--blurX", x);
        card.style.setProperty("--blurY", y);
      });
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-6 py-12 bg-black text-white">
      <PricingHeader
        title="Choose Your Defense Level"
        subtitle="Security that fits your budget and timeline."
        frequencies={["monthly", "yearly"]}
        selectedFrequency={selectedFrequency}
        onFrequencyChange={setSelectedFrequency}
      />

      <div className="w-full flex flex-col md:flex-row justify-center gap-6">
        <PricingCard
          title="Phantom Scan - $300/month"
          price={{ monthly: 300, yearly: 3000 }}
          description="per month"
          features={["AI-powered vulnerability detection across 50+ attack vectors", "Automated gas optimization recommendations", "Weekly security health scores", "Slack/Discord real-time alerts", "Basic compliance checklist (Solana/EVM standards)", "Community support access", "Perfect for: Solo developers & early MVPs"]}
          buttonText="Start Phantom Scan"
          buttonClass="bg-gradient-to-b from-white/10 to-black"
          selectedFrequency={selectedFrequency}
        />

        <PricingCard
          title="Mirage Pro - $1,000/month"
          price={{ monthly: 1000, yearly: 10000 }}
          description="per month - Most Popular"
          features={["Everything in Phantom Scan", "Human expert validation by certified auditors", "Traditional audit report (industry standard)", "Issue resolution guidance & best practices", "Fix verification & approval process", "Direct expert chat support (48hr response)", "Quarterly security strategy sessions", "Perfect for: Pre-launch teams seeking credibility"]}
          buttonText="Choose Mirage Pro"
          buttonClass="bg-blue-600 hover:bg-blue-700"
          selectedFrequency={selectedFrequency}
          isPopular={true}
        />

        <PricingCard
          title="Mirage Max - $2,500/month"
          price={{ monthly: 2500, yearly: 25000 }}
          description="per month"
          features={["Everything in Mirage Pro", "Complete dual-defense audit process", "Post-audit implementation support", "Secondary re-review after fixes (our signature process)", "Emergency incident response (24/7)", "Final certification for investors/exchanges", "Dedicated security consultant", "Custom penetration testing", "Bug bounty program setup & management", "Perfect for: Production protocols handling real funds"]}
          buttonText="Get Mirage Max"
          buttonClass="bg-gradient-to-b from-white/10 to-black"
          selectedFrequency={selectedFrequency}
        />
      </div>
    </div>
  );
}

function PricingCard({ title, price, description, features, buttonText, buttonClass, selectedFrequency, discount, isPopular }) {
  const isFirstCard = title === "Phantom Scan - $300/month";

  return (
    <div className="pricing-card flex flex-col h-full p-6 rounded-lg bg-zinc-900 bg-opacity-70 backdrop-blur-lg relative overflow-hidden mx-3">
      <div className="glow-effect"></div>
      
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}

      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <hr className="border-gray-600 border-1 w-full mb-4" />

      {/* Price section */}
      <div className="mb-6 flex flex-col items-start w-full pl-4">  
        <div className="relative h-12 flex items-center gap-2">
          <NumberFlow
            format={{
              style: "currency",
              currency: "USD",
              trailingZeroDisplay: "stripIfInteger",
            }}
            value={price[selectedFrequency]}
            className="text-3xl font-bold"
          />
          {discount && (
            <span className="text-lg text-zinc-500 line-through">
              ${discount[selectedFrequency]}
            </span>
          )}
        </div>
        <p className="text-zinc-400">{description}</p>
      </div>

      {/* Feature list */}
      <div className="space-y-4 flex-grow pl-4"> 
        {features.map((feature, index) => (
          <Feature key={index} text={feature} index={index} />
        ))}
      </div>

      <button className={`mt-auto w-full py-2 rounded-xl ${buttonClass} text-white`}>
        {buttonText}
      </button>
    </div>
  );
}


function Feature({ text, index }) {
  return (
    <div className="flex items-start">
      <div className="h-4 w-4 flex items-center justify-center bg-gray-300 rounded-full mr-2">
        <Check className="h-3 w-3 text-black" />
      </div>
      <span className={`text-sm ${index < 3 ? "text-white font-bold" : "text-gray-400"}`}>{text}</span>
    </div>
  );
}

function PricingHeader({ title, subtitle, frequencies, selectedFrequency, onFrequencyChange }) {
  return (
    <div className="w-full text-center space-y-7">
      <div className="space-y-4">
        <h1 className="text-4xl font-medium md:text-5xl">{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="mx-auto flex w-fit rounded-full bg-gray-300 p-1 dark:bg-[#222]">
        {frequencies.map((freq) => (
          <Tab
            key={freq}
            text={freq}
            selected={selectedFrequency === freq}
            setSelected={onFrequencyChange}
            discount={freq === "yearly"}
          />
        ))}
      </div>
    </div>
  );
}