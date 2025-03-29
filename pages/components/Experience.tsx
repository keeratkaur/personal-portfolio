import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import type { Experience } from '@/typings'

type Props = {
    experiences: Experience[];
}

function Experience({ experiences }: Props) {
  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.isCurrentlyWorkingHere ? new Date() : new Date(a.dateEnded);
    const dateB = b.isCurrentlyWorkingHere ? new Date() : new Date(b.dateEnded);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='min-h-screen relative flex flex-col items-center justify-center max-w-6xl mx-auto px-4 md:px-8'
    >
      <div className='absolute top-16 md:top-24 w-full text-center'>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl font-semibold'>
          Experience
        </h3>
        <h4 className='text-xs md:text-sm uppercase text-gray-500/60 tracking-[3px] mt-2'>
          Swipe or scroll to explore my journey
        </h4>
      </div>

      <div className='relative w-full mt-24 md:mt-32 flex space-x-5 overflow-x-scroll p-4 snap-x snap-mandatory 
                      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
                      before:absolute before:left-0 before:top-0 before:bottom-0 before:w-12 before:bg-gradient-to-r before:from-[#1a1a1a] before:to-transparent before:z-10
                      after:absolute after:right-0 after:top-0 after:bottom-0 after:w-12 after:bg-gradient-to-l after:from-[#1a1a1a] after:to-transparent after:z-10'>
        {sortedExperiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>

      {/* Timeline indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-1.5'>
        {sortedExperiences.map((_, idx) => (
          <div 
            key={idx} 
            className='w-1.5 h-1.5 rounded-full bg-gray-500 opacity-50 transition-all duration-300
                     hover:bg-[#F7AB0A] hover:opacity-100'
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Experience