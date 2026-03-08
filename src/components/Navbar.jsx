import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, User, Briefcase, Mail, Info, SendHorizontal, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { assets } from '../assets/assets';

export const Navbar = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. Setup Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', icon: <Home size={18} /> },
    { name: 'Services', href: '#services', icon: <Briefcase size={18} /> },
    { name: 'Work', href: '#my-work', icon: <User size={18} /> },
    { name: 'About', href: '#about', icon: <Info size={18} /> },
    { name: 'Contact', href: '#contact-us', icon: <Mail size={18} /> },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center p-4 ${
        scrolled ? 'md:pt-4' : 'md:pt-6'
      }`}
    >
      {/* Main Glass Container */}
      <div className={`relative flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full transition-all duration-300 border ${
        scrolled 
          ? 'bg-base-100/70 backdrop-blur-xl border-white/10 shadow-2xl' 
          : 'bg-transparent border-transparent'
      }`}>
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-gradient-to-tr from-purple-600 to-orange-400 rounded-lg group-hover:rotate-12 transition-transform">
            <img src={isDark ? assets.logo_green : assets.logo_dark} className="w-5 h-5" alt="Logo" />
          </div>
          <span className="text-xl font-black tracking-tighter hidden sm:block">
            DRIP <span className="text-orange-500">AI</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              className="px-4 py-2 flex items-center gap-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-orange-500 transition-all"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-base-200 rounded-full transition-colors"
          >
            {isDark ? <Sun className="text-warning" size={20} /> : <Moon size={20} />}
          </button>

          <button className="hidden lg:flex items-center gap-2 btn btn-md rounded-full px-6 border-none bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:scale-105 transition-transform shadow-lg shadow-orange-500/20">
            Connect <SendHorizontal size={18} />
          </button>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* 2. Scroll Progress Bar (Inside the Navbar Container) */}
        <motion.div
          className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-purple-600 to-orange-400 origin-left rounded-full"
          style={{ scaleX }}
        />
      </div>

      {/* Mobile Menu (unchanged from previous step) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-base-100 p-6 rounded-[2rem] shadow-2xl border border-base-300 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 p-4 hover:bg-base-200 rounded-2xl font-bold transition-colors"
              >
                <div className="p-2 bg-orange-500/10 text-orange-500 rounded-lg">{link.icon}</div>
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};