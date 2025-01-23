import Link from 'next/link';
import { Heart, Instagram, Linkedin, Github } from 'lucide-react';
import { Typography } from '../ui/typography';
import { Logo } from '../../assets/logo';

export const Footer = () => {
    return (
        <footer className="w-full border-card bg-primary text-secondary">
            <div className="m-auto w-full flex flex-col max-w-5xl gap-3 px-2 py-4">
                <div className="flex justify-center items-center">
                    <Logo color="#f9F9F9" width={300} height={150}/>
                </div>
                <div className="flex flex-row items-start justify-between mx-6">
                    <div className="flex flex-col gap-2">
                        <Typography variant="h3">
                            Navigation
                        </Typography>
                        <Typography variant="base" as={Link} href="/">
                            Home
                        </Typography>
                        <Typography variant="base" as={Link} href="/projects">
                            Projects
                        </Typography>
                        <Typography variant="base" as={Link} href="/timeline">
                            Timeline
                        </Typography>
                        <Typography variant="base" as={Link} href="/whoiam">
                            Who I Am
                        </Typography>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-sm">
                        <Typography variant="h3" className="hover:underline">
                            Contact
                        </Typography>
                        <Link className="hover:underline" href="mailto:emili1.bernard@gmail.com">
                            emilie1.bernard@gmail.com
                        </Link>
                        <div className="flex flex-row gap-2">
                            <Link className="hover:underline" href="https://instagram.com" target="_blank">
                                <Instagram strokeWidth={1} size={21} />
                            </Link>
                            <Link className="hover:underline" href="https://linkedin.com" target="_blank">
                                <Linkedin strokeWidth={1} size={21} />
                            </Link>
                            <Link className="hover:underline" href="https://github.com" target="_blank">
                                <Github strokeWidth={1} size={21} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center">
                    <Typography variant="base" className="text-xs flex flex-row gap-2">
                        made with <Heart size={14} /> by Emilie Bernard @ {new Date().getFullYear()}
                    </Typography>
                </div>
            </div>
        </footer>
    );
};
