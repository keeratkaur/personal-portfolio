'use client';

import React, { useState } from 'react'

const BackToTop = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    
    const handleClick = () => {
        const heroSection = document.getElementById('hero');
        if (!heroSection) return;

        // Get the hero section's position relative to the viewport
        const heroRect = heroSection.getBoundingClientRect();
        
        // If hero section is fully visible at the top
        if (heroRect.top >= 0 && heroRect.top <= 100) {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 2000);
            return;
        }
        
        // If not at hero section, scroll to it
        heroSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5" style={{ zIndex: 99999 }}>
            <button
                onClick={handleClick}
                className="bg-[#F7AB0A] text-black w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#F7AB0A]/80 transition-all duration-300 cursor-pointer text-xl sm:text-2xl font-bold relative"
            >
                ↑
                {showTooltip && (
                    <div className="absolute bottom-full right-0 mb-3 bg-black/90 text-white text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg shadow-xl backdrop-blur-sm border border-white/10 font-medium flex items-center gap-2 whitespace-nowrap">
                        Already at the top!
                        <span className="animate-wave inline-block">👋</span>
                    </div>
                )}
            </button>
        </div>
    );
};

export default BackToTop; 