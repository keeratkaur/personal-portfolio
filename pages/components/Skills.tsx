import { motion } from 'framer-motion'
import React from 'react'
import SkillComponent from './Skill'
import { Skill as SkillType } from '@/typings'

type Props = {
    skills: SkillType[];
}

function Skills({ skills }: Props) {
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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-4 gap-5'>
          <SkillComponent />
          <SkillComponent />
          <SkillComponent />
          <SkillComponent />
          <SkillComponent />
          <SkillComponent />
          
        </div>
        </motion.div>
  )
}

export default Skills