"use client";
import React from 'react';
import { motion } from 'framer-motion';
import GradientButton from "./ui/GradientButton";

export default function Testimonial() {
  const testimonials = [
    {
      initial: "A",
      name: "Alex",
      role: "Casual Gamer",
      text: "I've tried other cloud gaming services that made me wait in queue even after paying. Game9's instant access is a game-changer!",
      rating: 5,
      gradient: "from-blue-400 to-purple-500"
    },
    {
      initial: "M",
      name: "Morgan",
      role: "Competitive Player",
      text: "Zero downtime is critical for competitive play. Game9 has maintained perfect stability during my most intense matches.",
      rating: 5,
      gradient: "from-green-400 to-blue-500"
    },
    {
      initial: "J",
      name: "Jordan",
      role: "Content Creator",
      text: "The game library is impressive! I can switch between titles seamlessly which is perfect for my livestreams. Almost perfect!",
      rating: 4,
      gradient: "from-yellow-400 to-red-500"
    }
  ];

  return (
    <div id="testimonials" className="w-full py-20 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-6xl mx-auto px-4">
        <div 
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            What Gamers Are Saying
          </h2>
          <p 
            className="text-white/70 max-w-2xl mx-auto"
          >
            Early access players are already experiencing the Game9 difference.
            Here&apos;s what they have to say about our platform.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-blue-300/50 hover:-translate-y-1"
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-xl`}>
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium">{testimonial.name}</h3>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-5 h-5 ${star <= testimonial.rating ? 'text-yellow-500' : 'text-white/30'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div 
          className="mt-16 text-center"
        >
          <a 
            href="https://form.typeform.com/to/H2ifLY5y" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GradientButton className="px-8 py-4 text-lg font-bold"> 
              Join Beta Access
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </GradientButton>
          </a>
        </div>
      </div>
    </div>
  );
} 