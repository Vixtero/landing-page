'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi'; // Changed to ArrowDown icon

// --- Animation Variants (remain the same) ---
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

// Re-using buttonVariants for the link styling
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 8px 25px rgba(89, 233, 215, 0.4)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },
  tap: { scale: 0.95 },
};


export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // --- Refined Wording ---
  const headline = "VIXTERO";
  const tagline = "Unlock Seamless Global Trade.";
  // Kept the description as it's strong and informative
  const description = "Navigate international trade complexities with ease. Our integrated platform empowers businesses and logistics providers to connect, collaborate, and thrive globally.";
  // Updated CTA Text
  const ctaText = "Learn More";
  // Define where the "Learn More" button should link to (e.g., the ID of the next section)
  const ctaLink = "#vision-mission"; // *** ADJUST THIS ID ***

  return (
    <motion.section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{ y: backgroundY }}
      >
        <Image /* ... */
           src="/hero3.png"
           alt="Global trade network background"
           fill
           priority
           className="object-cover object-center"
           quality={85}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#4672bc]/60 via-black/70 to-black/80"
      />

      {/* Content Container */}
      <motion.div
        className="container relative z-10 mx-auto px-4 md:px-8 text-center text-white max-w-3xl"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Headline - Reverted to pure white for max contrast */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight text-white" // Ensure text-white is explicitly set
          variants={itemVariants}
          // Removed gradient style for better contrast/simplicity
        >
          {headline}
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          className="text-2xl md:text-3xl font-medium mb-6 text-white/90"
          variants={itemVariants}
        >
          {tagline}
        </motion.h2>

        {/* Replace the existing motion.p with this */}
        <motion.h3 // Using h3 for semantic structure under h2, styled similarly to the old paragraph
          className="text-lg md:text-xl text-white/80 mb-10 font-light tracking-wide" // Adjusted styling slightly (e.g., font-light, tracking-wide)
          variants={itemVariants}
        >
          Simplify. Connect. Thrive Globally.
        </motion.h3>

        {/* Call to Action Link (Styled as Button) */}
        <motion.a // Changed to motion.a for semantic link
          href={ctaLink} // Link to the next section
          className="bg-gradient-to-r from-[#59e9d7] to-[#4672bc] text-black font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-flex items-center space-x-2 text-lg cursor-pointer" // Added cursor-pointer
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          // You might want smooth scrolling if clicking this link
          // onClick={(e) => {
          //   e.preventDefault();
          //   document.querySelector(ctaLink)?.scrollIntoView({ behavior: 'smooth' });
          // }}
        >
          <span>{ctaText}</span>
          <FiArrowDown className="w-5 h-5" /> {/* Changed icon */}
        </motion.a>
      </motion.div>
    </motion.section>
  );
}