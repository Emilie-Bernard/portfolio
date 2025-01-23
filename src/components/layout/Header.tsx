import Image from 'next/image';
import { motion } from 'framer-motion';


const Header = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background image with subtle zoom effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
            >
                <Image 
                    unoptimized={true}
                    src="/images/background.png" 
                    alt="background" 
                    width={1920} 
                    height={1080} 
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                    priority
                />
            </motion.div>

            {/* Content container with animation */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-0 top-0 w-1/2 h-full p-16 flex flex-col items-start justify-center gap-8"
            >
                {/* Name SVG with subtle hover effect */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <Image 
                        src="/images/name.svg" 
                        alt="emilie bernard" 
                        width={1000} 
                        height={300} 
                        className="drop-shadow-2xl"
                        priority
                    />
                </motion.div>

                {/* Role title with gradient */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative"
                >
                    <h2 className="text-4xl font-bold tracking-wider bg-gradient-to-r from-white via-white to-white/70 text-transparent bg-clip-text">
                        FULLSTACK DEVELOPER
                    </h2>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Header;