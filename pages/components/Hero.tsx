import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity';


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
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
        <BackgroundCircles/>
        <Image
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src={urlFor(pageInfo.heroImage).url()} // Path to the image
            alt="Keerat Kaur"
            width={200}
            height={200}
            
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                {pageInfo.role}
                </h2>
        </div>

        <h1 className='text-3xl lg:text-3xl font-semibold px-10'>
        <span className='mr-3'>{text}</span> {/*React simple typewriter*/}
        <Cursor cursorColor='#F7AB0A' cursorBlinking={true} cursorStyle='!'/>
        </h1>
    
        <div className='pt-5 z-20'>
            <Link href='#about'>
            <button className='heroButton'>About</button>
            </Link>
            
            <Link href={'#experience'}>
            <button className='heroButton'>Experience</button>
            </Link>

            <Link href={'#education'}>
            <button className='heroButton'>Education</button>
            </Link>
            
            <Link href={'#skills'}>
            <button className='heroButton'>Skills</button>
            </Link>
            
            <Link href={'#projects'}>
            <button className='heroButton'>Projects</button>
            </Link>

            
                
        </div>
        
    </div>
  )
}

export default Hero