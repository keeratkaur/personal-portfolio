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
  if (!socials) {
    return <div>About data is not available.</div>;
  }

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      {/* First motion div */}
      <Link 
        href="#contact" 
        aria-label="Contact via email"
        className="focus:outline-none focus:ring-2 focus:ring-[#F7AB0A] focus:rounded-lg"
      >
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
            aria-label="Email contact"
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
        role="list"
        aria-label="Social media links"
      >
        {/* Social Icons */}
        {socials?.map((social) => (
          <Link
            key={social._id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-[#F7AB0A] focus:rounded-lg"
            aria-label={`${social.title} profile`}
          >
            <SocialIcon
              fgColor='currentColor'
              bgColor='transparent'
              className='text-theme'
              network={social.title.toLowerCase()}
            />
          </Link>
        ))}
      </motion.div>
    </header>
  );
}

export default Header;
