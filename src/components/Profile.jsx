import React from 'react'
import { motion } from "motion/react"
import { assets } from '../assets/assets'
import { SendHorizontal, Download } from 'lucide-react'

export const Profile = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-base-200 overflow-hidden px-6 " id='hero'>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/10 blur-[100px] rounded-full"></div>

      <div className="flex flex-col items-center text-center max-w-3xl z-10">
        
        {/* Animated Avatar with Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative group mb-8"
        >
          {/* Animated Glow Ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-400 rounded-full blur-md opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse"></div>
          
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-base-100 overflow-hidden shadow-2xl">
            <img src={assets.profile} alt="Drip Coder" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Text Section with Staggered Fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className='text-4xl md:text-6xl font-black tracking-tight leading-tight'>
            Hi, I'm{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-orange-400'>
              Drip Coder
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-2 text-base-content/80">
            Fullstack Developer based in <span className="text-orange-500">Kenya</span>.
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className='mt-6 text-gray-500 text-lg max-w-xl leading-relaxed'
        >
          I bridge the gap between complex backend logic and pixel-perfect frontend experiences. 
          Turning caffeine into scalable web applications since 2019.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <button className="group btn btn-lg rounded-full px-10 bg-gradient-to-r from-purple-600 to-orange-500 border-none text-white hover:scale-105 transition-transform">
            Connect with Me 
            <SendHorizontal className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <button className="btn btn-lg btn-outline rounded-full px-10 hover:bg-base-content hover:text-base-100 transition-all">
            My Resume <Download size={20} />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 opacity-30"
        >
          <div className="w-6 h-10 border-2 border-base-content rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-base-content rounded-full"></div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}