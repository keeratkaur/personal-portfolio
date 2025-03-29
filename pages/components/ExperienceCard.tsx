import { urlFor } from '@/sanity'
import { Experience } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {experience:Experience}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-xl items-center flex-shrink-0 w-[280px] md:w-[320px] xl:w-[380px] 
                        snap-center bg-white/5 dark:bg-[#1a1a1a]/60 p-4 md:p-6 cursor-pointer 
                        backdrop-blur-sm border border-white/10 shadow-lg
                        hover:bg-white/10 dark:hover:bg-[#1a1a1a]/80 
                        transition-all duration-300 ease-out group'>
      <div className='relative w-24 h-24 md:w-28 md:h-28 mb-4'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='absolute inset-0 bg-[#F7AB0A]/20 rounded-lg transform -rotate-6 scale-105 group-hover:rotate-0 transition-transform duration-300'
        />
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='relative w-full h-full object-contain p-3 rounded-lg bg-white/5 dark:bg-[#292929]/80 
                     backdrop-blur-sm border border-white/10 shadow-md
                     group-hover:scale-105 transition-transform duration-300' 
          src={experience?.companyImage ? urlFor(experience.companyImage).url() : 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'} 
          alt={`${experience?.company} logo`}
        />
      </div>

      <div className='space-y-3 w-full'>
        <div className='text-center'>
          <h4 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-[#F7AB0A] to-[#F7CD1E] 
                         text-transparent bg-clip-text transform group-hover:scale-105 transition-transform duration-300'>
            {experience?.jobTitle}
          </h4>
          <p className='text-lg font-medium text-gray-300 mt-1'>{experience?.company}</p>
        </div>

        <div className='flex flex-wrap gap-1.5 justify-center'>
          {experience?.technologies?.map((technology) => (
            technology?.image ? (
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                key={technology._id}
                src={urlFor(technology.image).url()}
                alt={technology.title || 'Technology'}
                className='h-6 w-6 rounded-md bg-white/10 dark:bg-[#292929]/80 p-1
                         backdrop-blur-sm border border-white/10 shadow-md
                         hover:scale-125 transition-transform duration-300'
              />
            ) : null
          ))}
        </div>

        <p className='text-xs text-center font-medium text-gray-400 tracking-wider'>
          {experience?.dateStarted ? new Date(experience.dateStarted).toLocaleDateString('en-US', { 
            month: 'short',
            year: 'numeric'
          }) : ''} 
          {' — '} 
          {experience?.isCurrentlyWorkingHere ? "Present" : experience?.dateEnded ? new Date(experience.dateEnded).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
          }) : ''}
        </p>

        <div className='relative w-full overflow-hidden rounded-lg bg-white/5 dark:bg-[#292929]/30 
                        backdrop-blur-sm border border-white/10 shadow-md p-3'>
          <ul className='space-y-1.5 text-xs md:text-sm text-gray-300 max-h-[150px] overflow-y-auto 
                        scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-[#F7AB0A]/50
                        pr-2'>
            {experience?.points?.map((point, i) => (
              <li key={i} className='list-disc ml-3 hover:text-white transition-colors duration-200'>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
