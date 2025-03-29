import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-5 lg:right-5 z-50 
                      p-1.5 sm:p-2 md:p-2.5 lg:p-3 
                      rounded-full bg-[rgb(var(--background))] 
                      shadow-md hover:shadow-lg
                      border border-[rgb(var(--foreground)_/_0.1)] 
                      transition-all duration-300 ease-in-out
                      w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-5 lg:right-5 z-50 
                 p-1.5 sm:p-2 md:p-2.5 lg:p-3 
                 rounded-full bg-[rgb(var(--background))] 
                 shadow-md hover:shadow-lg 
                 border border-[rgb(var(--foreground)_/_0.1)]
                 transition-all duration-300 ease-in-out
                 backdrop-blur-sm bg-opacity-80"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <svg
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 
                     text-yellow-500 transition-colors duration-300
                     drop-shadow-[0_0_3px_rgba(234,179,8,0.3)]"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      ) : (
        <svg
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 
                     text-[rgb(var(--foreground))] transition-colors duration-300
                     drop-shadow-[0_0_2px_rgba(255,255,255,0.1)]"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      )}
    </motion.button>
  );
} 