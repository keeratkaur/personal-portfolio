import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import { Social } from '@/typings';

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  // State to track client-side mount
  const [mounted, setMounted] = useState(false);

  // Set mounted to true when the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until mounted to avoid hydration error
  if (!mounted) return null;

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      {/* First motion div */}
      <Link href="#contact">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='flex flex-row items-center text-theme cursor-pointer'
        >
          <SocialIcon
            className='cursor-pointer'
            network="email"
            fgColor='currentColor'
            bgColor='transparent'
          />

          <p className='uppercase hidden md:inline-flex text-sm text-theme'>
            Let's Have a Coffee!
          </p>
        </motion.div>
      </Link>

      {/* Second motion div */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'
      >
        {/* Social Icons */}
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='currentColor'
            bgColor='transparent'
            className='text-theme'
          />
        ))}
      </motion.div>
    </header>
  );
}

export default Header;
