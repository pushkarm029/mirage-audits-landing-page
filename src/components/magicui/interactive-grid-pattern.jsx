"use client";;
import { cn } from "@/lib/utils";
import React, { useState } from "react";

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState(null);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${width * horizontal} ${height * vertical}`}
      className={cn("absolute inset-0 h-full w-full", className)}
      {...props}>
      {/* Define pattern for better performance */}
      <defs>
        <pattern id="grid" width={width} height={height} patternUnits="userSpaceOnUse">
          <path 
            d={`M ${width} 0 L 0 0 0 ${height}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
            className="text-blue-400/60"
          />
        </pattern>
      </defs>
      
      {/* Background grid */}
      <rect width="100%" height="100%" fill="url(#grid)" />
      
      {/* Interactive squares */}
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        const isHovered = hoveredSquare === index;
        
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            fill={isHovered ? "rgba(59, 130, 246, 0.3)" : "transparent"}
            stroke={isHovered ? "rgba(147, 197, 253, 0.9)" : "transparent"}
            strokeWidth="2"
            className="transition-all duration-300 cursor-pointer"
            style={{
              filter: isHovered ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))" : "none"
            }}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}
