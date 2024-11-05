import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hey Fam! You found me— Harkirat Kaur!",
            "// ChaserOfNewFrontiers.jsx",
            "<ExplorerOfIdeas, <BuilderOfSolutions />"
        ],
        loop: true,
        delaySpeed: 900
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <h1>
        <span>{text}</span> {/*React simple typewriter*/}
        <Cursor cursorColor='#F7AB0A' cursorBlinking={true} cursorStyle='!'/>
        </h1>
            

            
        
    </div>
  )
}

export default Hero