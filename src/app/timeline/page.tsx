'use client';

import { Timeline as MuiTimeline, TimelineItem, TimelineContent, TimelineSeparator, TimelineDot, TimelineConnector } from '@mui/lab';
import { Typography } from '@/components/ui/typography';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Fullstack Engineer",
        company: "The Tech Nation",
        period: "2024 - ongoing",
        description: [
            "Led development of key features",
            "Collaborated with cross-functional teams",
            "Improved system performance by 40%"
        ]
    },
    {
        title: "NEXT Fullstack Developer",
        company: "Paradox Group",
        period: "2024 - 2025",
        description: [
            "Led development of DISC test application",
            "Collaborated with cross-functional teams",
            "Implement Notion and Hubspot integration"
        ]
    }, {
        title: "Fullstack Developer",
        company: "Excelis",
        period: "2023 - 2024",
        description: [
            "Led development of Excelis project",
            "Multiple projects developed for different users",
            "Set up Apache, gitlab with CI/CD"
        ]
    }, {
        title: "Frontend Developer",
        company: "Axa GO",
        period: "2022 - 2023",
        description: [
            "Update and maintain the website"
        ]
    }, {
        title: "Fullstack Developer",
        company: "Wisembly",
        period: "2021 - 2022",
        description: [
            "Create and setup admin pages for event management",
            "Help impelment new features in the chat",
        ]
    }, {
        title: "Python Developer",
        company: "Direction Générale de l'armement",
        period: "2021",
        description: [
            "Develop an application to help calculate zone of potential impact",
            "Debbug and improve an augmented reality application",
        ]
    }, {
        title: "Fullstack Developer",
        company: "Gemalto",
        period: "2018",
        description: [
            "Create a web application to manage security audit",
        ]
    }, {
        title: "Student",
        company: "Epitech",
        period: "2017-2022",
        description: [
            "Learn to learn",
            "Learn to code",
            "How to manage a project",
            "How to work in a team",
        ]
    },
];

const TimelineCard = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const cardVariants = {
        hidden: {
            opacity: 0,
            x: index % 2 === 0 ? 50 : -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2
            }
        }
    };

    const dotVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <TimelineItem ref={ref}>
            <TimelineSeparator>
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={dotVariants}
                >
                    <TimelineDot className='bg-primary' />
                </motion.div>
                {index !== experiences.length - 1 && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={inView ? { height: "100%" } : { height: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <TimelineConnector className='bg-primary' />
                    </motion.div>
                )}
            </TimelineSeparator>
            <TimelineContent>
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <Card elevation={3} className="p-4 hover:shadow-lg transition-shadow duration-300">
                        <Typography variant="h6" component="h3">
                            {experience.title}
                        </Typography>
                        <Typography variant="subtitle1" className="text-primary font-bold">
                            {experience.company}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {experience.period}
                        </Typography>
                        <ul className="mt-2">
                            {experience.description.map((point, idx) => (
                                <li key={idx}>
                                    <Typography variant="body2">
                                        {point}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>
            </TimelineContent>
        </TimelineItem>
    );
};

const Timeline = () => {
    return (
        <div className="mx-auto p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="pagename" className="text-primary z-10 uppercase mb-8 text-center">Timeline</Typography>
            
            </motion.div>

            <MuiTimeline position="alternate">
                {experiences.map((experience, index) => (
                    <TimelineCard key={index} experience={experience} index={index} />
                ))}
            </MuiTimeline>
        </div>
    );
};

export default Timeline;