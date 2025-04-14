'use client';

import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FiBriefcase, FiGlobe, FiTarget, FiLifeBuoy } from 'react-icons/fi';
import SpotlightCard from './SpotlightCard';

// Define spotlightColors with the correct template literal type
const spotlightColors: [
  `rgba(${number}, ${number}, ${number}, ${number})`,
  `rgba(${number}, ${number}, ${number}, ${number})`,
  `rgba(${number}, ${number}, ${number}, ${number})`
] = [
  'rgba(89, 233, 215, 0.5)' as `rgba(${number}, ${number}, ${number}, ${number})`,
  'rgba(70, 114, 188, 0.5)' as `rgba(${number}, ${number}, ${number}, ${number})`,
  'rgba(105, 233, 189, 0.5)' as `rgba(${number}, ${number}, ${number}, ${number})`,
];

// Stats Data
const statsData = [
  { id: 1, value: 30, suffix: '+', label: 'Trusted Industry Leaders', icon: <FiBriefcase /> },
  { id: 2, value: 7000, suffix: '+', label: 'Potential Network Reach', icon: <FiGlobe /> },
  { id: 3, value: 95, suffix: '%', label: 'AI Document Accuracy', icon: <FiTarget /> },
  { id: 4, value: 24, suffix: '/7', label: 'Mission-Critical Support', icon: <FiLifeBuoy /> },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 12 }
  },
};

export default function AboutUs() {
  return (
    <motion.section
      id="about-us"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#59e9d7]/10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Using a container wrapper similar to VisionMission */}
      <div className="container-fluid px-6 relative z-10">
        {/* Logo */}
        <motion.div className="mb-6 flex justify-center" variants={itemVariants}>
          <Image
            src="/Logo - Vix.png"
            alt="VIXTERO Logo"
            width={180}
            height={50}
            className="h-auto"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center"
          variants={itemVariants}
        >
          About VIXTERO
        </motion.h2>

        {/* Paragraph Card */}
        <motion.div className="mb-20 md:mb-24" variants={itemVariants}>
          <SpotlightCard
            spotlightColor={'rgba(70, 114, 188, 0.35)' as `rgba(${number}, ${number}, ${number}, ${number})`}
            className="max-w-3xl mx-auto p-8 rounded-lg border border-white/50 shadow-lg backdrop-blur-sm bg-gradient-to-br from-white/80 via-white/75 to-white/70"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
              At <strong>VIXTERO (PT Vixtero Pintar Nusantara)</strong>, we bridge the complexities of global commerce.
              Our intelligent platform, leveraging <strong>advanced AI</strong> with <strong>95%</strong> document
              processing accuracy, connects key players across the supply chain. We empower industry leaders to navigate
              international trade with <strong>unprecedented efficiency</strong> and <strong>confidence</strong>.
            </p>
          </SpotlightCard>
        </motion.div>

        {/* Wrapper Grid for Stat Cards */}
        <motion.div className="max-w-[1600px] mx-auto" variants={containerVariants}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard
                  spotlightColor={spotlightColors[index % spotlightColors.length]}
                  className="h-full p-8 rounded-xl border border-white/50 shadow-lg backdrop-blur-sm bg-gradient-to-br from-white/80 via-white/75 to-white/70"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-3 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#4672bc]/20 to-[#59e9d7]/20 rounded-full blur-xl"></div>
                      <div className="relative z-10 transform scale-125">{stat.icon}</div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">
                      <CountUp 
                        start={0} 
                        end={stat.value} 
                        duration={2.5} 
                        separator="," 
                        suffix={stat.suffix} 
                        enableScrollSpy 
                        scrollSpyOnce
                      />
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
