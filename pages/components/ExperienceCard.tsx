import { urlFor } from '@/sanity'
import { Experience } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {experience:Experience}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[550px] xl:w-[700px] max-w-full max-h-[450px] snap-center bg-white/10 dark:bg-[#1a1a1a]/60 p-6 md:p-8 xl:p-8 hover:opacity-100 opacity-60 mx-5 snap-center cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
        className='w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-contain bg-white dark:bg-[#292929] p-2' 
        src={experience?.companyImage ? urlFor(experience.companyImage).url() : 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'} 
        alt="Company Logo" 
      />

      <div className='space-y-4 px-0 md:px-8 flex-1 overflow-y-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <h4 className='text-2xl md:text-3xl font-light text-theme'>{experience?.jobTitle}</h4>
        <p className='font-bold text-lg md:text-xl mt-1 text-theme'>{experience?.company}</p>
        
        <div className='flex space-x-2 my-2 justify-center md:justify-start'>
          {/* Tech used */}
          {experience?.technologies?.map((technology) => (
            technology?.image ? (
              <img
                key={technology._id}
                src={urlFor(technology.image).url()}
                alt={technology.title || 'Technology'}
                className='h-10 w-10 rounded-full bg-white dark:bg-[#292929] p-1 object-contain'
              />
            ) : null
          ))}
        </div>

        <p className='uppercase py-3 text-gray-500 dark:text-gray-400'>
          {experience?.dateStarted ? new Date(experience.dateStarted).toDateString() : ''} 
          {' - '} 
          {experience?.isCurrentlyWorkingHere ? "Present" : experience?.dateEnded ? new Date(experience.dateEnded).toDateString() : ''}
        </p>

        <ul className='list-disc space-y-2 ml-5 text-sm pr-5 md:text-base h-96 w-4/5 overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 text-theme'>
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
