'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // State to track if user has scrolled down enough for bg to appear
  const [isScrolled, setIsScrolled] = useState(false); // Default to false (at top)

  const headerBgOpacity = useTransform(
    scrollY,
    [0, 50],
    [0, 0.95]
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  // --- Effect to Update isScrolled based on Opacity ---
  useEffect(() => {
    // The onChange listener fires whenever the MotionValue changes
    const unsubscribe = headerBgOpacity.onChange((currentOpacity) => {
      // Set isScrolled to true if opacity is greater than a small threshold (e.g., 10%)
      setIsScrolled(currentOpacity > 0.1);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [headerBgOpacity]); // Re-run effect only if headerBgOpacity changes

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Our Products', href: '#our-products' },
    { name: 'Contact Us', href: '#contact-us' }
  ];

  // Determine text color class based on scroll state
  const textColorClass = isScrolled ? 'text-gray-700' : 'text-white';
  const hoverTextColorClass = isScrolled ? 'hover:text-[#4672bc]' : 'hover:text-white/80'; // Optional: different hover for white text

  // Determine mobile icon color based on scroll state
  const mobileIconBgClass = isScrolled ? 'bg-gray-600' : 'bg-white';

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Background Element */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-white -z-10"
        style={{
          opacity: headerBgOpacity,
          backdropFilter: headerBlur,
          WebkitBackdropFilter: headerBlur,
        }}
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div>
             <Link href="#" className="flex items-center space-x-2">
               <Image
                 src="/logo.png"
                 alt="VIXTERO Logo"
                 width={200}
                 height={100}
                 className="h-14 w-auto"
                 priority
               />
             </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.2, type: "spring", stiffness: 100 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-base font-medium ${textColorClass} ${hoverTextColorClass} transition-colors duration-200 group`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                     className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#4672bc]/5 to-[#59e9d7]/5"
                     initial={{ scale: 0, opacity: 0 }}
                     whileHover={{ scale: 1, opacity: 1 }}
                     transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                  <motion.div
                     className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${isScrolled ? 'from-[#4672bc] to-[#59e9d7]' : 'from-white/50 to-white/90'} shadow-[0_0_10px_rgba(89,233,215,0.5)]`}
                     initial={{ width: "0%" }}
                     whileHover={{ width: "100%" }}
                     transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden relative z-50 p-2 rounded-lg ${isScrolled ? 'hover:bg-gray-100/50' : 'hover:bg-white/10'} transition-colors duration-200`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ delay: 0.4 }}
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <motion.div 
                className="flex flex-col justify-between w-5 h-4"
                animate={mobileMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className={`w-full h-0.5 block ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 5, backgroundColor: '#374151' }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
                <motion.span
                  className={`w-full h-0.5 block ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.1 }}
                />
                <motion.span
                  className={`w-full h-0.5 block ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -5, backgroundColor: '#374151' }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </motion.div>
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md shadow-lg z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="pt-24 pb-6 px-4 h-full overflow-y-auto">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#4672bc] hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}