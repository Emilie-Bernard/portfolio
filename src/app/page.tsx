import React, { Suspense } from 'react'; 
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import LoadingImage from '../components/layout/Loading';

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col">
    <Suspense fallback={<LoadingImage/>}> 
      <Image src="/images/principal.svg" alt="emiliebernard" width="1920" height="1080"/>
      <div className="z-10 w-full max-w-5xl justify-between font-mono text-sm lg:flex flex-col p-12">
        <Typography variant="h1" className="text-primary mb-6">
          Helping you build your project is my fuel.
        </Typography>
        <Typography variant="h3" className="my-6 text-primary">
          With over 4 years of experience and more than 15 projects under my belt, I specialize in creating web and mobile apps from the ground up.
        </Typography>
        <Typography variant="italic" className="text-primary mb-12">
          Whether working solo or as part of an agile team, I excel at understanding your needs and translating them into effective solutions.
        </Typography>
        <Typography variant="h3" className="my-6 text-primary">
          As an expert in the React and Node stack, I can take over and drive your project from start to finish.
        </Typography>
        <Typography variant="italic" className=" text-primary">
          And if you're using a different stack, no worries—I’m proficient in various technologies and can seamlessly integrate new components into your existing setup.
        </Typography>
        <Typography variant="large" className="flex flex-row my-12 items-center hover:gap-3 hover:font-semibold text-primary" as={Link} href="/myexperience">
          MY  EXPERIENCE <MoveUpRight />
        </Typography>
        <div className="inline-flex items-center justify-center w-full text-primary">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 " />
        </div>
        <Typography variant="h3" className=" text-primary">
          I started my development journey in 2017 at Epitech Marseille. In 2021, I joined Extia Barcelona, and I am currently working at Circuit Paul Ricard in the south of France.
        </Typography>
        <Typography variant="large" className="flex flex-row my-12 items-center hover:gap-3 hover:font-semibold text-primary" as={Link} href="/timeline">
          CHECK MY JOURNEY <MoveUpRight />
        </Typography>
        <div className="inline-flex items-center justify-center w-full text-primary">
          <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 " />
        </div>
        <Typography variant="h3" className=" text-primary">
          I am eager to expand my skills and expertise by contributing to innovative and tech-for-good projects.
        </Typography>
        <Typography variant="large" className="flex flex-row my-12 items-center hover:gap-3 hover:font-semibold text-primary" as={Link} href="/whoiam">
          MORE ABOUT MYSELF <MoveUpRight />
        </Typography>
      </div>
      </Suspense>
    </main>
  );
}
