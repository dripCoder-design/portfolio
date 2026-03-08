import React from 'react'
import { motion } from "motion/react"
import { ExternalLink, Github, Code2 } from 'lucide-react'
import Title from './Title'

const Projects = () => {
  // Dummy Data for cool websites
  const projectData = [
    {
      title: "Crypto Dashboard",
      description: "Real-time crypto tracking with interactive charts and dark mode.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop",
      link: "https://example.com",
      tags: ["React", "Tailwind", "Recharts"]
    },
    {
      title: "AI Image SaaS",
      description: "Generative AI platform for creating artistic portraits from text.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
      link: "https://example.com",
      tags: ["Next.js", "OpenAI", "Prisma"]
    },
    {
      title: "Luxury Real Estate",
      description: "A high-end property listing site with smooth Framer Motion transitions.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      link: "https://example.com",
      tags: ["React", "Framer Motion", "Google Maps"]
    }
  ];

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen w-full p-6 md:p-20 bg-base-200' id='my-work'>
      <Title title="Latest Works" />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mt-12'>
        {projectData.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-base-100 rounded-3xl overflow-hidden shadow-lg border border-base-300/50"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition-colors"
                >
                  <ExternalLink size={24} />
                </a>
                <button className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors">
                  <Github size={24} />
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <Code2 size={18} className="text-orange-500" />
              </div>
              
              <p className="text-gray-500 text-sm mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-base-200 text-base-content/70 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="h-1.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-600 to-orange-400 transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-16 btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-orange-500 rounded-full px-12"
      >
        View All Projects
      </motion.button>
    </div>
  )
}

export default Projects