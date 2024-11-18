import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
    // src: string;  // Add a prop for the image source
    // alt: string;  // Add a prop for the image alt text
}

function Skill({ directionLeft }: Props) {
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
        src='https://thumbs.dreamstime.com/b/java-set-computer-software-specifications-developed-james-gosling-sun-microsystems-which-was-later-acquired-204759337.jpg'
        
      />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-black opacity-100'>100%</p>
      </div>
      </div>
      
    </div>
  )
}

export default Skill
