import { motion } from 'framer-motion';
import React, { useState } from 'react'
import type { Project } from '@/typings'
import { urlFor } from '@/lib/sanity'

type Props = {
    projects: Project[];
}

const PROJECTS_PER_PAGE = 3;

function Projects({ projects }: Props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    
    if (!projects) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-2xl text-theme">Loading projects...</p>
            </div>
        );
    }

    // Filter projects based on search query
    const filteredProjects = projects.filter(project => {
        const searchLower = searchQuery.toLowerCase();

        if (!projects) {
            return <div>About data is not available.</div>;
          }
        return (
            project.title.toLowerCase().includes(searchLower) ||
            project.summary.toLowerCase().includes(searchLower) ||
            (project.technologies && project.technologies.some(tech => 
                tech.title.toLowerCase().includes(searchLower)
            ))
        );
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

    // Debug logging
    console.log('Pagination Debug:', {
        currentPage,
        totalPages,
        startIndex,
        projectsPerPage: PROJECTS_PER_PAGE,
        totalProjects: filteredProjects.length,
        paginatedProjectsCount: paginatedProjects.length
    });

    // Reset to first page when search query changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

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

            {/* Search Input */}
            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-[#1a1a1a]/60 text-theme border border-gray-500/20 focus:outline-none focus:border-[#F7AB0A]/50 transition-colors"
                />
            </div>

            <div className='relative z-10 w-full flex space-x-8 overflow-x-auto p-10 snap-x snap-mandatory mt-32 h-[450px] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {paginatedProjects.length === 0 ? (
                    <div className="flex items-center justify-center w-full">
                        <p className="text-xl text-theme">No projects found matching your search.</p>
                    </div>
                ) : (
                    paginatedProjects.map((project, i) => (
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
                                        Case Study {startIndex + i + 1} of {filteredProjects.length}:
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
                    ))
                )}
            </div>

            {/* Pagination Controls */}
            {filteredProjects.length > 0 && (
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg bg-white/10 dark:bg-[#1a1a1a]/60 text-theme border border-gray-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 dark:hover:bg-[#1a1a1a]/80 transition-colors"
                    >
                        Previous
                    </button>
                    <span className="text-theme">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg bg-white/10 dark:bg-[#1a1a1a]/60 text-theme border border-gray-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 dark:hover:bg-[#1a1a1a]/80 transition-colors"
                    >
                        Next
                    </button>
                </div>
            )}

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    );
}

export default Projects