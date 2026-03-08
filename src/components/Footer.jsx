import React from 'react'
import { motion } from "motion/react"
import { Github, Linkedin, Twitter, Instagram, Send, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-100 pt-16 pb-8 px-6 md:px-20 border-t border-base-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-black italic tracking-tighter">
              DRIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400">CODER</span>
            </h2>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Crafting high-performance digital experiences with precision and passion. Let's build something extraordinary together.
            </p>
            <div className="flex gap-3 mt-2">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-3 bg-base-200 rounded-xl hover:text-orange-500 transition-colors shadow-sm"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:justify-items-center">
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Navigation</h4>
              <ul className="flex flex-col gap-4 font-medium">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Legal</h4>
              <ul className="flex flex-col gap-4 font-medium">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Use</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400">Stay Updated</h4>
            <p className="text-gray-500 text-sm">Subscribe to get the latest tech insights and project updates.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full bg-base-200 border-none rounded-2xl py-4 pl-6 pr-14 focus:ring-2 focus:ring-orange-500 transition-all outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-gradient-to-r from-purple-600 to-orange-400 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/20 transition-all">
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-base-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Drip Coder. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> in Kenya
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer