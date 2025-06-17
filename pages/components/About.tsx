import { motion } from 'framer-motion'
import React from 'react'
import { PageInfo } from '@/typings'

type Props = {
    pageInfo: PageInfo;
}

function About({ pageInfo }: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center md:justify-evenly mx-auto items-center'>
      
      <h3 className='absolute top-10 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10'>
        About
      </h3>

      <motion.img 
        className='mt-20 md:mt-0 flex-shrink-0 w-40 h-40 md:w-56 md:h-56 xl:w-[400px] xl:h-[400px] rounded-full object-cover md:rounded-lg' 
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        src="/images/MainImage.jpg" 
      />

      <div className='space-y-6 px-5 md:px-10'>
        <h4 className='text-3xl font-semibold mt-10'>
          Glimpse of my <span className='underline decoration-[#F7AB0A]/50'>Journey</span>
        </h4>
        <p>
          Hey, fam! I'm Harkirat, and my journey in tech has been nothing short of an adventure. From the moment I picked up my first line of code, I've been hooked on the challenge of transforming ideas into reality. Whether I'm building dynamic web apps, exploring machine learning, or diving into cloud technologies, every step has been driven by my passion for learning and creating.
        </p>
        <p className="mt-4">
          Along the way, I've faced challenges, celebrated wins, and never stopped growing. I'm always on the lookout for the next opportunity to push my boundaries, collaborate with amazing people, and build something that truly makes an impact.
        </p>
        <p className="mt-4">
          Ready to build something amazing? Let's make it happen! ;p
        </p>
      </div>

    </div>
  )
}

export default About
