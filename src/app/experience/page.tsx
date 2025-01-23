'use client';

import { Typography } from '@/components/ui/typography';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        title: "Blog Ebee",
        description: "Blog Ebee is a blog website that allows users to create, read, update, and delete blog posts. It is built with Next.js, TypeScript, Tailwind CSS, prisma, and up on Vercel.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "prisma", "Vercel"],
        liveUrl: "https://atelierebee.com"
    },
    {
        title: "DISC test",
        description: "DISC test is a test that allows users to know their personality type. It is built with Next.js, TypeScript, Tailwind CSS, prisma, and up on Vercel. I made it for Paradox Group",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "prisma", "Vercel"],
        liveUrl: "https://myself.portal.paradox.io/fr/connexion"
    },
    {
        title: "Portfolio",
        description: "My portfolio is a portfolio website that allows users to know more about me. It is built with Next.js, TypeScript, Tailwind CSS, and up on Vercel.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        liveUrl: "https://portfolio.vercel.app"
    },
    {
        title: "Miss France 2024",
        description: "Miss France 2024 is a website that allows users to mark their vote for the Miss France 2024. It is built with Next.js, TypeScript, Tailwind CSS, and up on Vercel.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        liveUrl: "https://miss-france-ten.vercel.app/",
        githubUrl: "https://github.com/Emilie-Bernard/missFrance"
    },
];

const ProjectPage: FC = () => {
    return (
        <div className=" mx-auto p-4 md:p-8 bg-white">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="pagename" className="text-primary z-10 uppercase mb-8 text-center">Projects</Typography>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Card key={index} className="p-4 hover:shadow-lg border-none transition-shadow duration-300 bg-primary">
                        {project.imageUrl && (
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        
                        <div className="p-6">
                            <Typography className="text-2xl text-white font-bold mb-3">{project.title}</Typography>
                            <Typography className="text-white dark:text-white mb-4">
                                {project.description}
                            </Typography>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className="px-3 py-1 bg-white text-primary rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex gap-4">
                                {project.githubUrl && (
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-white/50"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-white/50"
                                        >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;