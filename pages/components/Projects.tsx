import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects=[1,2,3,4]
  return (
    <motion.div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center md:justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        
        <div className='relayive w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {/* Projects */}
            {
                projects.map((project, i) => (
                    <div key={`project-${i}`} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img 
                        initial={{
                            y:-300,
                            opacity:0
                        }}
                        transition={{
                            duration:1.2
                        }}
                        whileInView={{
                            opacity:1,
                            y:0
                        }}
                        viewport={{once:true}} // donot repeat it again
                        src="https://upload.wikimedia.org/wikipedia/en/3/3c/Netflix_UI_for_Web.png" 
                        alt={`Project ${i + 1}`} />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}:</span> {" "}
                             Netflix Clone </h4>

                             <p className='text-lg text-center md:text-left'>
                             A Netflix Clone is a web application designed to replicate the core features and functionalities of Netflix. It provides users with a similar streaming experience, including:

                            Content Library: Access to a diverse range of movies, TV shows, and original content, much like Netflix's extensive library.
                            User Profiles: Allows multiple users to create individual profiles, each with personalized recommendations and watchlists.
                            Recommendations: Uses algorithms to suggest content based on user preferences and viewing history.
                             </p>
                    </div>
                    </div>
                    
 ) )}
        </div>
        
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div> {/* Background line diagonal*/}
        </motion.div>
  );
}

export default Projects