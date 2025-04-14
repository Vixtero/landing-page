'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      className="bg-black text-white py-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 md:px-8 py-8">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          variants={textVariants}
        >
          <motion.p 
            className="text-white/80 text-sm"
            whileHover={{ scale: 1.05, color: "#59e9d7" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            © 2025 VIXTERO
          </motion.p>
          
          
        </motion.div>
      </div>

      {/* Animated particles at the bottom */}
      {/* <div className="relative h-10 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              bottom: 0,
              left: `${(i / 15) * 100}%`,
              background: i % 2 === 0 ? "#59e9d7" : "#4672bc",
            } as any}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random()
            }}
          />
        ))}
      </div> */}
    </motion.footer>
  );
} 