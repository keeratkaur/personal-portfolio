import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}


function Experience({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}

    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center md:justify-evenly mx-auto items-center'>
        <h3
        className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'
        >Experience</h3>
        
        <div className='relative z-10 w-full flex space-x-8 overflow-x-auto p-10 snap-x snap-mandatory mt-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>

            {/* Experience */}
            <ExperienceCard/>
            {/* Experience */}
            <ExperienceCard/>

            {/* Experience */}
            <ExperienceCard/>

           
        </div>
        </motion.div>
  )
}

export default Experience