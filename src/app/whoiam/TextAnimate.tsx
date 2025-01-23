"use client";
import { useEffect, useRef, useState } from 'react';
import { Typography } from "@/components/ui/typography";

const AnimatedText: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll percentage within 980px
            const scrollPercent = Math.min(100, (window.scrollY / 2000) * 100);
            setScrollPosition(scrollPercent);
            
            if (textRef.current) {
                // Inversé le signe pour changer la direction
                const xPosition = (30 - scrollPercent) * 2; // Au lieu de (scrollPercent - 50) * 2
                textRef.current.style.transform = `translate(calc(-70% + ${xPosition}vw), -50%)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={textRef}
            className="text-secondary fixed top-1/2 left-1/2 whitespace-nowrap transition-transform duration-75"
        >
            <Typography variant="pagename">
                CREATIVE, PASSIONNATE, AGILE
            </Typography>
        </div>
    );
};

export default AnimatedText;