import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity';
import { motion } from 'framer-motion';

type Props = {
    pageInfo: PageInfo;
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hey Fam! You found me— ${pageInfo.name}`,
            "// ChaserOfNewFrontiers.jsx",
            "<ExplorerOfIdeas, <BuilderOfSolutions />"
        ],
        loop: true,
        delaySpeed: 900
    })
    if (!pageInfo) {
        return <div>About data is not available.</div>;
      }

    return (
        <div className='h-screen flex flex-col items-center justify-center relative overflow-hidden'>
            {/* Background animation */}
            <BackgroundCircles />

            {/* Profile section */}
            <div className='z-20 flex flex-col items-center gap-6'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className='relative w-28 h-28 md:w-32 md:h-32 xl:w-36 xl:h-36'
                >
                    <div className='absolute inset-0 bg-[#F7AB0A]/30 rounded-full -z-10 transform scale-110 blur-2xl animate-pulse' />
                    <Image
                        className='rounded-full object-cover border-2 border-[#F7AB0A]/50 shadow-2xl'
                        src={urlFor(pageInfo.heroImage).url()}
                        alt={pageInfo.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 112px, (max-width: 1280px) 128px, 144px"
                    />
                </motion.div>

                <div className='space-y-2 text-center'>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='text-xs uppercase text-gray-500 pb-1 tracking-[12px] md:tracking-[15px]'
                    >
                        {pageInfo.role}
                    </motion.h2>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='text-2xl md:text-3xl lg:text-4xl font-semibold px-8'
                    >
                        <span className='mr-2'>{text}</span>
                        <Cursor cursorColor='#F7AB0A' cursorBlinking={true} cursorStyle='!'/>
                    </motion.h1>
                </div>

                {/* Navigation buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='flex flex-wrap justify-center gap-2 px-4 pt-2'
                >
                    <Link href='#about'>
                        <button 
                            className='heroButton bg-[#F7AB0A]/10 hover:bg-[#F7AB0A]/20'
                            aria-label="Navigate to About section"
                        >
                            About
                        </button>
                    </Link>
                    
                    <Link href='#experience'>
                        <button 
                            className='heroButton bg-[#F7AB0A]/10 hover:bg-[#F7AB0A]/20'
                            aria-label="Navigate to Experience section"
                        >
                            Experience
                        </button>
                    </Link>

                    <Link href='#skills'>
                        <button 
                            className='heroButton bg-[#F7AB0A]/10 hover:bg-[#F7AB0A]/20'
                            aria-label="Navigate to Skills section"
                        >
                            Skills
                        </button>
                    </Link>
                    
                    <Link href='#projects'>
                        <button 
                            className='heroButton bg-[#F7AB0A]/10 hover:bg-[#F7AB0A]/20'
                            aria-label="Navigate to Projects section"
                        >
                            Projects
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero