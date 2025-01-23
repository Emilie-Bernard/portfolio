import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
    year: string;
}

const projects: Project[] = [
    {
        title: "Project 1",
        description: "Description of your first project. Explain what you built and its main features.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/yourusername/project1",
        liveUrl: "https://project1.com",
        year: "2024"
    },
    // Add more projects here
];

const ExperiencePage: FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen p-8 relative">
            {/* Background with overlay */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                        Projects
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore my latest projects and technical experiments
                    </p>
                </motion.div>
                
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            className="group relative bg-primary/10 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300"
                        >
                            {project.imageUrl && (
                                <div className="relative h-48 w-full">
                                    <Image 
                                        src={project.imageUrl} 
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        priority={index < 3}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                                </div>
                            )}
                            
                            <div className="p-6 relative">
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-2xl text-white font-bold">{project.title}</h2>
                                    <span className="text-sm text-primary/80 font-mono">{project.year}</span>
                                </div>
                                
                                <p className="text-gray-300 mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex gap-4 pt-4 border-t border-primary/20">
                                    {project.githubUrl && (
                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a 
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ExperiencePage; 