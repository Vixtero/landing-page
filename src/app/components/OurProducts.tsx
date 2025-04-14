'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

export default function OurProducts() {
  const products = [
    {
      name: 'VIXBORDER',
      description: 'Customs integration platform',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-[#59e9d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      name: 'VIXFREIGHT',
      description: 'Integrated logistics solution',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-[#59e9d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
    {
      name: 'VIXTRADE',
      description: 'Global-domestic trade application',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-[#59e9d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      name: 'VIXCASH',
      description: 'Secure transaction and payment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-[#59e9d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: 'VIXBANK',
      description: 'Specialized core banking system for trade',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-[#59e9d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      name: 'VIXPROTEKSI',
      description: 'Trade activity insurance protection',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-[#59e9d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      name: 'VIXADVIS',
      description: 'Specialized trade consultancy',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-[#59e9d7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  // Variasi SpotlightCard colors
  const spotlightColors = [
    "rgba(89, 233, 215, 0.5)" as `rgba(${number}, ${number}, ${number}, ${number})`,
    "rgba(70, 114, 188, 0.5)" as `rgba(${number}, ${number}, ${number}, ${number})`,
    "rgba(105, 233, 189, 0.5)" as `rgba(${number}, ${number}, ${number}, ${number})`,
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    }
  };

  return (
    <section id="our-products" className="py-20 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4672bc]/10 via-[#59e9d7]/5 to-[#4672bc]/10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtNnYtNmg2djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container-fluid px-2 md:px-4 relative z-10">
        <motion.div 
          className="text-center mb-10" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of integrated solutions to enhance your trade ecosystem
          </p>
        </motion.div>

        <motion.div 
          className="w-full max-w-7xl mx-auto px-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Baris pertama: 4 card */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {products.slice(0, 4).map((product, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="px-0"
              >
                <SpotlightCard
                  className="h-full px-6 py-8 transform transition backdrop-blur-sm bg-gradient-to-br from-white/40 via-white/25 to-white/15 border-[1.5px] border-t-white/50 border-l-white/50 border-r-white/20 border-b-white/20 shadow-xl shadow-[#4672bc]/15 hover:shadow-[#59e9d7]/20"
                  spotlightColor={spotlightColors[index % spotlightColors.length]}
                >
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="mb-3 transition-transform duration-300 transform hover:scale-110">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Baris kedua: 3 card rata tengah */}
          <motion.div className="flex justify-center mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full lg:w-[85%]">
              {products.slice(4).map((product, index) => (
                <motion.div 
                  key={index + 4}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="px-0"
                >
                  <SpotlightCard
                    className="h-full px-6 py-8 transform transition backdrop-blur-sm bg-gradient-to-br from-white/40 via-white/25 to-white/15 border-[1.5px] border-t-white/50 border-l-white/50 border-r-white/20 border-b-white/20 shadow-xl shadow-[#4672bc]/15 hover:shadow-[#59e9d7]/20"
                    spotlightColor={spotlightColors[(index + 4) % spotlightColors.length]}
                  >
                    <div className="flex flex-col items-center text-center h-full justify-center">
                      <div className="mb-3 transition-transform duration-300 transform hover:scale-110">
                        {product.icon}
                      </div>
                      <h3 className={`text-xl font-bold text-gray-800 mb-2 ${product.name === 'VIXPROTEKSI' ? 'text-[1.1em]' : ''}`}>
                        {product.name}
                      </h3>
                      <p className="text-gray-600">
                        {product.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 