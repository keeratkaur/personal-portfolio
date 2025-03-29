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
  if (!skill || !skill.image) {
    return null; // Or return a placeholder/loading state
  }

  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{
          duration: 1
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        src={urlFor(skill.image).url()}
        alt={`${skill.title || 'Skill'} icon`}
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
