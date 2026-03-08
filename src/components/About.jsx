import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';
import { Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: 95, color: "from-orange-400 to-red-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
    { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
  ];

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen w-full p-4 md:p-10 bg-base-200' id='about'>
      
      <Title title="About Me" />
      
      {/* Main Content Container */}
      <div className="flex flex-col gap-8 max-w-6xl w-full mt-8">
        
        {/* Responsive Card: Vertical on mobile (flex-col), Horizontal on large (lg:flex-row) */}
        <div className="flex flex-col lg:flex-row overflow-hidden bg-base-100 shadow-xl rounded-3xl">
          
          {/* Image Section: Full width on mobile, 1/3 on desktop */}
          <div className='w-full lg:w-1/3 h-64 lg:h-auto'>
            <img
              src={assets.modern1}
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text & Skills Section */}
          <div className="p-8 lg:w-2/3 lg:ml-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">I Build Digital Experiences</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Passionate Full-Stack Developer with a flair for creating elegant, user-centric web applications. 
              I bridge the gap between complex backend architecture and intuitive frontend design.
            </p>

            {/* Skills Mapping */}
            <div className="flex flex-col gap-6 mt-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full">
                  <span className="font-bold text-sm w-full sm:w-28 whitespace-nowrap">
                    {skill.name}
                  </span>
                  <div className="flex-grow h-2.5 bg-base-300/30 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="hidden sm:block text-xs font-mono opacity-50 w-8">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Stats Section: 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full bg-base-100 p-6 rounded-3xl shadow-md">
          
          <div className="flex flex-col items-center justify-center p-4">
            <h3 className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-orange-400'>5 +</h3>
            <p className="font-medium text-gray-500">Years of Experience</p>
          </div>
          
          {/* Hide dividers on mobile, show on desktop */}
          <div className="hidden md:block divider divider-horizontal"></div>
          
          <div className="flex flex-col items-center justify-center p-4 border-t border-b md:border-none border-base-200">
             <h3 className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-orange-400'>20 +</h3>
            <p className="flex items-center gap-2 font-medium text-gray-500">
              Happy Clients <Heart size={18} className="text-orange-500 fill-orange-500" /> 
            </p>
          </div>
          
          <div className="hidden md:block divider divider-horizontal"></div>
          
          <div className="flex flex-col items-center justify-center p-4">
            <h3 className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-orange-400'>50 +</h3>
            <p className="font-medium text-gray-500">Projects Completed</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About