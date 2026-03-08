import React, { useState } from 'react'
import { motion } from "motion/react"

const Title = ({ title, bgImage }) => {
  const [isGlitched, setIsGlitched] = useState(false);
  const defaultTechBg = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className='relative flex flex-col items-center justify-center w-full py-16 overflow-hidden'>
      
      {/* Background Layer */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
      >
        <img src={bgImage || defaultTechBg} alt="" className="w-full h-full object-cover grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-base-200 via-transparent to-base-200"></div>
      </motion.div>

      {/* Text Layer */}
      <div className="relative z-10 text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => {
            setIsGlitched(true);
            // Reset glitch so it can be re-triggered if once: false, 
            // or just leave it for a one-time entrance.
            setTimeout(() => setIsGlitched(false), 500);
          }}
          transition={{ duration: 0.5 }} 
          viewport={{ once: true, margin: "-100px" }}
          className={`text-4xl sm:text-7xl font-black tracking-tighter uppercase italic transition-colors
            ${isGlitched ? 'animate-glitch text-white' : 'text-base-content'}
          `}
        >
          {title}
        </motion.h2>
        
        {/* Animated Underline System */}
        <div className="relative flex justify-center mt-4">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '140px' }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-600 via-orange-500 to-orange-400 rounded-full"
          />
          {/* Scanning "Laser" Effect */}
          <motion.div 
            animate={{ left: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-4 h-1 bg-white blur-sm opacity-50"
          />
        </div>
      </div>
    </div>
  )
}

export default Title