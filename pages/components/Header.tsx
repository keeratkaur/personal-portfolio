import React from 'react';
import ReactDOM from 'react-dom'
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';

type Props = {};

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
        {/*div 1 */}
      <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5 
    }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 1.5,
    }}
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
        
        <SocialIcon
        className='cursor-pointer'
        network="email"
        fgColor='gray'
        bgColor='transparent'
        />

        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'> 
            Let's Have a Coffee!
        </p>
      </motion.div>



        {/*div 2 */}

      <motion.div 
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5 
    }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 1.5,
    }}
    className='flex flex-row items-center'
    >
        {/* Social Icons */}
        <SocialIcon url="https://www.linkedin.com/in/harkirat-kaur-/" 
        fgColor='gray'
        bgColor='transparent'
        />
         <SocialIcon url="https://github.com/keeratkaur" 
        fgColor='gray'
        bgColor='transparent'
        />
         <SocialIcon url="https://www.instagram.com/kaurkeeerat/" 
        fgColor='gray'
        bgColor='transparent'
        />
        

      </motion.div>
      

    </header>
  );
}

export default Header;

