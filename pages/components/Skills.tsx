import { motion } from 'framer-motion'
import React from 'react'
import SkillComponent from './Skill'
import { Skill as SkillType } from '@/typings'

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
    
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center md:justify-evenly mx-auto items-center'>
        <div className='absolute top-24 flex flex-col items-center gap-10'>
            <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl pl-[20px]'>Skills</h3>
            <h3 className='uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>
        </div>

        <div className='grid grid-cols-4 gap-5 mt-[12rem]'>
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