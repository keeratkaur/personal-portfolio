import { motion } from 'framer-motion'
import React from 'react'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo;
}

function About({ pageInfo }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative min-h-screen max-w-7xl mx-auto px-4 md:px-10 py-24 flex flex-col md:flex-row items-center justify-center md:justify-between gap-12'
    >
      <h3 className='absolute top-24 left-1/2 transform -translate-x-1/2 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.div 
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className='relative w-full max-w-md md:w-1/2 aspect-square flex-shrink-0'
      >
        <div className='absolute inset-0 bg-[#F7AB0A]/30 rounded-2xl -z-10 transform rotate-12 scale-105 blur-3xl' />
        <motion.img 
          src={urlFor(pageInfo.profilePic).url()}
          alt="Profile picture"
          className='w-full h-full object-cover rounded-2xl shadow-2xl'
          style={{ 
            WebkitBackfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        />
      </motion.div>

      <motion.div 
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className='space-y-8 px-0 md:px-10 w-full md:w-1/2'
      >
        <div className='backdrop-blur-sm bg-white/5 rounded-2xl p-6 shadow-xl border border-white/10'>
          <h4 className='text-4xl font-bold mb-6 bg-gradient-to-r from-[#F7AB0A] to-[#F7CD1E] text-transparent bg-clip-text'>
            Glimpse of my <span className='italic'>Journey</span>
          </h4>
          <p className='text-lg text-gray-300 leading-relaxed'>
            {pageInfo.backgroundInformation}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
