import { Link, MoveUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Typography } from "../ui/typography";

const HomePage = () => {
    const router = useRouter();
    return (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 space-y-12">
            {/* Section Hero */}
            <div className="space-y-6">
                <Typography 
                    variant="h1" 
                    className="text-white text-4xl lg:text-5xl font-bold animate-fade-in"
                >
                    Helping you build your project is my fuel.
                </Typography>
                <Typography 
                    variant="h3" 
                    className="text-white/80 text-xl lg:text-2xl leading-relaxed"
                >
                    With over 4 years of experience and more than 15 projects under my belt, 
                    I specialize in creating web and mobile apps from the ground up.
                </Typography>
                <Typography 
                    variant="italic" 
                    className="text-white/70 text-lg"
                >
                    Whether working solo or as part of an agile team, I excel at understanding 
                    your needs and translating them into effective solutions.
                </Typography>
            </div>

            {/* Section Expertise */}
            <div className="space-y-6 p-6 rounded-xl border border-primary/10">
                <Typography 
                    variant="h3" 
                    className="text-white text-xl"
                >
                    As an expert in the React and Node stack, I can take over and drive 
                    your project from start to finish.
                    And if you're using a different stack, no worries—I'm proficient in various 
                    technologies and can seamlessly integrate new components into your existing setup.
                </Typography>

                <Typography 
                    variant="large" 
                    className="inline-flex items-center gap-2 text-white hover:gap-3 
                    transition-all hover:font-semibold group cursor-pointer uppercase" 
                    onClick={() => router.push('/projects')}
                >
                    My Projects 
                    <Link className="group-hover:translate-x-1 transition-transform" />
                </Typography>
            </div>

            {/* Section Journey */}
            <div className="space-y-6 border border-primary/10 p-6 rounded-xl">
                <Typography 
                    variant="h3" 
                    className="text-white text-xl"
                >
                    I started my development journey in 2017 at Epitech Marseille. 
                    In 2021, I joined Extia Barcelona, and I am currently working at 
                    Circuit Paul Ricard in the south of France.
                </Typography>
                <Typography 
                    variant="large" 
                    className="inline-flex items-center gap-2 text-white hover:gap-3 
                    transition-all hover:font-semibold group cursor-pointer" 
                    onClick={() => router.push('/timeline')}
                >
                    CHECK MY JOURNEY 
                    <Link className="group-hover:translate-x-1 transition-transform" />
                </Typography>
            </div>

            {/* Section Call to Action */}
            <div className="space-y-6 border border-primary/10 p-6 rounded-xl">
                <Typography 
                    variant="h3" 
                    className="text-white text-xl"
                >
                    I am eager to expand my skills and expertise by contributing to 
                    innovative and tech-for-good projects.
                </Typography>
                <Typography 
                    variant="large" 
                    className="inline-flex items-center gap-2 text-white hover:gap-3 
                    transition-all hover:font-semibold group cursor-pointer" 
                    onClick={() => router.push('/whoiam')}
                >
                    MORE ABOUT MYSELF 
                    <Link className="group-hover:translate-x-1 transition-transform" />
                </Typography>
            </div>
        </div>
    );
};

export default HomePage;
