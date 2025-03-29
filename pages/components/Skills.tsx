import { motion } from 'framer-motion'
import React from 'react'
import SkillComponent from './Skill'
import type { Skill as SkillType } from '@/typings'

type Props = {
    skills: SkillType[];
}

function Skills({ skills }: Props) {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='min-h-screen relative flex flex-col items-center justify-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 mx-auto'
    >
      <div className='flex flex-col items-center'>
        <h3 className='uppercase text-4xl tracking-[15px] text-gray-400 mb-4'>
          S K I L L S
        </h3>
        
        <h3 className='text-sm uppercase text-gray-500 pb-10'>
          HOVER OVER A SKILL FOR CURRENT PROFICIENCY
        </h3>

        <div className='grid grid-cols-4 gap-6'>
          {skills?.map((skill) => (
            <SkillComponent key={skill._id} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills