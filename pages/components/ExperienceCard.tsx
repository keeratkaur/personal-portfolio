import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[550px] xl:w-[700px] max-w-full max-h-[450px] snap-center bg-[#292929] p-6 md:p-8 xl:p-8 hover:opacity-100 opacity-60 mx-5 snap-center cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center' 
        src="https://media.licdn.com/dms/image/v2/C4E0BAQFCpiIEAQ6y-A/company-logo_200_200/company-logo_200_200/0/1667874263803?e=1738800000&v=beta&t=ZAf3je76m5SeBK8VR8jDM5hv2Ys8tYraILoCBXV3vgs" 
        alt="Company Logo" 
      />

      <div className='px-4 md:px-6 xl:px-8 text-center md:text-left space-y-4'>
        <h4 className='text-2xl md:text-3xl font-light'>Vice Lead Of Operations</h4>
        <p className='font-bold text-lg md:text-xl mt-1'>GDG</p>
        
        <div className='flex space-x-2 my-2 justify-center md:justify-start'>
          {/* Tech used */}
        </div>
        
        <p className='uppercase py-3 text-gray-300'>Started work... - Ended</p>

        <ul className='list-disc space-y-2 ml-5 text-sm md:text-base'>
          <li>Coordinated tech events</li>
          <li>Led operational strategies</li>
          <li>Collaborated with teams</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
