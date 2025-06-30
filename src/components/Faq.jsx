"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

function cn(...inputs) {
  return clsx(inputs);
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Is Seline GDPR compliant?",
      answer:
        "Yes, Seline is fully GDPR compliant. We process all data in compliance with European data protection regulations and do not collect any personally identifiable information.",
    },
    {
      question: "Is Seline a cookie-less analytics tool?",
      answer:
        "Yes, Seline operates without using cookies for tracking visitors. This makes it more privacy-friendly and reduces the compliance burden for website owners.",
    },
    {
      question: "Do I need a cookie banner or consent when using Seline?",
      answer:
        "No, since Seline does not use cookies for tracking, you typically don't need to display a cookie consent banner when using our analytics solution alone.",
    },
    {
      question: "Does Seline have a free plan?",
      answer:
        "Yes, Seline offers a free plan with basic analytics features for websites with limited traffic. Paid plans are available for sites with higher traffic volumes or those requiring advanced features.",
    },
    {
      question: "How Seline compares to Google Analytics?",
      answer:
        "Unlike Google Analytics, Seline focuses on privacy-first analytics without complex setup. We provide essential metrics without collecting personal data, making compliance easier while still delivering actionable insights.",
    },
    {
      question: "How Seline compares to Plausible, Fathom, or similar tools?",
      answer:
        "Seline offers similar privacy-focused analytics to Plausible and Fathom, but with our own unique approach to data visualization and insights. We focus on simplicity and actionable metrics for website owners.",
    },
    {
      question: "Who is behind Seline?",
      answer:
        "Seline was created by a team of privacy advocates and web analytics experts committed to providing website owners with valuable insights while respecting visitor privacy.",
    },
  ];

  return (
    <div className="w-full bg-black text-white">
      <div className="mx-auto px-4 py-12 max-w-6xl mt-32 mb-32">
        <h2
          className="text-3xl font-bold mb-6"
          style={{
            fontFamily:
              'var(--font-heading), "roobert", "Roobert Fallback", sans-serif',
          }}
        >
          Questions & answers
        </h2>
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div key={index} className={`pb-2 ${index === 0 ? "mt-8" : ""}`}>
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center w-full text-left py-2 focus:outline-none"
              >
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-blue-500 transition-transform duration-300 ease-in-out mr-2",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
                <span
                  className="text-lg font-medium"
                  style={{
                    fontFamily:
                      'var(--font-heading), "roobert", "Roobert Fallback", sans-serif',
                  }}
                >
                  {item.question}
                </span>
              </button>
              <div
                className={cn(
                  "transition-all duration-700 ease-in-out overflow-hidden",
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p
                  className="py-2 text-sm text-gray-400 transition-opacity duration-700 ease-in-out"
                  style={{
                    fontFamily:
                      'var(--font-heading), "roobert", "Roobert Fallback", sans-serif',
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
