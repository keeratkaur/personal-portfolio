'use client';

import React, { useState, useEffect } from 'react'

const BackToTop = () => {
    //const [showTooltip, setShowTooltip] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const toggleVisibility = () => {
            const scrollContainer = document.querySelector('.overflow-y-scroll');
            if (scrollContainer && scrollContainer.scrollTop > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const scrollContainer = document.querySelector('.overflow-y-scroll');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', toggleVisibility);
            return () => scrollContainer.removeEventListener('scroll', toggleVisibility);
        }
    }, []);
    
    const handleClick = () => {
        const scrollContainer = document.querySelector('.overflow-y-scroll');
        if (!scrollContainer) return;

        // Temporarily remove snap scrolling
        scrollContainer.classList.remove('snap-y', 'snap-mandatory');

        // Scroll to top
        scrollContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Restore snap scrolling after animation
        setTimeout(() => {
            scrollContainer.classList.add('snap-y', 'snap-mandatory');
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    };

    return (
        <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5" style={{ zIndex: 9999 }}>
            <button
                onClick={handleClick}
                onKeyPress={handleKeyPress}
                className="bg-[#F7AB0A] text-black w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#F7AB0A]/80 transition-all duration-300 cursor-pointer text-xl sm:text-2xl font-bold relative focus:outline-none focus:ring-2 focus:ring-[#F7AB0A]"
                aria-label="Back to top"
               // aria-expanded={showTooltip}
                aria-controls="tooltip"
                tabIndex={0}
                style={{ opacity: isVisible ? 1 : 0, visibility: isVisible ? 'visible' : 'hidden' }}
            >
                <span className="sr-only">Back to top</span>
                ↑
                {/* {showTooltip && (
                    <div 
                        id="tooltip"
                        className="absolute bottom-full right-0 mb-3 bg-black/90 text-white text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg shadow-xl backdrop-blur-sm border border-white/10 font-medium flex items-center gap-2 whitespace-nowrap"
                        role="tooltip"
                    >
                        Already at the top!
                        <span className="animate-wave inline-block" aria-hidden="true">👋</span>
                    </div>
                )} */}
            </button>
        </div>
    );
};

export default BackToTop; 