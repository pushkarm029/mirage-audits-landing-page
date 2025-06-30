"use client";  // ✅ Add this at the top

import { useState } from "react";

export default function Button({ children, className = "", ...props }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false); // Track if button is hovered

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <button
      className={`relative overflow-hidden bg-gradient-to-r from-gray-200 to-gray-400 text-black
                  font-bold text-sm tracking-wide shadow-md transition-all 
                  px-10 py-2 rounded-full ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}  // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {/* Glow Effect */}
      {isHovered && (
        <>
          {/* Orange outer glow */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 transition-all duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 100, 0, 0.8), transparent 60%)`,
              filter: "blur(8px)",
            }}
          ></span>

          {/* Yellow secondary glow */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-full opacity-40 transition-all duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 180, 0, 0.6), transparent 50%)`,
              filter: "blur(12px)",
            }}
          ></span>

          {/* Bright yellow glow */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-full opacity-30 transition-all duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 0, 0.8), transparent 40%)`,
              filter: "blur(16px)",
            }}
          ></span>

          {/* White inner glow */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-full opacity-20 transition-all duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 1), transparent 30%)`,
              filter: "blur(20px)",
            }}
          ></span>
        </>
      )}
    </button>
  );
}