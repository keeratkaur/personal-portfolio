import { motion } from 'framer-motion';
import React from 'react'
import type { Project } from '@/typings'
import { urlFor } from '@/lib/sanity'

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
    console.log("Projects data:", projects);
    
    if (!projects) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-2xl text-theme">Loading projects...</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative z-10 w-full flex space-x-8 overflow-x-auto p-10 snap-x snap-mandatory mt-20 h-[450px] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects?.map((project, i) => (
                    <article key={project._id} className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[600px] snap-center bg-white/10 dark:bg-[#1a1a1a]/60 p-6 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 h-[400px]'>
                        {project.image && project.image.asset && (
                            <motion.img
                                initial={{
                                    y: -100,
                                    opacity: 0,
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={urlFor(project.image).url()}
                                alt={project.title || "Project image"}
                                className="w-28 h-28 xl:w-[150px] xl:h-[150px] object-contain bg-white dark:bg-[#292929] p-2 rounded-lg"
                            />
                        )}

                        <div className='space-y-4 px-0 md:px-8 flex-1 overflow-y-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                            <h4 className='text-2xl md:text-3xl font-semibold text-center text-theme'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                {project.title}
                            </h4>

                            {project.technologies && project.technologies.length > 0 && (
                                <div className='flex items-center space-x-3 justify-center flex-wrap gap-y-2'>
                                    {project.technologies.map((technology) => (
                                        technology.image ? (
                                            <img
                                                className='h-8 w-8 md:h-10 md:w-10 rounded-full bg-white dark:bg-[#292929] p-1 object-contain'
                                                key={technology._id}
                                                src={urlFor(technology.image).url()}
                                                alt={technology.title || "Technology icon"}
                                            />
                                        ) : null
                                    ))}
                                </div>
                            )}

                            <p className='text-lg text-center md:text-left text-theme'>
                                {project.summary}
                            </p>
                        </div>
                    </article>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    );
}

export default Projects