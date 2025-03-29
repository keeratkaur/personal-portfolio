import { motion } from 'framer-motion'
import React from 'react'
import SkillComponent from './Skill'
import type { Skill as SkillType } from '@/typings'

type Props = {
    skills: SkillType[];
}

function Skills({ skills }: Props) {
  console.log('Skills received in Skills component:', skills);
  
  if (!skills || skills.length === 0) {
    console.log('No skills data available');
    return null;
  }

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
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-4 sm:px-8 md:px-10 justify-center md:justify-evenly mx-auto items-center'
    >
      <div className='absolute top-16 sm:top-20 md:top-24 w-full flex flex-col items-center'>
        <h3 className='uppercase tracking-[10px] sm:tracking-[15px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl pl-[10px] sm:pl-[15px] md:pl-[20px] mb-2'>
          Skills
        </h3>
        <div className='w-full h-[1px] bg-gray-500/20 my-4 sm:my-6 md:my-8'></div>
        <h3 className='uppercase tracking-[2px] sm:tracking-[3px] text-gray-500/40 text-xs sm:text-sm font-light px-4 text-center'>
          Hover over a skill for current proficiency
        </h3>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-5 mt-[8rem] sm:mt-[12rem] md:mt-[16rem]'>
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <SkillComponent key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillComponent key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills