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
        title="Choose Your Plan"
        subtitle="Flexible pricing for everyone."
        frequencies={["monthly", "yearly"]}
        selectedFrequency={selectedFrequency}
        onFrequencyChange={setSelectedFrequency}
      />

      <div className="w-full flex flex-col md:flex-row justify-center gap-6">
        <PricingCard
          title="On The Go"
          price={{ monthly: 2, yearly: 20 }}
          description="Free for all users"
          features={["3 Projects", "Record & Export", "1080p, High quality, 30 FPS", "Up to 5 mins recordings", "10 MB video/audio clips", "500 MB storage"]}
          buttonText="Join Waitlist"
          buttonClass="bg-gradient-to-b from-white/10 to-black"
          selectedFrequency={selectedFrequency}
        />

        <PricingCard
          title="Gold"
          price={{ monthly: 40, yearly: 400 }}
          description="per month/user"
          discount={{ monthly: 65, yearly: 500 }}
          features={["Unlimited Projects", "Record & Export", "4K, Perfect quality, 60 FPS", "Unlimited recordings", "500 MB video/audio clips", "50 GB storage", "AI Voices (120 mins per month)", "Image/Video Generation, Chat, Notes", "Remove background noise", "Transcribe Audio/Video", "Premium backgrounds and videos"]}
          buttonText="Become an Early Supporter"
          buttonClass="bg-blue-600 hover:bg-blue-700"
          selectedFrequency={selectedFrequency}
        />

        <PricingCard
          title="Platinum"
          price={{ monthly: 100, yearly: 1000 }}
          description="per month/user"
          discount={{ monthly: 140, yearly: 1200 }}
          features={["Unlimited Projects", "Record & Export", "4K, Perfect quality, 60 FPS", "Unlimited recordings", "1 GB video/audio clips", "100 GB storage", "AI Voices (240 mins per month)", "Image/Video Generation, Chat, Notes", "Remove background noise", "Transcribe Audio/Video", "Premium backgrounds and videos"]}
          buttonText="Become an Early Supporter"
          buttonClass="bg-gradient-to-b from-white/10 to-black"
          selectedFrequency={selectedFrequency}
        />
      </div>
    </div>
  );
}

function PricingCard({ title, price, description, features, buttonText, buttonClass, selectedFrequency }) {
  const isFirstCard = title === "On The Go";

  return (
    <div className="pricing-card flex flex-col h-full p-6 rounded-lg bg-zinc-900 bg-opacity-70 backdrop-blur-lg relative overflow-hidden mx-3">
      <div className="glow-effect"></div>

      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <hr className="border-gray-600 border-1 w-full mb-4" />

      {/* Adjust price alignment for the first card */}
      <div className={`mb-6 flex flex-col items-start w-full ${isFirstCard ? "pl-16" : "pl-8"}`}>  
        <div className="relative h-12">
          <NumberFlow
            format={{
              style: "currency",
              currency: "USD",
              trailingZeroDisplay: "stripIfInteger",
            }}
            value={price[selectedFrequency]}
            className="text-3xl font-bold"
          />
        </div>
        <p className="text-zinc-400">{description}</p>
      </div>

      {/* Adjust feature list alignment for the first card */}
      <div className={`space-y-4 flex-grow ${isFirstCard ? "pl-2" : "pl-4"}`}> 
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