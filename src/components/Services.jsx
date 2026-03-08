import React from 'react'
import Title from './Title'
import Services_Data from '../assets/services_data'
import { ArrowRight } from 'lucide-react'

const Services = () => {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen w-full p-6 md:p-20 bg-base-200' id='services'>
      <Title title="My Services" />

      {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-10'>
        {Services_Data.map((service, index) => (
          <div 
            key={index} 
            className='group relative flex flex-col p-8 bg-base-100 rounded-3xl shadow-sm border border-transparent hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer'
          >
            {/* Service Number / Badge */}
            <div className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400 opacity-80 group-hover:opacity-100 transition-opacity'>
              {service.s_no}
            </div>

            {/* Service Title */}
            <h3 className='text-2xl font-bold mt-4 mb-3 text-base-content  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-orange-500 to-orange-400'>
              {service.s_name}
            </h3>

            {/* Service Description */}
            <p className='text-gray-500 leading-relaxed flex-grow'>
              {service.s_desc} 
              {/* Assuming your data has an s_desc. If not, replace with a placeholder or service.s_name */}
            </p>

            {/* Read More / Action Link */}
            <div className='flex items-center gap-2 mt-6 font-semibold text-orange-500 group-hover:gap-4 transition-all'>
              <span>Read More</span>
              <ArrowRight size={20} />
            </div>

            {/* Subtle Gradient Background on Hover */}
            <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services