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

  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        className="rounded-full border border-gray-500 object-contain bg-white dark:bg-[#292929] p-1.5 sm:p-2 md:p-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
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
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white dark:group-hover:bg-[#292929] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-base sm:text-lg md:text-xl xl:text-2xl font-bold text-black dark:text-white'>
            {typeof skill.progress === 'number' ? `${skill.progress}%` : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
