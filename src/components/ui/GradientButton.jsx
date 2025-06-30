"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const GradientButton = ({ children, className = '' }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`relative z-10 overflow-hidden rounded-xl 
                 bg-gradient-to-r from-blue-600 to-purple-600 
                 hover:from-blue-500 hover:to-purple-500 
                 text-white shadow-lg hover:shadow-xl 
                 transition-all duration-300 
                 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute -z-10 flex items-center justify-center"
        style={{ 
            width: '200px', 
            height: '150px', 
            background: `radial-gradient(circle at center, rgba(147, 197, 253, 0.5) 0%, rgba(96, 165, 250, 0.3) 30%, transparent 70%)`
        }}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />
        
      <span className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </span>
    </motion.button>
  );
};

export default GradientButton;
