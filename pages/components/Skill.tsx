import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '@/sanity';
import type { Skill } from '@/typings';

type Props = {
    directionLeft?: boolean;
    skill: Skill;
    // src: string;  // Add a prop for the image source
    // alt: string;  // Add a prop for the image alt text
}

function Skill({ directionLeft, skill }: Props) {
  console.log('Rendering skill:', skill.title, 'with progress:', skill.progress);
  
  if (!skill || !skill.image) {
    console.log('Missing skill data:', skill);
    return null;
  }

  if (!skill) {
    return <div>About data is not available.</div>;
  }

  return (
    <div className='relative w-24 h-24 xl:w-32 xl:h-32 group perspective-1000'>
      <motion.div 
        initial={{ 
          opacity: 0,
          x: directionLeft ? -100 : 100,
        }}
        whileInView={{ 
          opacity: 1,
          x: 0,
        }}
        transition={{ 
          duration: 1,
          ease: "easeOut"
        }}
        className='relative w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]/80 
                   rounded-xl p-4 flex items-center justify-center cursor-pointer 
                   group-hover:bg-[#2a2a2a] transform transition-all duration-500 
                   shadow-lg hover:shadow-2xl border border-[#333333]/20
                   backdrop-blur-sm'
      >
        <img
          src={urlFor(skill.image).url()}
          alt={`${skill.title || 'Skill'} icon`}
          className='object-contain filter group-hover:scale-110 
                     transition-all duration-300 ease-in-out w-full h-full
                     drop-shadow-lg'
        />
        
        <div className='absolute inset-0 flex items-center justify-center opacity-0 
                        group-hover:opacity-100 transition-all duration-500 
                        bg-gradient-to-br from-[#1a1a1a]/95 to-[#2a2a2a]/95 
                        rounded-xl backdrop-blur-sm transform group-hover:scale-105'>
          <div className='text-center'>
            <p className='text-2xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-yellow-200 to-yellow-500 
                         mb-2'>{skill.title}</p>
            <p className='text-3xl font-extrabold text-white'>
              {typeof skill.progress === 'number' ? `${skill.progress}%` : 'N/A'}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Skill
